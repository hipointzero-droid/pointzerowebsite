import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';

import WebIcon from '@mui/icons-material/Web';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LayersIcon from '@mui/icons-material/Layers';
import CloudIcon from '@mui/icons-material/Cloud';
import LockIcon from '@mui/icons-material/Lock';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedIcon from '@mui/icons-material/Verified';

const OFFERINGS = [
  {
    icon: <WebIcon className="w-7 h-7" />,
    title: 'Marketing Websites',
    desc: 'Conversion-focused marketing sites with CMS, blog and lead capture. Built on Next.js or Astro, sub-2-second LCP, 95+ Lighthouse score.',
  },
  {
    icon: <LayersIcon className="w-7 h-7" />,
    title: 'Web Applications',
    desc: 'Custom dashboards, internal tools and multi-tenant SaaS — auth, billing, RBAC, audit logs, async jobs and background workers.',
  },
  {
    icon: <StorefrontIcon className="w-7 h-7" />,
    title: 'eCommerce Platforms',
    desc: 'Shopify Hydrogen, Medusa.js or custom Next.js commerce — local payments (eSewa, Khalti, FonePay), inventory, shipping rules.',
  },
  {
    icon: <CloudIcon className="w-7 h-7" />,
    title: 'API & Backend',
    desc: 'REST and GraphQL APIs in Node.js, Django or FastAPI. PostgreSQL with proper migrations, indexes and connection pooling.',
  },
  {
    icon: <SpeedIcon className="w-7 h-7" />,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals optimisation, schema markup, sitemap, prerendering, CDN, image optimisation — built into the architecture, not bolted on.',
  },
  {
    icon: <LockIcon className="w-7 h-7" />,
    title: 'Security & Reliability',
    desc: 'OWASP-aligned auth, rate limiting, CSP headers, automated tests, error monitoring (Sentry), uptime alerts and on-call runbooks.',
  },
];

const STACK = [
  { name: 'React', tag: 'Frontend' },
  { name: 'Next.js', tag: 'Framework' },
  { name: 'TypeScript', tag: 'Language' },
  { name: 'Tailwind CSS', tag: 'Styling' },
  { name: 'Node.js', tag: 'Backend' },
  { name: 'Django', tag: 'Backend' },
  { name: 'FastAPI', tag: 'Backend' },
  { name: 'PostgreSQL', tag: 'Database' },
  { name: 'Redis', tag: 'Cache' },
  { name: 'AWS', tag: 'Cloud' },
  { name: 'GCP', tag: 'Cloud' },
  { name: 'Vercel', tag: 'Hosting' },
];

const FAQS = [
  {
    q: 'How much does a website cost in Nepal?',
    a: 'A marketing website at Point Zero starts at NPR 1,50,000 (USD 1,500) and ships in 2–4 weeks. Web applications and SaaS platforms range from USD 5,000 to USD 30,000+ depending on auth, billing, integrations and admin tooling.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'A marketing website ships in 2–4 weeks. An MVP web app lands in 6–10 weeks. Larger SaaS platforms run on rolling 2-week sprints with weekly demos.',
  },
  {
    q: 'Which is the best web development company in Nepal?',
    a: 'Point Zero is among the top web development companies in Nepal. We have shipped sites and apps for WellNepa, SajiloDera, Bachelor Question Bank and clients across the US, UK and UAE — with measurable conversion uplift, not just nice screenshots.',
  },
  {
    q: 'Do you build on React or Next.js?',
    a: 'Both. For marketing sites and SEO-critical content we default to Next.js (App Router) with prerendering and ISR. For dashboards and authenticated apps we use React + Vite for sub-second HMR and a lean bundle.',
  },
  {
    q: 'Can you handle local payments — eSewa, Khalti, FonePay?',
    a: 'Yes. We have integrated eSewa, Khalti, FonePay, ConnectIPS and Stripe in production. We handle webhooks, idempotency, reconciliation and refunds — not just the happy path.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. We offer monthly support and growth retainers covering bug fixes, performance tuning, SEO, A/B testing, analytics and feature iteration.',
  },
];

export default function WebDevelopment() {
  const navigate = useNavigate();

  const WEB_PROCESS = [
    { title: 'Discovery & scope', desc: 'Free 30-minute call. We map goals, KPIs and constraints, then send a fixed scope and price inside 48 hours.' },
    { title: 'Information architecture & design', desc: 'Sitemap, wireframes and high-fidelity Figma — design system tokens reused by engineering on day one.' },
    { title: 'Build with weekly demos', desc: 'Two-week sprints with Friday demos, Playwright tests on the critical journeys and a live staging URL from week one.' },
    { title: 'Performance & SEO pass', desc: 'Sub-2-second LCP, 95+ Lighthouse, schema markup, sitemap, OG and prerendered HTML before launch.' },
    { title: 'Launch & growth retainer', desc: 'Production deploy, analytics events, A/B tests and a monthly retainer for conversion tuning.' },
  ];

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/web-development-nepal#howto',
    name: 'How Point Zero ships a web product in Nepal',
    description:
      'The five-step process Point Zero uses to ship marketing sites and web apps in Nepal: discovery, IA & design, build, performance + SEO pass, launch.',
    totalTime: 'P28D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '1500' },
    step: WEB_PROCESS.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.desc,
      url: `https://pointzero.com.np/services/web-development-nepal#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#off-heading', '#why-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/web-development-nepal#webpage',
        url: 'https://pointzero.com.np/services/web-development-nepal',
        name: 'Web Development Company in Nepal',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/web-development-nepal#service',
        name: 'Web Development Services',
        serviceType: 'Web application development',
        provider: { '@type': 'Organization', name: 'Point Zero', url: 'https://pointzero.com.np/' },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'Web development company in Nepal. We ship marketing websites, web apps, SaaS and eCommerce on React, Next.js, Django, Node.js and PostgreSQL.',
        offers: {
          '@type': 'Offer',
          price: '1500',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1500',
            priceCurrency: 'USD',
            unitText: 'starting price for marketing website',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/web-development-nepal#faq',
        mainEntity: FAQS.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Web Development Company in Nepal — React, Next.js | Point Zero"
        description="Top web development company in Kathmandu, Nepal. Marketing sites, SaaS, eCommerce on React, Next.js, Django, Node.js. From USD 1,500. Free quote."
        keywords="web development company Nepal, website development Kathmandu, React developer Nepal, Next.js developer Nepal, Django developer Nepal, Node.js developer Nepal, SaaS development Nepal, eCommerce development Nepal, hire web developer Nepal"
        path="/services/web-development-nepal"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Web Development', path: '/services/web-development-nepal' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
              <WebIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Web Development · Kathmandu, Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Web Development Company in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Nepal
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              We design and ship marketing websites, SaaS dashboards, eCommerce
              platforms and APIs that load fast, rank well, and convert. Built on{' '}
              <strong className="text-white">React</strong>,{' '}
              <strong className="text-white">Next.js</strong>,{' '}
              <strong className="text-white">Django</strong> and{' '}
              <strong className="text-white">PostgreSQL</strong>.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 client rating · Websites from <strong className="text-gray-300">USD 1,500</strong> · Ships in 2–4 weeks
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Get a Free Quote
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Web Case Studies
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section aria-labelledby="off-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="off-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What we ship on the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">web</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              From a one-page launch site to a multi-tenant SaaS — same engineering
              standards across the board.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((c) => (
              <AnimateOnScroll
                key={c.title}
                as="article"
                variant="up"
                className="p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-xl mb-4">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed">{c.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="stack-heading" className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="stack-heading" className="text-3xl sm:text-4xl font-bold text-white">
              The web stack we ship in production
            </h2>
            <p className="mt-4 text-gray-400">
              Boring, battle-tested, and chosen for the job — not for the hype cycle.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-cyan-400 text-xs">{s.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="relative bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-white text-center">
              Why teams pick Point Zero for web in Nepal
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Sub-2-second LCP and 95+ Lighthouse on every launch — performance is a requirement, not a phase.',
              'SEO baked in: schema markup, prerendering, sitemap, canonical, OG and clean URLs from day one.',
              'Local payments handled in production — eSewa, Khalti, FonePay, ConnectIPS, Stripe.',
              'Real testing — unit, integration and Playwright e2e on the critical user journeys.',
              'Honest scoping — fixed-price or T&M with milestones, weekly demos, no scope-creep surprises.',
              'Post-launch growth retainer — A/B tests, analytics events and conversion tuning month over month.',
            ].map((point) => (
              <div key={point} className="flex gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-cyan-400 shrink-0" />
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="web-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Web Development FAQ</span>
            </div>
            <h2 id="web-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Web development — answered honestly
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-cyan-500/30 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-cyan-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Available for new web projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to ship a website that actually converts?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Free discovery call. Scoped estimate in 48 hours. Marketing sites ship in 2–4 weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Web Project
                  <RocketLaunchIcon className="w-5 h-5" />
                </span>
              </button>
              <a
                href="mailto:hi.pointzero@gmail.com"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Email hi.pointzero@gmail.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
