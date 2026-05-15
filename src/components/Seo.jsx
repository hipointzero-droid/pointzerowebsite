import { useEffect } from 'react';

const SITE = {
  origin: 'https://pointzero.com.np',
  name: 'Pointzero',
  defaultImage: 'https://pointzero.com.np/og-image.png',
};

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  if (attrs.content !== undefined) el.setAttribute('content', attrs.content);
};

const upsertLink = (rel, href, extra = {}) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
};

const upsertJsonLd = (id, json) => {
  let el = document.head.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
};

const removeJsonLd = (id) => {
  const el = document.head.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (el) el.remove();
};

export default function Seo({
  title,
  description,
  path = '/',
  image = SITE.defaultImage,
  keywords,
  type = 'website',
  noindex = false,
  jsonLd,
  breadcrumbs,
}) {
  useEffect(() => {
    const url = `${SITE.origin}${path}`;
    if (title) document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
    }
    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    }

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE.name });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title || document.title });
    if (description) upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: title || SITE.name });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title || document.title });
    if (description) upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertLink('canonical', url);

    if (jsonLd) {
      upsertJsonLd(`page:${path}`, jsonLd);
    } else {
      removeJsonLd(`page:${path}`);
    }

    if (breadcrumbs && breadcrumbs.length) {
      upsertJsonLd(`breadcrumbs:${path}`, {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE.origin}${b.path}`,
        })),
      });
    } else {
      removeJsonLd(`breadcrumbs:${path}`);
    }
  }, [title, description, path, image, keywords, type, noindex, jsonLd, breadcrumbs]);

  return null;
}
