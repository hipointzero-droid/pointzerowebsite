#!/usr/bin/env node
/**
 * Point Zero — Per-page Open Graph image generator.
 *
 * Why: Facebook, LinkedIn, Twitter/X, WhatsApp, Slack and Discord all pull
 * og:image when a link is shared. A single shared image across every page
 * makes every share look identical and lowers CTR. This script generates one
 * branded 1200×630 PNG per page (home, services, about, contact, blog,
 * project) into public/og/<slug>.png so each page can advertise its own
 * preview in <meta property="og:image"> + <meta name="twitter:image">.
 *
 * The output goes into public/ so Vite copies it to dist/ untouched, and so
 * the same files are served at https://pointzero.com.np/og/<slug>.png in
 * production. Runs before `vite build` (see package.json scripts.build).
 *
 * Idempotent: if public/og/<slug>.png already exists with identical SVG
 * source, the PNG is left alone. Delete public/og/ to regenerate from scratch.
 */
import { mkdir, writeFile, readFile, access } from 'node:fs/promises';
import { constants as FS } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_OG = join(__dirname, '..', 'public', 'og');

// XML-escape — text comes from this file so no user input, but be defensive.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Render a 1200×630 branded SVG.
 *
 * Layout: dark gradient backdrop, soft cyan/purple halos in the corners,
 * Point Zero wordmark top-left, accent eyebrow, large headline, supporting
 * line below, "pointzero.com.np" footer right.
 */
function renderSvg({ eyebrow, title, subtitle, accent }) {
  const grad = accent || ['#22d3ee', '#3b82f6', '#a855f7'];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#000000"/>
      <stop offset="0.5" stop-color="#0b1224"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${grad[0]}"/>
      <stop offset="0.5" stop-color="${grad[1]}"/>
      <stop offset="1" stop-color="${grad[2]}"/>
    </linearGradient>
    <radialGradient id="halo1" cx="0.15" cy="0.15" r="0.45">
      <stop offset="0" stop-color="${grad[0]}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${grad[0]}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="halo2" cx="0.9" cy="0.9" r="0.5">
      <stop offset="0" stop-color="${grad[2]}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${grad[2]}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#halo1)"/>
  <rect width="1200" height="630" fill="url(#halo2)"/>

  <!-- subtle grid -->
  <g stroke="#ffffff" stroke-opacity="0.04">
    <path d="M0 210 H1200 M0 420 H1200 M300 0 V630 M600 0 V630 M900 0 V630"/>
  </g>

  <!-- wordmark -->
  <g transform="translate(72,72)">
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#accent)" stroke-width="4"/>
    <circle cx="20" cy="20" r="6" fill="url(#accent)"/>
    <text x="56" y="28" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="28" font-weight="700" fill="#ffffff">Point Zero</text>
  </g>

  <!-- accent eyebrow -->
  <g transform="translate(72,180)">
    <rect width="14" height="14" rx="3" fill="url(#accent)"/>
    <text x="28" y="13" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="22" font-weight="600" fill="#22d3ee" letter-spacing="2">${esc(eyebrow)}</text>
  </g>

  <!-- title -->
  <g transform="translate(72,240)">
    <text font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="64" font-weight="800" fill="#ffffff">
      <tspan x="0" dy="0">${esc(title.line1)}</tspan>
      ${title.line2 ? `<tspan x="0" dy="78" fill="url(#accent)">${esc(title.line2)}</tspan>` : ''}
    </text>
  </g>

  <!-- subtitle -->
  <g transform="translate(72,${title.line2 ? 440 : 360})">
    <text font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="26" font-weight="400" fill="#cbd5e1">
      ${(subtitle || '').split('\n').map((l, i) => `<tspan x="0" dy="${i === 0 ? 0 : 36}">${esc(l)}</tspan>`).join('')}
    </text>
  </g>

  <!-- footer -->
  <g transform="translate(72,556)">
    <text font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="22" font-weight="500" fill="#94a3b8">pointzero.com.np</text>
  </g>
  <g transform="translate(1056,556)">
    <text font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="22" font-weight="600" fill="#22d3ee" text-anchor="end">Kathmandu · Nepal</text>
  </g>
</svg>`;
}

// One entry per OG image we want to generate. Keep filenames stable — they
// are referenced from src/components/Seo.jsx and scripts/prerender.mjs.
const PAGES = [
  {
    slug: 'home',
    eyebrow: 'AI · WEB · MOBILE',
    title: { line1: 'AI & Software Studio', line2: 'in Kathmandu, Nepal' },
    subtitle: 'RAG chatbots, AI agents, web apps and mobile apps\nfor startups and enterprises worldwide.',
    accent: ['#22d3ee', '#3b82f6', '#a855f7'],
  },
  {
    slug: 'services',
    eyebrow: 'SERVICES',
    title: { line1: 'AI, RAG, Web, Mobile,', line2: 'UI/UX & DevOps' },
    subtitle: 'End-to-end product engineering for founders\nand teams that ship.',
    accent: ['#22d3ee', '#3b82f6', '#a855f7'],
  },
  {
    slug: 'ai-development',
    eyebrow: 'AI DEVELOPMENT',
    title: { line1: 'AI Development', line2: 'Company in Nepal' },
    subtitle: 'RAG chatbots, AI agents and LLM apps with\nClaude, GPT, Gemini & Llama.',
    accent: ['#a855f7', '#3b82f6', '#22d3ee'],
  },
  {
    slug: 'rag-chatbot',
    eyebrow: 'RAG · LLMs',
    title: { line1: 'RAG Chatbot', line2: 'Development' },
    subtitle: 'Hybrid retrieval, re-ranking, evals & grounded\ncitations. Pilot in 2–3 weeks.',
    accent: ['#f472b6', '#a855f7', '#3b82f6'],
  },
  {
    slug: 'web-development',
    eyebrow: 'WEB DEVELOPMENT',
    title: { line1: 'Web Development', line2: 'Company in Nepal' },
    subtitle: 'React, Next.js, Django, Node.js — sub-2s LCP\nand 95+ Lighthouse, baked in.',
    accent: ['#22d3ee', '#3b82f6', '#6366f1'],
  },
  {
    slug: 'mobile-development',
    eyebrow: 'MOBILE APPS',
    title: { line1: 'Mobile App', line2: 'Development Nepal' },
    subtitle: 'Flutter, React Native, Swift, Kotlin — iOS\nand Android apps from USD 2,500.',
    accent: ['#34d399', '#22d3ee', '#3b82f6'],
  },
  {
    slug: 'mvp-development',
    eyebrow: 'STARTUP MVPs',
    title: { line1: 'MVP Development', line2: 'in 8–10 Weeks' },
    subtitle: 'Auth, billing, admin, analytics, runbook.\nLaunch in 8–10 weeks from USD 6,000.',
    accent: ['#fb923c', '#f472b6', '#a855f7'],
  },
  {
    slug: 'ui-ux',
    eyebrow: 'UI/UX DESIGN',
    title: { line1: 'UI/UX Design', line2: 'Company in Nepal' },
    subtitle: 'Product discovery, visual design, design systems,\naccessibility and CRO.',
    accent: ['#f472b6', '#a855f7', '#6366f1'],
  },
  {
    slug: 'devops-cloud',
    eyebrow: 'DEVOPS · CLOUD',
    title: { line1: 'DevOps & Cloud', line2: 'Infrastructure' },
    subtitle: 'AWS, GCP, Terraform, CI/CD, observability\nand on-call that lets you sleep.',
    accent: ['#fbbf24', '#fb923c', '#f472b6'],
  },
  {
    slug: 'about',
    eyebrow: 'ABOUT US',
    title: { line1: 'Software & AI Studio', line2: 'in Kathmandu, Nepal' },
    subtitle: 'Shipping AI, web and mobile products since 2022\nfor clients in Nepal, the US and EU.',
    accent: ['#22d3ee', '#a855f7', '#f472b6'],
  },
  {
    slug: 'industries',
    eyebrow: 'INDUSTRIES',
    title: { line1: 'Every industry,', line2: 'AI-indexed.' },
    subtitle: 'Thirteen playbooks built from shipped products —\nhealthcare, finance, EdTech, logistics, retail and more.',
    accent: ['#34d399', '#22d3ee', '#a855f7'],
  },
  {
    slug: 'project',
    eyebrow: 'OUR WORK',
    title: { line1: 'Selected Work', line2: '& Case Studies' },
    subtitle: 'AI agents, marketplaces, fintech, EdTech —\nreal products we have shipped.',
    accent: ['#34d399', '#22d3ee', '#a855f7'],
  },
  {
    slug: 'blog',
    eyebrow: 'ENGINEERING BLOG',
    title: { line1: 'AI, RAG, Web', line2: '& Mobile Insights' },
    subtitle: 'Deep dives written by the people who\nactually shipped the code.',
    accent: ['#a855f7', '#f472b6', '#fb923c'],
  },
  {
    slug: 'contact',
    eyebrow: 'GET IN TOUCH',
    title: { line1: 'Start Your AI or', line2: 'Software Project' },
    subtitle: 'Free discovery call. Fixed-price quotes.\nReply within one business day.',
    accent: ['#22d3ee', '#3b82f6', '#a855f7'],
  },
];

async function exists(p) {
  try {
    await access(p, FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(PUBLIC_OG, { recursive: true });

  let written = 0;
  let skipped = 0;

  for (const page of PAGES) {
    const svg = renderSvg(page);
    const hash = createHash('sha1').update(svg).digest('hex').slice(0, 12);
    const pngPath = join(PUBLIC_OG, `${page.slug}.png`);
    const stampPath = join(PUBLIC_OG, `${page.slug}.sha1`);

    // Skip regeneration when the SVG source has not changed since last build.
    if (await exists(pngPath) && await exists(stampPath)) {
      const prev = (await readFile(stampPath, 'utf8')).trim();
      if (prev === hash) {
        skipped++;
        continue;
      }
    }

    const png = await sharp(Buffer.from(svg))
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
    await writeFile(pngPath, png);
    await writeFile(stampPath, hash, 'utf8');
    written++;
  }

  console.log(`[og-images] generated ${written} PNGs, skipped ${skipped} unchanged`);
}

main().catch((err) => {
  console.error('[og-images] failed:', err);
  process.exit(1);
});
