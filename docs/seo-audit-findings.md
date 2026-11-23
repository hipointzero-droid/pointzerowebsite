# Point Zero SEO Audit Findings (pre-implementation)

**Date:** 2026-11-23  
**Stack:** Vite + React 18 SPA, React Router, client `Seo` via `useEffect`, static HTML snapshots via `scripts/prerender.mjs`, Netlify SPA.

## Route inventory

| Path | Seo component | Prerender | Sitemap |
|------|---------------|-----------|---------|
| `/` | Yes | Yes | Yes |
| `/services` | Yes | Yes | Yes |
| `/services/ai-development-nepal` | Yes | Yes | Yes |
| `/services/rag-chatbot-development` | Yes | Yes | Yes |
| `/services/web-development-nepal` | Yes | Yes | Yes |
| `/services/mobile-app-development-nepal` | Yes | Yes | Yes |
| `/services/mvp-development` | Yes | Yes | Yes |
| `/services/ui-ux-design-nepal` | Yes | Yes | Yes |
| `/services/devops-cloud-nepal` | Yes | Yes | Yes |
| `/about` | Yes | Yes | Yes |
| `/contact` | Yes | Yes | Yes |
| `/project` | Yes | Yes | Yes |
| `/industries` | Yes | Yes | Yes |
| `/blog` | Yes | Yes | Yes |
| `/blog/:slug` | Yes (dynamic) | Yes | sitemap-blog |
| `/blog/category/:category` | Yes | Partial | Check |
| `*` (404) | **Missing** | No | N/A |

## Critical / high findings

1. **Client-only meta for SPA nav** — `Seo.jsx` updates `document.head` in `useEffect`. Mitigated by prerender snapshots for first HTML; keep prerender titles in sync with page `Seo` props.
2. **Unverifiable AggregateRating** in `index.html` (`5.0` / `32` reviews) and Testimonials JSON-LD — risk of rich-result / spam issues. **Remove** unless backed by real Google reviews.
3. **Marketing claims without schema backing** — “100% Client Satisfaction”, “99.9% Uptime”, “150% growth”, FAQ “best software company” — soften copy; keep portfolio proof, remove absolute guarantees where unproven.
4. **404 page** — no `noindex`; should not compete in SERPs.
5. **Sitemap `lastmod`** stale (2026-06) — refresh on deploy.
6. **Title/description alignment** — refresh to keyword map (below) while keeping uniqueness.
7. **Disallow `/*.json$`** in robots — may block legitimate public JSON if any; keep for now (no public JSON routes).
8. **Blog category pages** — ensure not thin-indexable duplicates; prefer `noindex,follow` or solid unique copy.

## Keyword map (primary → page)

| Page | Primary keyword |
|------|-----------------|
| `/` | Software / AI development company Nepal |
| `/services` | Software development services Nepal |
| `/services/ai-development-nepal` | AI development company Nepal |
| `/services/rag-chatbot-development` | RAG chatbot development |
| `/services/web-development-nepal` | Web development company Nepal |
| `/services/mobile-app-development-nepal` | Mobile app development company Nepal |
| `/services/ui-ux-design-nepal` | UI/UX design company Nepal |
| `/services/mvp-development` | MVP / SaaS development |
| `/services/devops-cloud-nepal` | DevOps cloud services Nepal |
| `/about` | About Point Zero Kathmandu |
| `/contact` | Contact Point Zero |
| `/project` | Point Zero case studies |
| `/industries` | Industry software development |
| `/blog` | Engineering blog AI / web / mobile |

## Already in good shape

- Central `Seo` component (title, description, OG, Twitter, canonical, JSON-LD, breadcrumbs)
- Prerender per-route HTML for crawlers
- `robots.txt` with sitemap pointers
- `sitemap.xml` + `sitemap_index.xml` + blog sitemap generation
- Most public pages have unique titles, H1s, breadcrumbs, Service/Org schema
- Image optimization pipeline (webp/avif) + `Picture` component
- Analytics CTA helpers present
