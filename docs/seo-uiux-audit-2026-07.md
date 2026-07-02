# PointZero — SEO & UI/UX Audit Report

**Date:** 2026-07-02 · **Scope:** pointzero.com.np (this repo) · **Method:** full code audit + Lighthouse benchmarks against the production build served locally.

---

## 1. Executive summary

The site already had a mature SEO foundation before this pass: per-route prerendered HTML snapshots, Organization/LocalBusiness/FAQPage/BlogPosting JSON-LD, per-route OG images, tuned robots.txt with AI-crawler allowances, sitemap index + blog sitemap + RSS, and keyword-targeted service pages. This audit therefore focused on the **remaining real gaps**, all of which are now fixed in code.

**Lighthouse (production build, this machine):**

| Category | Before | After |
|---|---|---|
| Performance (mobile emulation) | 83 | 86 |
| Performance (desktop) | — | **100** (LCP 0.7s) |
| SEO | 100 | **100** |
| Best Practices | 100 | **100** |
| Accessibility | 96 | 96 |
| Main JS bundle | 526 KB | **253 KB (−52%)** |
| CLS | 0 | 0 |
| TBT | 20 ms | 30 ms |
| LCP (mobile sim, slow-4G) | 3.6 s | 3.4 s |

Real-device mobile scores on the Netlify CDN (Brotli, HTTP/2) will be higher than the local slow-4G simulation. The remaining mobile-LCP ceiling is architectural (SPA: nothing paints until React boots) — see §6.

---

## 2. What was fixed — Technical SEO / accessibility

| Issue | Where | Fix |
|---|---|---|
| Dead `href="#"` links (LinkedIn, Twitter, Visit Us, Working Hours) | Contact page | LinkedIn → real company URL; Twitter removed (no profile); Visit Us → Google Maps; Working Hours no longer an anchor |
| No-op "View Project / View Details" overlay buttons on projects without live URLs | Projects page | Overlay only renders when a live link exists |
| Missing `loading="lazy"` / `decoding="async"` on below-fold images | InnovateSection, Projects ×5, Blog ×2 | Added, plus `width`/`height` where determinable (CLS insurance) |
| Weak alt text ("Digital Innovation", bare titles) | InnovateSection, project cards | Descriptive, keyword-relevant alt text |
| Mobile menu toggle had no `aria-label` / `aria-expanded` / `aria-controls` | Navbar | Added all three + larger touch target (p-2 → p-3) |
| "Since 2019" badge contradicted schema `foundingDate: 2022` and About copy | InnovateSection | Now "Since 2022" (contact/NAP-style consistency matters for local SEO) |
| Dead CTA — "Learn More About Us" button had no click handler | InnovateSection | Navigates to /about |
| Useless high-priority preload of `/og-image.png` (never rendered in DOM, only meta/JSON-LD) | index.html | Removed — stops stealing critical-path bandwidth on every page |
| Syntax highlighter rendered raw HTML as visible text (chained regex replaces re-matched injected markup) | CodeAnimation (homepage hero) | Rewritten as a single-pass tokenizer |

## 3. What was fixed — Performance / Core Web Vitals

1. **Route-level code splitting** ([src/router/index.jsx](../src/router/index.jsx)). Home stays eager (LCP-critical); every other route is `React.lazy`. Main chunk 526 KB → 253 KB. Blog (60 KB incl. 22 posts of content) and Projects (31 KB) now load on demand. Suspense fallback is a black screen matching the site background, so no white flash. *Note: this is route splitting, not vendor splitting — the react↔mui circular-chunk crash documented in vite.config.js does not apply.*
2. **AVIF/WebP actually served** ([src/components/Picture.jsx](../src/components/Picture.jsx)). The build already emitted `.webp`/`.avif` siblings for every bundled PNG ≥ 80 KB, but no component used them. A `<picture>` wrapper now serves them for the heaviest images: homepage studio image 489 KB → 20 KB avif, Bachelor QB case study 770 KB → 20 KB, WellNepa 228 KB → 24 KB, SajiloDera 108 KB → 32 KB. **Projects page image payload: ~1.6 MB → ~96 KB.**
3. **Three.js (~1 MB) deferred past `load`** ([src/components/StarsLazy.jsx](../src/components/StarsLazy.jsx)). Previously scheduled on idle with a 1.5 s timeout, which landed inside the LCP window on slow networks.
4. **`prefers-reduced-motion` support** ([src/index.css](../src/index.css)). All decorative animation disabled for users who ask for it, with `opacity: 1` forced on elements that animate in from 0 so content never stays invisible.

## 4. What was fixed — UI/UX & conversion

- **Mobile navbar CTA**: "Get in Touch" was `hidden lg:flex` — mobile visitors (the majority for this market) had no persistent contact CTA. A compact gradient "Contact" button now sits beside the menu toggle.
- **Button feedback**: `active:scale-95` on hero CTAs and nav CTAs (press feedback), `focus-visible` rings on nav toggle, contact cards, and social links (keyboard users).
- The 5-second test passes on mobile: *what* (H1: AI, Web & Mobile Software Development Company in Nepal), *why* (5.0 rating · 50+ projects · 1-business-day reply), *how to contact* (navbar Contact + Book a Free Discovery Call + WhatsApp FAB) — all above the fold.
- Brand identity untouched: same palette (cyan/blue gradients on black), same logo, same glassmorphism style.

## 5. Verified as already good (no action needed)

- Exactly one H1 per page, descriptive titles/descriptions per route, canonical + hreflang per route
- FAQPage schema on home + 4 service pages; BlogPosting + BreadcrumbList JSON-LD on posts
- robots.txt (AI crawlers allowed, scrapers throttled), sitemap index, blog sitemap auto-generated, RSS, llms.txt
- All `target="_blank"` links carry `rel="noreferrer"`; all images have alt text
- Contact form: labels, aria-invalid/aria-describedby error wiring, mailto fallback, analytics events
- Netlify: immutable caching for hashed assets, security headers, HSTS preload

## 6. Remaining recommendations (not done — need a decision or off-repo work)

**Code/architecture (next sprint):**
1. **Mobile LCP > 90**: requires painting real hero content before React boots — either make the prerendered snapshot's hidden H1 block visible and styled (risk: hydration flash/CLS), or move to SSR/SSG (Astro/Next). Biggest single lever left.
2. Dead code: `PlanSection.jsx`, `TopBanner.jsx`, `TimerComponent.jsx` unused; `bootstrap`, `react-bootstrap`, `swiper`, `react-spring` installed but never imported (keep `@emotion/*` — MUI peer deps); ~16 MB of unreferenced PNGs in `src/static/images/class_images/`. (Spawned as a separate task.)
3. Wire `VITE_CONTACT_FORM_ENDPOINT` (Formspree/Web3Forms/Netlify Forms) so form submits don't rely on the mailto fallback — meaningfully better lead capture on mobile.
4. Lint baseline: 143 pre-existing errors (mostly `react/prop-types`). Either add prop-types, or disable the rule and get lint to green so CI can gate regressions.

**Off-repo (owner action, local SEO):**
5. **Google Business Profile**: claim/verify "Point Zero" in Kathmandu; category *Software company*; same NAP as the site (`hi.pointzero@gmail.com`, +977 9860486269); add photos, services, and solicit reviews — this is the #1 lever for "best IT company in Nepal"-type local queries; the site's LocalBusiness schema already matches.
6. Local citations: list identical NAP on Google Maps, Facebook, LinkedIn company page, and Nepali directories.
7. Search Console: submit `sitemap_index.xml`, monitor Core Web Vitals field data (real-user data will differ from lab).
8. Blog cadence: the suggested topics ("Cost of app development in Nepal", "Website development pricing guide") fit the existing blog engine — each new post in `blogData.js` automatically gets a prerendered page, sitemap entry, RSS item and BlogPosting schema at build time.

**Not deliverable from this repo:** Figma screens (design changes were made directly in code), live Google-ranking metrics (need Search Console access post-deploy).
