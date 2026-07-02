/**
 * Progressive-format <picture> wrapper.
 *
 * scripts/optimize-images.mjs emits .webp and .avif siblings next to every
 * bundled PNG/JPG ≥ 80KB in dist/assets (same hashed basename). This component
 * opts an image into those formats — typically 2–5× smaller than the PNG.
 *
 * Only use it for images known to be ≥ 80KB: smaller files get no siblings,
 * and a <source> that 404s does NOT fall back to the <img>.
 *
 * In dev there is no dist/, so it renders a plain <img>.
 */
export default function Picture({ src, alt, ...imgProps }) {
  const canUpgrade =
    import.meta.env.PROD && /\.(png|jpe?g)$/i.test(src);

  if (!canUpgrade) {
    return <img src={src} alt={alt} {...imgProps} />;
  }

  const stem = src.replace(/\.(png|jpe?g)$/i, '');
  return (
    <picture>
      <source srcSet={`${stem}.avif`} type="image/avif" />
      <source srcSet={`${stem}.webp`} type="image/webp" />
      <img src={src} alt={alt} {...imgProps} />
    </picture>
  );
}
