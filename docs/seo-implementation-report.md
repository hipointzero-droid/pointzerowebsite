# Point Zero — SEO Implementation Report

**Date:** 2026-11-23  
**Site:** https://pointzero.com.np/  
**Stack:** Vite + React SPA with per-route HTML prerender (`scripts/prerender.mjs`)

---

## 1. Routes inspected

| Route | Indexable | Notes |
|-------|-----------|-------|
| `/` | Yes | Homepage |
| `/services` | Yes | Services overview |
| `/services/ai-development-nepal` | Yes | AI |
| `/services/rag-chatbot-development` | Yes | RAG |
| `/services/web-development-nepal` | Yes | Web |
| `/services/mobile-app-development-nepal` | Yes | Mobile |
| `/services/ui-ux-design-nepal` | Yes | UI/UX |
| `/services/mvp-development` | Yes | MVP / SaaS |
| `/services/devops-cloud-nepal` | Yes | DevOps |
| `/about` | Yes | About |
| `/contact` | Yes | Contact |
| `/project` | Yes | Case studies |
| `/industries` | Yes | Industries overview |
| `/blog` | Yes | Blog index |
| `/blog/:slug` (22 posts) | Yes | Article + BlogPosting schema |
| `/blog/category/:category` | **No** (`noindex`) | UX only; removed from sitemap |
| `*` NotFound | **No** (`noindex`) | Added Seo |

**Not present (not invented):** dedicated `/hire-developers`, standalone custom-software, QA-only, or per-industry deep routes.

---

## 2. Problems identified → fixed

| Finding | Fix |
|---------|-----|
| Metadata not aligned to keyword map | Updated titles/descriptions on all public pages + prerender mirror |
| Unverifiable `AggregateRating` (5.0 / 32) in `index.html` | Removed |
| Fake AggregateRating + Review JSON-LD on homepage | Removed schema; kept visible testimonials for UX |
| Unverified “100% / 99.9% / 150% / 5.0 / 50+” marketing claims | Softened copy across home + service heroes |
| FAQ “best company” superlatives | Rewrote to factual capability FAQs (FAQPage schema still matches visible Q&A) |
| 404 missing `noindex` | `NotFound.jsx` now uses `Seo` with `noindex` |
| Blog category thin pages indexable + in sitemap | `noindex` in React + prerender; categories dropped from `sitemap-blog.xml` |
| Stale sitemap `lastmod` (2026-06) | Refreshed to 2026-11-23 |
| Weak Twitter meta on SPA nav | `Seo.jsx`: `twitter:url`, `twitter:image:alt`; site name → “Point Zero” |
| Service pages lacked contextual internal links | Added `RelatedServices` + blog article/service CTAs; footer quick links expanded |

---

## 3. New page titles & descriptions (indexable)

| Page | Title | Meta description |
|------|-------|------------------|
| `/` | AI & Software Development Company in Nepal \| Point Zero | Point Zero builds custom AI agents, RAG chatbots, websites, mobile apps and software solutions for startups and businesses in Nepal and worldwide. |
| `/services` | Software Development Services in Nepal \| Point Zero | Explore Point Zero's AI, RAG, web, mobile, UI/UX, software engineering, QA and DevOps services for startups and businesses. |
| `/services/ai-development-nepal` | AI Development Company in Nepal \| AI Agents & LLM Apps | Build intelligent AI agents, LLM applications and business automations with Point Zero. Custom AI development for startups and enterprises. |
| `/services/rag-chatbot-development` | RAG Chatbot Development Company \| Point Zero Nepal | Build accurate AI chatbots grounded in your business documents and data using RAG, vector databases, LLMs and custom integrations. |
| `/services/web-development-nepal` | Web Development Company in Nepal \| Point Zero | Point Zero develops modern websites, SaaS platforms, business applications and custom web solutions using React, Next.js and Django. |
| `/services/mobile-app-development-nepal` | Mobile App Development Company in Nepal \| Point Zero | Build professional iOS and Android applications with Point Zero. Flutter, React Native and native mobile app development for businesses. |
| `/services/ui-ux-design-nepal` | UI/UX Design Company in Nepal \| Point Zero | Point Zero designs user-focused mobile apps, websites and digital products with research-led UX, Figma and professional design systems. |
| `/services/mvp-development` | MVP Development Company \| SaaS Development Nepal | Turn your business idea into a working SaaS platform or MVP with Point Zero's product engineering and software development team. |
| `/services/devops-cloud-nepal` | DevOps and Cloud Infrastructure Services \| Point Zero | Build reliable cloud infrastructure with DevOps automation, CI/CD, cloud architecture, monitoring and deployment engineering. |
| `/about` | About Point Zero \| Software Engineering Company in Nepal | Meet Point Zero, a Kathmandu-based digital product studio building AI, web and mobile solutions for ambitious businesses. |
| `/contact` | Contact Point Zero \| Start Your Software Project | Contact Point Zero to discuss AI development, web applications, mobile apps and custom software. Get a free project consultation. |
| `/project` | Case Studies & Portfolio \| Point Zero Software Projects | Explore Point Zero case studies across AI, web and mobile — WellNepa, SajiloDera, Bachelor Question Bank, PyMentor and more real products we have shipped. |
| `/industries` | Industry Software Development \| Healthcare, Fintech & More | Point Zero builds industry-focused AI, web and mobile software for healthcare, finance, education, logistics, retail, travel and more. |
| `/blog` | Engineering Blog \| AI, RAG, Web & Mobile \| Point Zero | Practical engineering articles on AI agents, RAG architecture, Flutter, React, Django and software delivery from the Point Zero team. |
| Blog posts | `{Article Title} \| Point Zero Blog` | From post excerpt (unique per article) |

---

## 4. Keyword map (primary intent)

| Page | Primary | Secondary |
|------|---------|-----------|
| Home | Software / AI development company Nepal | Kathmandu software company; AI agents; RAG |
| Services | Software development services Nepal | IT services; custom software |
| AI | AI development company Nepal | AI agents; LLM apps |
| RAG | RAG chatbot development | Enterprise RAG; vector DB chatbots |
| Web | Web development company Nepal | React / Next.js / Django |
| Mobile | Mobile app development company Nepal | Flutter; iOS; Android |
| UI/UX | UI/UX design company Nepal | Product design; Figma |
| MVP | MVP / SaaS development | Startup product engineering |
| DevOps | DevOps / cloud infrastructure | CI/CD; AWS/GCP |
| About | About Point Zero Kathmandu | Software studio Nepal |
| Contact | Contact Point Zero | Project consultation |
| Project | Case studies / portfolio | Shipped products |
| Industries | Industry software development | Healthcare, fintech, EdTech |
| Blog | Engineering blog AI/web/mobile | RAG, Flutter, React deep-dives |

Cannibalization avoided: homepage = overall identity; each service owns its vertical.

---

## 5. Technical SEO

### Canonicals
- Prefer domain: `https://pointzero.com.np/`
- Per-route canonical via `Seo` + prerender snapshots
- Validated: 48 prerendered HTML files, zero canonical mismatches

### robots.txt (`public/robots.txt`)
- Allows public crawl; blocks `/api/`, `/admin/`, tracking query variants
- Sitemap index + main + blog listed
- Unchanged structurally (already sound)

### Sitemap
- `public/sitemap.xml` — 14 core URLs, `lastmod` 2026-11-23
- `public/sitemap_index.xml` — points to main + blog
- `dist/sitemap-blog.xml` — blog index + posts only (categories excluded); generated on build

### Rendering
- First HTML response includes title, description, OG, canonical, JSON-LD (prerender)
- Client `Seo` keeps meta in sync on SPA navigation

### Structured data
- Organization / ProfessionalService / LocalBusiness + WebSite in `index.html` (AggregateRating removed)
- Per-page Service / AboutPage / ContactPage / Blog / BlogPosting / BreadcrumbList / FAQPage (home FAQ)
- No fabricated ratings/reviews in JSON-LD

### Open Graph / Twitter
- Per-page title, description, URL, image (`/og/*.png`), site name
- Twitter large image card + alt

---

## 6. Internal linking

- Footer: descriptive service + hire + quick links (Services, Industries added)
- `RelatedServices` on every service detail page
- Blog articles: service + contact links after content
- Blog index CTA: crawlable links to AI / web / mobile

---

## 7. Content / trust

- Softened unverifiable absolute metrics and “best/top 5.0” claims
- FAQ rewritten without unverifiable “best company” framing
- Contact identity consistent: `hi.pointzero@gmail.com`, `+977 9860486269`, Kathmandu, Nepal

---

## 8. Image SEO

- Existing Picture/WebP/AVIF pipeline retained (`optimize-images.mjs`)
- OG assets under `/og/`
- Logo and hero images carry descriptive alts; decorative motion remains non-content

---

## 9. Performance

- Build regenerates optimized images + prerender
- No CWV lab run claimed in this pass (needs PSI/Lighthouse on production after deploy)
- Large `three` chunk remains a known bundle note (existing); not removed to preserve visuals

---

## 10. Analytics / Search Console

- CTA/contact helpers live in `src/lib/analytics.js` (dataLayer + optional `gtag`)
- **No GA4 measurement ID or GSC verification meta present in repo** — do not invent IDs
- Manual steps after deploy:
  1. Verify property in Google Search Console for `https://pointzero.com.np/`
  2. Submit `https://pointzero.com.np/sitemap_index.xml`
  3. Wire GA4/GTM IDs into `index.html` if desired (helpers already fire)

---

## 11. Tests performed (local build)

- `npm run build` — success; 48 HTML snapshots
- Title uniqueness — no duplicates across indexable routes
- Description uniqueness — no duplicates
- Category pages — `noindex, nofollow` in prerender HTML
- Canonical absolute URL match — OK
- OG title matches `<title>` — OK
- `AggregateRating` absent from `dist/index.html` — OK
- Blog sitemap has 0 category URLs — OK

**Not verified here (needs production / account access):** live 200/301 matrix, GSC coverage, Rich Results Test on prod URLs, PSI field data.

---

## 12. Page-by-page checklist (core)

| Route | Title | Desc | Canon | H1 | OG | Schema | Index |
|-------|-------|------|-------|----|----|--------|-------|
| `/` | ✓ | ✓ | ✓ | ✓ | ✓ | Org/WebSite/WebPage | index |
| `/services` | ✓ | ✓ | ✓ | ✓ | ✓ | ItemList | index |
| AI / RAG / Web / Mobile / UI / MVP / DevOps | ✓ | ✓ | ✓ | ✓ | ✓ | Service (+ FAQ where present) | index |
| `/about` | ✓ | ✓ | ✓ | ✓ | ✓ | AboutPage | index |
| `/contact` | ✓ | ✓ | ✓ | ✓ | ✓ | ContactPage | index |
| `/project` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | index |
| `/industries` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | index |
| `/blog` | ✓ | ✓ | ✓ | ✓ | ✓ | Blog | index |
| `/blog/:slug` | ✓ | ✓ | ✓ | ✓ | ✓ | BlogPosting | index |
| `/blog/category/*` | ✓ | ✓ | ✓ | ✓ | ✓ | — | **noindex** |
| 404 | ✓ | ✓ | ✓ | ✓ | — | — | **noindex** |

---

## 13. Follow-up fixes (2026-11-23 design+SEO pass)

Implemented after full review:

1. **Soft 404 fixed** — Netlify `/* → /404.html` status 404; prerender emits `dist/404.html` with `noindex`
2. **Invisible subtitle/chip text** — removed broken `bg-clip-text` on Projects + Blog
3. **SearchAction removed** — no fake blog search endpoint in schema
4. **Review microdata removed** from homepage testimonials
5. **Seo.jsx** updates hreflang on SPA navigation
6. **NotFound** redesigned with Navbar/Footer
7. Dead CSS + unused TopBanner/Timer removed; favicon MIME fixed; Point Zero naming normalized

## 14. Remaining / optional follow-ups

1. Deploy and re-submit sitemap in Search Console  
2. Add GA4/GSC tokens when available  
3. Optional dedicated pages (hire developers, QA, custom software) — only if real unique content exists  
4. Production PSI / CWV measurement after deploy  
5. Confirm Google Business Profile NAP matches website if a GBP listing exists  
6. Review individual blog posts for outdated technical claims over time (not mass-rewritten in this pass)

---

## 14. Key files touched

- `src/components/Seo.jsx`
- `src/components/RelatedServices.jsx` (new)
- `index.html`
- `scripts/prerender.mjs`
- `public/sitemap.xml`, `public/sitemap_index.xml`
- All page `Seo` props under `src/Pages/**`
- Home trust/FAQ/testimonials copy
- `src/Pages/NotFound/NotFound.jsx`
- `src/Pages/Blog/Blog.jsx`
- `src/Pages/Home/Components/Footer.jsx`
- `docs/seo-audit-findings.md`, `docs/seo-implementation-report.md`
