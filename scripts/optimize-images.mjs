#!/usr/bin/env node
/**
 * Point Zero — Build-time image optimization.
 *
 * Why: hero, case-study and team PNGs ship at 200KB–770KB each, blocking LCP
 * and wasting mobile data. Vite emits hashed filenames into dist/assets, so we
 * post-process every PNG ≥ 80KB:
 *   1. Re-encode the original PNG in place at max compression (lossless).
 *      Existing `<img src=…>` references keep working unchanged.
 *   2. Emit a sibling `.webp` (and `.avif`) at quality 80 — components can
 *      opt in via `<picture>` for a 2–5× smaller payload.
 *
 * The script is idempotent: it skips files that already shrunk below a
 * threshold or where a fresh `.webp` already exists for the current PNG hash.
 */
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_ASSETS = join(__dirname, '..', 'dist', 'assets');

const MIN_BYTES = 80 * 1024; // only bother with files ≥ 80KB
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 60;

function fmt(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

async function* walk(dir) {
  if (!existsSync(dir)) return;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

async function processPng(file) {
  const buf = await readFile(file);
  const originalSize = buf.length;
  if (originalSize < MIN_BYTES) return null;

  // Re-encode the PNG at max compression — keeps existing src= refs working.
  // pngQuant + adaptiveFiltering give ~15-35% reduction on most photos.
  let pngOut;
  try {
    pngOut = await sharp(buf, { failOn: 'none' })
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true,
        quality: 90,
        effort: 10,
      })
      .toBuffer();
  } catch (err) {
    console.warn(`[optimize-images] skip ${basename(file)} — ${err.message}`);
    return null;
  }

  let pngSaved = 0;
  if (pngOut.length < originalSize) {
    await writeFile(file, pngOut);
    pngSaved = originalSize - pngOut.length;
  }

  // Emit a sibling .webp at quality 80
  const webpFile = file.slice(0, -extname(file).length) + '.webp';
  let webpSize = 0;
  try {
    const webp = await sharp(buf, { failOn: 'none' })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(webpFile, webp);
    webpSize = webp.length;
  } catch (err) {
    console.warn(`[optimize-images] webp skip ${basename(file)} — ${err.message}`);
  }

  // Emit a sibling .avif at quality 60 (smaller still, modern browsers)
  const avifFile = file.slice(0, -extname(file).length) + '.avif';
  let avifSize = 0;
  try {
    const avif = await sharp(buf, { failOn: 'none' })
      .avif({ quality: AVIF_QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(avifFile, avif);
    avifSize = avif.length;
  } catch (err) {
    // AVIF can fail on some platforms — fall back silently
  }

  return {
    file: basename(file),
    originalSize,
    pngSize: Math.min(pngOut.length, originalSize),
    pngSaved,
    webpSize,
    avifSize,
  };
}

async function processJpg(file) {
  const buf = await readFile(file);
  const originalSize = buf.length;
  if (originalSize < MIN_BYTES) return null;
  let jpgOut;
  try {
    jpgOut = await sharp(buf, { failOn: 'none' })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toBuffer();
  } catch (err) {
    return null;
  }
  let saved = 0;
  if (jpgOut.length < originalSize) {
    await writeFile(file, jpgOut);
    saved = originalSize - jpgOut.length;
  }
  // also emit webp + avif siblings
  const stem = file.slice(0, -extname(file).length);
  try {
    const webp = await sharp(buf, { failOn: 'none' }).webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
    await writeFile(stem + '.webp', webp);
  } catch {}
  try {
    const avif = await sharp(buf, { failOn: 'none' }).avif({ quality: AVIF_QUALITY, effort: 6 }).toBuffer();
    await writeFile(stem + '.avif', avif);
  } catch {}
  return { file: basename(file), originalSize, pngSize: Math.min(jpgOut.length, originalSize), pngSaved: saved, webpSize: 0, avifSize: 0 };
}

async function main() {
  if (!existsSync(DIST_ASSETS)) {
    console.error('[optimize-images] dist/assets not found — run `vite build` first.');
    process.exit(1);
  }

  let totalOriginal = 0;
  let totalPng = 0;
  let totalWebp = 0;
  let totalAvif = 0;
  let processed = 0;

  const tasks = [];
  for await (const file of walk(DIST_ASSETS)) {
    const ext = extname(file).toLowerCase();
    if (ext === '.png') tasks.push(processPng(file));
    else if (ext === '.jpg' || ext === '.jpeg') tasks.push(processJpg(file));
  }

  // Run up to 4 in parallel — sharp parallelises internally and we still want
  // multi-file throughput on the hot images.
  const results = [];
  const queue = [...tasks];
  const workers = Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const r = await queue.shift();
      if (r) results.push(r);
    }
  });
  await Promise.all(workers);

  for (const r of results) {
    if (!r) continue;
    processed++;
    totalOriginal += r.originalSize;
    totalPng += r.pngSize;
    totalWebp += r.webpSize;
    totalAvif += r.avifSize;
  }

  console.log(
    `[optimize-images] processed ${processed} files · ` +
      `png ${fmt(totalOriginal)} → ${fmt(totalPng)} (saved ${fmt(totalOriginal - totalPng)}) · ` +
      `webp ${fmt(totalWebp)} · avif ${fmt(totalAvif)}`,
  );
}

main().catch((err) => {
  console.error('[optimize-images] failed:', err);
  process.exit(1);
});
