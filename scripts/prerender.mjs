#!/usr/bin/env node
/**
 * Point Zero — Static HTML snapshot generator.
 *
 * Why: the site is a Vite SPA. Crawlers (Bing, DuckDuckGo, ClaudeBot, GPTBot,
 * PerplexityBot, social previewers) and even Googlebot benefit from receiving
 * per-route HTML with the correct <title>, meta description, canonical URL,
 * Open Graph tags and JSON-LD already in place — instead of a generic shell.
 *
 * What this does: for every known route, generates dist/<route>/index.html
 * by cloning dist/index.html and rewriting the SEO-critical head tags.
 * Netlify's SPA fallback (publish=dist) will serve these snapshots directly
 * because the file exists at the requested path. React hydrates on top.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BLOG_DATA = join(__dirname, '..', 'src', 'Pages', 'Blog', 'blogData.js');
const ORIGIN = 'https://pointzero.com.np';

// Mirror of the same helper in src/Pages/Blog/Blog.jsx — keep them in sync.
function categoryToSlug(category) {
  return String(category || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Parse blogData.js for the SEO-relevant fields per post.
 *
 * We cannot just `import` the file because it imports image assets — those
 * paths only resolve through Vite. Instead we scan the source for each post
 * block and extract a tiny index of fields the snapshot generator needs.
 */
function loadBlogIndex() {
  if (!existsSync(BLOG_DATA)) return [];
  const src = readFileSync(BLOG_DATA, 'utf8');

  // Each post starts with `id: '...'`. Slice the file into blocks that start
  // at each `id:` line so per-post field lookup is unambiguous.
  const idRe = /^\s+id:\s*['"]([^'"]+)['"],?\s*$/gm;
  const idMatches = [];
  let m;
  while ((m = idRe.exec(src)) !== null) {
    idMatches.push({ id: m[1], start: m.index });
  }

  const get = (block, key) => {
    // Match `key: 'value'` or `key: "value"`. Handles escaped quotes via `\\'`.
    const re = new RegExp(`^\\s+${key}:\\s*['"]((?:\\\\.|[^'"\\\\])*)['"],?\\s*$`, 'm');
    const r = re.exec(block);
    return r ? r[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
  };
  const getList = (block, key) => {
    const re = new RegExp(`^\\s+${key}:\\s*\\[([^\\]]*)\\]`, 'm');
    const r = re.exec(block);
    if (!r) return [];
    return [...r[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
  };

  const posts = [];
  for (let i = 0; i < idMatches.length; i++) {
    const start = idMatches[i].start;
    const end = i + 1 < idMatches.length ? idMatches[i + 1].start : src.length;
    const block = src.slice(start, end);

    const slug = get(block, 'slug');
    const title = get(block, 'title');
    if (!slug || !title) continue;

    // Extract paragraph + heading + quote text + list items from the content
    // array. This drives wordCount + articleBody on the BlogPosting JSON-LD.
    const textChunks = [];
    const textRe = /text:\s*'((?:\\.|[^'\\])*)'/g;
    let t;
    while ((t = textRe.exec(block)) !== null) {
      textChunks.push(t[1].replace(/\\'/g, "'").replace(/\\"/g, '"'));
    }
    const itemsRe = /items:\s*\[([\s\S]*?)\]/g;
    let itm;
    while ((itm = itemsRe.exec(block)) !== null) {
      const parts = [...itm[1].matchAll(/['"]((?:\\.|[^'"\\])+)['"]/g)].map((x) => x[1]);
      textChunks.push(...parts);
    }
    const articleBody = textChunks.join(' ').replace(/\s+/g, ' ').trim();
    const wordCount = articleBody ? articleBody.split(/\s+/).length : 0;

    posts.push({
      id: idMatches[i].id,
      slug,
      title,
      excerpt: get(block, 'excerpt'),
      category: get(block, 'category'),
      date: get(block, 'date'),
      readTime: get(block, 'readTime'),
      author: get(block, 'author') || 'Point Zero Team',
      tags: getList(block, 'tags'),
      articleBody: articleBody.slice(0, 5000),
      wordCount,
    });
  }
  return posts;
}

const routes = [
  {
    path: '/',
    title: 'AI & Software Development Company in Nepal | Point Zero',
    description:
      'Point Zero builds custom AI agents, RAG chatbots, websites, mobile apps and software solutions for startups and businesses in Nepal and worldwide.',
    keywords:
      'software development company Nepal, AI development company Nepal, software company Kathmandu, RAG chatbot development, web development Nepal, mobile app development Nepal, hire developers Nepal, Point Zero',
    h1: 'AI, RAG and Software Development Company in Nepal',
    bodyCopy:
      'Point Zero is a software development studio in Kathmandu, Nepal building production-grade AI agents, RAG chatbots, websites, mobile apps and custom software for startups and enterprises worldwide.',
    ogImage: '/og/home.png',
  },
  {
    path: '/services',
    title: 'Software Development Services in Nepal | Point Zero',
    description:
      "Explore Point Zero's AI, RAG, web, mobile, UI/UX, software engineering, QA and DevOps services for startups and businesses.",
    keywords:
      'software development services Nepal, IT services company Nepal, custom software development services, AI development services, web development Nepal, mobile app services Nepal, UI/UX design services, MVP development Nepal',
    h1: 'Software Development Services in Nepal',
    bodyCopy:
      'Point Zero builds AI agents, RAG chatbots, web platforms, mobile apps and MVPs. We work with Claude, OpenAI GPT, Google Gemini and open Llama models, with vector databases (pgvector, Pinecone, Weaviate, Qdrant) and modern stacks (React, Next.js, Flutter, Django, Node.js, PostgreSQL).',
    ogImage: '/og/services.png',
  },
  {
    path: '/services/ai-development-nepal',
    title: 'AI Development Company in Nepal | AI Agents & LLM Apps',
    description:
      'Build intelligent AI agents, LLM applications and business automations with Point Zero. Custom AI development for startups and enterprises.',
    keywords:
      'AI development company Nepal, AI software development Nepal, RAG development Nepal, LLM development Nepal, AI agents Nepal, Claude developer Nepal, OpenAI integration Nepal, vector database Nepal, hire AI engineer Nepal',
    h1: 'AI Development Company in Nepal',
    bodyCopy:
      'Point Zero is an AI development company in Kathmandu, Nepal. We ship production-grade RAG chatbots, AI agents and LLM applications with Claude, OpenAI GPT, Google Gemini and open Llama models — with evals, observability and SLAs from day one. Trusted by startups and enterprises in Nepal, the US, UK and the UAE.',
    ogImage: '/og/ai-development.png',
  },
  {
    path: '/services/rag-chatbot-development',
    title: 'RAG Chatbot Development Company | Point Zero Nepal',
    description:
      'Build accurate AI chatbots grounded in your business documents and data using RAG, vector databases, LLMs and custom integrations.',
    keywords:
      'RAG chatbot development, RAG development Nepal, retrieval augmented generation, Claude RAG, GPT RAG, Gemini RAG, pgvector chatbot, Pinecone chatbot, AI knowledge base chatbot, LLM chatbot Nepal',
    h1: 'RAG Chatbot Development',
    bodyCopy:
      'Point Zero builds RAG (retrieval-augmented generation) chatbots that answer from your docs, websites and databases — with hybrid retrieval, re-ranking, hallucination evals and inline citations. Pilots ship in 2–3 weeks from USD 3,000.',
    ogImage: '/og/rag-chatbot.png',
  },
  {
    path: '/services/web-development-nepal',
    title: 'Web Development Company in Nepal | Point Zero',
    description:
      'Point Zero develops modern websites, SaaS platforms, business applications and custom web solutions using React, Next.js and Django.',
    keywords:
      'web development company Nepal, website development Kathmandu, React developer Nepal, Next.js developer Nepal, Django developer Nepal, Node.js developer Nepal, SaaS development Nepal, eCommerce development Nepal',
    h1: 'Web Development Company in Nepal',
    bodyCopy:
      'Point Zero is a web development company in Kathmandu, Nepal. We design and ship marketing websites, SaaS dashboards, eCommerce platforms and APIs on React, Next.js, Django, Node.js and PostgreSQL — with sub-2-second LCP, 95+ Lighthouse and SEO baked into the architecture.',
    ogImage: '/og/web-development.png',
  },
  {
    path: '/services/mobile-app-development-nepal',
    title: 'Mobile App Development Company in Nepal | Point Zero',
    description:
      'Build professional iOS and Android applications with Point Zero. Flutter, React Native and native mobile app development for businesses.',
    keywords:
      'mobile app development company Nepal, Flutter developer Nepal, React Native developer Nepal, iOS developer Nepal, Android developer Nepal, Swift Kotlin Nepal, hire mobile developer Nepal, app development cost Nepal',
    h1: 'Mobile App Development Company in Nepal',
    bodyCopy:
      'Point Zero builds iOS and Android apps in Kathmandu, Nepal with Flutter, React Native, Swift and Kotlin. eSewa, Khalti, FonePay, Stripe and Apple/Google Pay handled in production. MVPs ship in 6–10 weeks from USD 2,500.',
    ogImage: '/og/mobile-development.png',
  },
  {
    path: '/services/mvp-development',
    title: 'MVP Development Company | SaaS Development Nepal',
    description:
      "Turn your business idea into a working SaaS platform or MVP with Point Zero's product engineering and software development team.",
    keywords:
      'MVP development company, MVP development Nepal, startup MVP, SaaS MVP, Lean MVP, build an MVP fast, MVP cost, MVP development agency, hire MVP team Nepal',
    h1: 'MVP Development for Ambitious Founders',
    bodyCopy:
      'Point Zero takes founders from Lean Canvas to a launched product in 8–10 weeks, including auth, billing, admin dashboard, analytics events, crash monitoring and a day-one runbook. Fixed-price quotes from USD 6,000.',
    ogImage: '/og/mvp-development.png',
  },
  {
    path: '/services/ui-ux-design-nepal',
    title: 'UI/UX Design Company in Nepal | Point Zero',
    description:
      'Point Zero designs user-focused mobile apps, websites and digital products with research-led UX, Figma and professional design systems.',
    keywords:
      'UI UX design Nepal, UI UX design company Kathmandu, product design Nepal, Figma designer Nepal, design system Nepal, mobile app design Nepal, web design Nepal, UX research Nepal',
    h1: 'UI/UX Design Company in Nepal',
    bodyCopy:
      'Point Zero designs landing pages, web apps and mobile products in Kathmandu, Nepal. Research-led, Figma-native, with design systems handed off to engineering via Storybook. Landing page design ships in 1–2 weeks from USD 600.',
    ogImage: '/og/ui-ux.png',
  },
  {
    path: '/services/devops-cloud-nepal',
    title: 'DevOps and Cloud Infrastructure Services | Point Zero',
    description:
      'Build reliable cloud infrastructure with DevOps automation, CI/CD, cloud architecture, monitoring and deployment engineering.',
    keywords:
      'DevOps services Nepal, cloud infrastructure Nepal, AWS consultant Nepal, GCP consultant Nepal, Terraform Nepal, Kubernetes Nepal, SRE Nepal, observability Nepal, CI CD Nepal',
    h1: 'DevOps & Cloud Infrastructure in Nepal',
    bodyCopy:
      'Point Zero ships DevOps and cloud infrastructure for AWS, GCP and Vercel — CI/CD pipelines, Terraform-managed IaC, observability with SLOs, SOC-aligned security and on-call your team can sleep through. Cloud audits start at USD 800 and typically uncover 20–40% in cloud-bill savings.',
    ogImage: '/og/devops-cloud.png',
  },
  {
    path: '/about',
    title: 'About Point Zero | Software Engineering Company in Nepal',
    description:
      'Meet Point Zero, a Kathmandu-based digital product studio building AI, web and mobile solutions for ambitious businesses.',
    keywords: 'about Point Zero, Point Zero team, software studio Nepal, AI company Kathmandu',
    h1: 'About Point Zero',
    bodyCopy:
      'Point Zero is a Nepal-based digital product studio founded in 2022. We partner with founders and product teams to design and ship AI, web and mobile software end-to-end.',
    ogImage: '/og/about.png',
  },
  {
    path: '/industries',
    title: 'Industry Software Development | Healthcare, Fintech & More',
    description:
      'Point Zero builds industry-focused AI, web and mobile software for healthcare, finance, education, logistics, retail, travel and more.',
    keywords:
      'healthcare app developer Nepal, fintech developer Nepal, EdTech developer Nepal, logistics software Nepal, retail software Nepal, travel app developer Nepal, legal tech Nepal, industry-specific software Nepal',
    h1: 'Industries we ship in — Healthcare, Finance, EdTech, Logistics and more',
    bodyCopy:
      'Point Zero ships production software across thirteen verticals — healthcare, finance, EdTech, logistics, retail, travel, real estate, legal, manufacturing, media, food and on-demand, social, and security. Each vertical comes with a playbook proven on real customers, not a blank-page guess.',
    ogImage: '/og/industries.png',
  },
  {
    path: '/project',
    title: 'Case Studies & Portfolio | Point Zero Software Projects',
    description:
      'Explore Point Zero case studies across AI, web and mobile — SajiloDera, Blinkit Study, MiRi Tubes, LSP One Stop, Bachelor Question Bank, Finland Citizenship 2027 and more.',
    keywords:
      'Point Zero projects, software case studies Nepal, WellNepa, SajiloDera, Bachelor Question Bank, PyMentor, ChatMandu',
    h1: 'Selected Work & Case Studies',
    bodyCopy:
      'Real products we have shipped — AI agents, marketplaces, fintech tools, EdTech apps, and more. Each case study covers the brief, stack, results and growth metrics.',
    ogImage: '/og/project.png',
  },
  {
    path: '/blog',
    title: 'Engineering Blog | AI, RAG, Web & Mobile | Point Zero',
    description:
      'Practical engineering articles on AI agents, RAG architecture, Flutter, React, Django and software delivery from the Point Zero team.',
    keywords:
      'AI blog Nepal, RAG tutorials, LLM engineering blog, web development blog Nepal, software engineering insights',
    h1: 'Point Zero Engineering Blog',
    bodyCopy:
      'Deep dives on AI agents, retrieval-augmented generation, LLM evals, vector databases, modern web stacks and mobile engineering — written by the people who actually shipped the code.',
    ogImage: '/og/blog.png',
  },
  {
    path: '/contact',
    title: 'Contact Point Zero | Start Your Software Project',
    description:
      'Contact Point Zero to discuss AI development, web applications, mobile apps and custom software. Get a free project consultation.',
    keywords:
      'contact Point Zero, hire AI developers Nepal, hire web developers Nepal, software development quote Nepal',
    h1: 'Talk to a Point Zero Engineer',
    bodyCopy:
      'Send your brief and we will respond within one business day with next steps. Free discovery call, transparent pricing, fixed-price or T&M with milestones.',
    ogImage: '/og/contact.png',
  },
];

function buildSnapshot(template, route) {
  const url = `${ORIGIN}${route.path === '/' ? '/' : route.path}`;
  let html = template;

  // Title
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`,
  );

  // <meta name="title">
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/>/,
    `<meta name="title" content="${escapeAttr(route.title)}" />`,
  );

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  );

  // <meta name="keywords">
  html = html.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
    `<meta name="keywords" content="${escapeAttr(route.keywords)}" />`,
  );

  // Robots — category/thin pages can opt into noindex
  const robotsContent = route.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/>/,
    `<meta name="robots" content="${robotsContent}" />`,
  );

  // Canonical
  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${url}" />`,
  );

  // hreflang
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="en" href="${url}" />`,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en-NP"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="en-NP" href="${url}" />`,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
  );

  // OG
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
  );
  // Per-route OG/Twitter image — each route has its own 1200×630 PNG in
  // /og/. Falls back to the global /og-image.png if a route hasn't opted in.
  const imageUrl = `${ORIGIN}${route.ogImage || '/og-image.png'}`;
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${escapeAttr(imageUrl)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:image:secure_url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image:secure_url" content="${escapeAttr(imageUrl)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image:alt" content="${escapeAttr(route.title)}" />`,
  );

  // Twitter
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${url}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${escapeAttr(imageUrl)}" />`,
  );

  // BreadcrumbList JSON-LD injected at end of head
  const crumbs = route.path === '/'
    ? [{ name: 'Home', url: `${ORIGIN}/` }]
    : [
        { name: 'Home', url: `${ORIGIN}/` },
        { name: route.title.split(' — ')[0] || route.title, url },
      ];
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };

  // Per-route WebPage with Speakable selector — voice assistants
  // (Google Assistant, Alexa) and AI crawlers pick the H1 + intro to read aloud.
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'en-NP',
    isPartOf: { '@id': `${ORIGIN}/#website` },
    about: { '@id': `${ORIGIN}/#organization` },
    primaryImageOfPage: imageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'p'],
    },
  };

  const breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(
    breadcrumbJsonLd,
  )}</script>`;
  const webPageScript = `<script type="application/ld+json">${JSON.stringify(
    webPageJsonLd,
  )}</script>`;

  // Inject crawler-visible H1 + intro paragraph inside #root so non-JS clients
  // (Bing, DuckDuckGo, social previewers, AI crawlers) get real content.
  const seoBlock = `<div id="root"><section style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;" aria-hidden="false"><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.bodyCopy)}</p></section></div>`;
  html = html.replace(/<div id="root"><\/div>/, seoBlock);

  // Append breadcrumb + WebPage(Speakable) LD-JSON before </head>
  html = html.replace(/<\/head>/, `${breadcrumbScript}${webPageScript}</head>`);

  return html;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

function buildBlogPostSnapshot(template, post) {
  const url = `${ORIGIN}/blog/${post.slug}`;
  const description =
    post.excerpt && post.excerpt.length > 0
      ? post.excerpt.length > 160
        ? post.excerpt.slice(0, 157) + '…'
        : post.excerpt
      : `Read "${post.title}" on the Point Zero engineering blog.`;
  const keywords =
    (post.tags && post.tags.length ? post.tags.join(', ') + ', ' : '') +
    'Point Zero blog, Pointzero engineering, Nepal software';
  const title = `${post.title} | Point Zero Blog`;
  const imageUrl = `${ORIGIN}/og/blog.png`;

  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/>/,
    `<meta name="title" content="${escapeAttr(title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeAttr(description)}" />`,
  );
  html = html.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
    `<meta name="keywords" content="${escapeAttr(keywords)}" />`,
  );
  html = html.replace(/<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="en" href="${url}" />`,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en-NP"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="en-NP" href="${url}" />`,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
  );
  html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/, `<meta property="og:type" content="article" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
  );
  html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:url" content="${url}" />`);
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${escapeAttr(imageUrl)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:image:secure_url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image:secure_url" content="${escapeAttr(imageUrl)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image:alt" content="${escapeAttr(title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${escapeAttr(imageUrl)}" />`,
  );

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#post`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en-NP',
    keywords: (post.tags || []).join(', '),
    articleSection: post.category,
    timeRequired: post.readTime,
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    ...(post.articleBody ? { articleBody: post.articleBody } : {}),
    image: [`${ORIGIN}/og-image.png`],
    author: {
      '@type': 'Organization',
      name: post.author || 'Point Zero',
      url: `${ORIGIN}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Point Zero',
      url: `${ORIGIN}/`,
      logo: { '@type': 'ImageObject', url: `${ORIGIN}/og-image.png` },
    },
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: post.title,
    description,
    inLanguage: 'en-NP',
    isPartOf: { '@id': `${ORIGIN}/#website` },
    primaryImageOfPage: `${ORIGIN}/og-image.png`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'p'],
    },
  };

  const blockScripts = [breadcrumbs, webPage, blogPosting]
    .map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`)
    .join('');

  // Open Graph article extension — used by Facebook, LinkedIn, and many
  // crawlers to render richer link previews with author and timestamp.
  const articleMeta = [
    `<meta property="article:published_time" content="${escapeAttr(post.date || '')}" />`,
    `<meta property="article:modified_time" content="${escapeAttr(post.date || '')}" />`,
    `<meta property="article:author" content="${escapeAttr(post.author || 'Point Zero')}" />`,
    `<meta property="article:publisher" content="${ORIGIN}/" />`,
    post.category ? `<meta property="article:section" content="${escapeAttr(post.category)}" />` : '',
    ...(post.tags || []).map(
      (t) => `<meta property="article:tag" content="${escapeAttr(t)}" />`,
    ),
  ]
    .filter(Boolean)
    .join('');

  html = html.replace(/<\/head>/, `${articleMeta}${blockScripts}</head>`);

  // Crawler-visible content inside #root
  const seoBlock = `<div id="root"><article style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;"><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(description)}</p><p>Category: ${escapeHtml(post.category)} · Reading time: ${escapeHtml(post.readTime || '')} · Published ${escapeHtml(post.date || '')}.</p></article></div>`;
  html = html.replace(/<div id="root"><\/div>/, seoBlock);

  return html;
}

function main() {
  const indexPath = join(DIST, 'index.html');
  if (!existsSync(indexPath)) {
    console.error('[prerender] dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }
  const template = readFileSync(indexPath, 'utf8');

  let written = 0;
  for (const route of routes) {
    const html = buildSnapshot(template, route);

    if (route.path === '/') {
      writeFileSync(indexPath, html, 'utf8');
      written++;
      continue;
    }

    const outDir = join(DIST, route.path.replace(/^\//, ''));
    ensureDir(outDir);
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    written++;
  }

  // Per-blog-post snapshots — each gets its own title, description, canonical
  // URL and BlogPosting JSON-LD. Individually indexable by Google, Bing and
  // every LLM crawler.
  const posts = loadBlogIndex();
  for (const post of posts) {
    const html = buildBlogPostSnapshot(template, post);
    const outDir = join(DIST, 'blog', post.slug);
    ensureDir(outDir);
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    written++;
  }

  // Category landing pages exist for UX navigation but stay noindex to avoid
  // thin/duplicate indexable category URLs competing with article pages.
  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
  for (const category of categories) {
    const categorySlug = categoryToSlug(category);
    const route = {
      path: `/blog/category/${categorySlug}`,
      title: `${category} Articles | Point Zero Blog`,
      description: `${category} articles from Point Zero — practical engineering notes on AI, software and product delivery from Kathmandu, Nepal.`,
      keywords: `${category} blog Nepal, Point Zero ${category}, Nepal software ${category}, engineering blog Nepal`,
      h1: `${category} — Point Zero Blog`,
      bodyCopy: `All ${category} posts from Point Zero. Includes case studies and engineering deep-dives written by a senior team shipping AI, web and mobile software in Kathmandu, Nepal.`,
      noindex: true,
    };
    const html = buildSnapshot(template, route);
    const outDir = join(DIST, 'blog', 'category', categorySlug);
    ensureDir(outDir);
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    written++;
  }

  // Auto-generated blog sitemap — indexable posts + blog index only (no categories).
  const today = new Date().toISOString().slice(0, 10);
  const blogUrls = posts.map((p) => {
    const lastmod = p.date && /^\d{4}-\d{2}-\d{2}/.test(p.date) ? p.date.slice(0, 10) : today;
    return `  <url>
    <loc>${ORIGIN}/blog/${p.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });
  const blogSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${ORIGIN}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${blogUrls.join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap-blog.xml'), blogSitemap, 'utf8');

  // RSS 2.0 feed. The site's index.html already advertises this at
  // <link rel="alternate" type="application/rss+xml" href="…/rss.xml"> —
  // generating it here means feed readers and AI crawlers actually find it.
  function rssEscape(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
  function toRssDate(dateStr) {
    if (!dateStr) return new Date().toUTCString();
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return new Date().toUTCString();
    return d.toUTCString();
  }
  const sortedForRss = [...posts].sort((a, b) => {
    const da = new Date(a.date || 0).getTime();
    const db = new Date(b.date || 0).getTime();
    return db - da;
  });
  const lastBuildDate = toRssDate(sortedForRss[0]?.date);
  const rssItems = sortedForRss
    .map((p) => {
      const link = `${ORIGIN}/blog/${p.slug}`;
      const desc = p.excerpt && p.excerpt.length > 0 ? p.excerpt : `Read "${p.title}" on the Point Zero blog.`;
      const tagXml = (p.tags || []).map((t) => `      <category>${rssEscape(t)}</category>`).join('\n');
      return `    <item>
      <title>${rssEscape(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRssDate(p.date)}</pubDate>
      <dc:creator>${rssEscape(p.author || 'Point Zero')}</dc:creator>
      <description>${rssEscape(desc)}</description>
${p.category ? `      <category>${rssEscape(p.category)}</category>` : ''}
${tagXml}
    </item>`;
    })
    .join('\n');
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Point Zero Blog — AI, RAG, Web &amp; Mobile Engineering</title>
    <link>${ORIGIN}/blog</link>
    <atom:link href="${ORIGIN}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Insights, case studies and engineering deep-dives on AI agents, RAG, vector databases, mobile and web development from the Point Zero team.</description>
    <language>en-NP</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Point Zero prerender</generator>
    <image>
      <url>${ORIGIN}/og-image.png</url>
      <title>Point Zero</title>
      <link>${ORIGIN}/</link>
    </image>
${rssItems}
  </channel>
</rss>
`;
  writeFileSync(join(DIST, 'rss.xml'), rssXml, 'utf8');

  // Real HTTP 404 document for Netlify (status 404 → /404.html).
  // Keeps crawlers from indexing homepage meta on unknown URLs.
  const notFoundRoute = {
    path: '/404',
    title: 'Page Not Found | Point Zero',
    description:
      'The page you requested could not be found. Return to Point Zero to explore AI, web and mobile software services.',
    keywords: 'Point Zero, 404',
    h1: 'Page not found',
    bodyCopy:
      'This URL does not match any page on pointzero.com.np. Visit the homepage, services, or projects.',
    noindex: true,
    ogImage: '/og-image.png',
  };
  const notFoundHtml = buildSnapshot(template, notFoundRoute);
  writeFileSync(join(DIST, '404.html'), notFoundHtml, 'utf8');
  written++;

  console.log(
    `[prerender] generated ${written} static HTML snapshots in dist/ (${posts.length} blog posts) + sitemap-blog.xml + rss.xml + 404.html`,
  );
}

main();
