import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import BrushIcon from '@mui/icons-material/Brush';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InsightsIcon from '@mui/icons-material/Insights';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedIcon from '@mui/icons-material/Verified';

const OFFERINGS = [
  {
    icon: <InsightsIcon className="w-7 h-7" />,
    title: 'Product Discovery & Research',
    desc: 'User interviews, jobs-to-be-done, competitor teardown and an opinionated product brief — so design starts from a real problem, not a hunch.',
  },
  {
    icon: <DesignServicesIcon className="w-7 h-7" />,
    title: 'Wireframes & Clickable Prototypes',
    desc: 'Low-fi flows in Figma you can click through and share with stakeholders before a single line of code is written.',
  },
  {
    icon: <ColorLensIcon className="w-7 h-7" />,
    title: 'Visual & Brand Design',
    desc: 'Color systems, type, icons and motion that match your category and stand out where it counts — landing page, app, OG card and dashboard.',
  },
  {
    icon: <BrushIcon className="w-7 h-7" />,
    title: 'Design Systems',
    desc: 'Tokens, components and patterns shipped to Figma and Tailwind / Storybook — so engineers reuse the same primitives and ship faster.',
  },
  {
    icon: <AccessibilityNewIcon className="w-7 h-7" />,
    title: 'Accessibility (WCAG 2.2)',
    desc: 'Contrast, focus order, keyboard paths, screen-reader labels and motion preferences — accessibility audited on every release.',
  },
  {
    icon: <VerifiedIcon className="w-7 h-7" />,
    title: 'Conversion Rate Optimisation',
    desc: 'CTA placement, copy hierarchy, friction audits and A/B test setup so design choices map to business outcomes.',
  },
];

const TOOLS = [
  { name: 'Figma', tag: 'Design' },
  { name: 'FigJam', tag: 'Whiteboard' },
  { name: 'Framer', tag: 'Prototype' },
  { name: 'ProtoPie', tag: 'Motion' },
  { name: 'Maze', tag: 'User Test' },
  { name: 'Hotjar', tag: 'Heatmaps' },
  { name: 'PostHog', tag: 'Analytics' },
  { name: 'Storybook', tag: 'System' },
  { name: 'Tailwind', tag: 'Tokens' },
  { name: 'Lottie', tag: 'Motion' },
];

const FAQS = [
  {
    q: 'How much does UI/UX design cost in Nepal?',
    a: 'A landing page design at Point Zero starts at NPR 60,000 (USD 600). Full product UI/UX with research, design system and high-fidelity flows ranges USD 2,500–10,000 depending on screen count and complexity.',
  },
  {
    q: 'How long does UI/UX design take?',
    a: 'A landing page lands in 1–2 weeks. A full product (research → design system → 30–60 screens) takes 4–8 weeks. We work in weekly demos so stakeholders see progress without surprises.',
  },
  {
    q: 'Do you design for both web and mobile?',
    a: 'Yes. Web (marketing sites, SaaS dashboards, eCommerce), iOS, Android and cross-platform. We follow Apple HIG, Material 3 and our own platform-aware tokens for cross-platform consistency.',
  },
  {
    q: 'Will the design hand off cleanly to developers?',
    a: 'Yes. Every project ships with documented tokens, a Storybook-ready component spec and an inspection-ready Figma file. We also build the React components ourselves so handoff is zero-friction.',
  },
  {
    q: 'Do you provide UX research and user testing?',
    a: 'Yes. We run user interviews, usability tests, and unmoderated tests via Maze. We deliver a tagged research database and decision log so insights compound across releases.',
  },
  {
    q: 'Can you redesign an existing product?',
    a: 'Absolutely. We start with a teardown audit (UX heuristics, IA, conversion, accessibility), then propose a phased redesign so you do not have to freeze the roadmap to ship a refresh.',
  },
];

export default function UiUxDesign() {
  const navigate = useNavigate();

  const UIUX_PROCESS = [
    { title: 'Research & product brief', desc: 'User interviews, jobs-to-be-done and competitor teardown — output is an opinionated product brief and a measurable design goal.' },
    { title: 'Wireframes & clickable prototype', desc: 'Low-fi flows in Figma, hooked up so stakeholders can click through and react before pixel-level work begins.' },
    { title: 'Visual design & tokens', desc: 'Color, typography, icons and motion designed against the brief; tokens shipped to Figma + Tailwind / Storybook for engineering reuse.' },
    { title: 'Accessibility audit (WCAG 2.2)', desc: 'Contrast, focus order, keyboard paths, screen-reader labels and motion preferences — audited before handoff.' },
    { title: 'Engineering handoff & QA', desc: 'Storybook-ready component spec, inspection-ready Figma, and a UI QA pass on the live build before launch.' },
  ];

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/ui-ux-design-nepal#howto',
    name: 'How Point Zero designs a product in Nepal',
    description:
      'The five-step UI/UX process Point Zero uses: research, wireframes & prototype, visual design with tokens, WCAG accessibility audit, engineering handoff + QA.',
    totalTime: 'P14D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '600' },
    step: UIUX_PROCESS.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.desc,
      url: `https://pointzero.com.np/services/ui-ux-design-nepal#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#off-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/ui-ux-design-nepal#webpage',
        url: 'https://pointzero.com.np/services/ui-ux-design-nepal',
        name: 'UI/UX Design Company in Nepal',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/ui-ux-design-nepal#service',
        name: 'UI/UX Design Services',
        serviceType: 'Product design',
        provider: { '@type': 'Organization', name: 'Point Zero', url: 'https://pointzero.com.np/' },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'UI/UX design company in Nepal. Product discovery, wireframes, visual design, design systems, accessibility and CRO — handed off ready for engineering.',
        offers: {
          '@type': 'Offer',
          price: '600',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
          url: 'https://pointzero.com.np/services/ui-ux-design-nepal',
          category: 'UI/UX design',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '600',
            priceCurrency: 'USD',
            unitText: 'starting price for landing page design',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/ui-ux-design-nepal#faq',
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
        title="UI/UX Design Company in Nepal — Product, Web & Mobile | Point Zero"
        description="Top UI/UX design company in Kathmandu, Nepal. Product discovery, visual design, design systems, accessibility and CRO. Landing page design from USD 600."
        keywords="UI UX design Nepal, UI UX design company Kathmandu, product design Nepal, Figma designer Nepal, design system Nepal, mobile app design Nepal, web design Nepal, UX research Nepal, hire UI UX designer Nepal"
        path="/services/ui-ux-design-nepal"
        image="https://pointzero.com.np/og/ui-ux.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'UI/UX Design', path: '/services/ui-ux-design-nepal' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
              <BrushIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">UI/UX Design · Kathmandu, Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              UI/UX Design Company in{' '}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Nepal
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              We design landing pages, web apps and mobile products that look premium,
              feel obvious to use, and convert. Research-led,{' '}
              <strong className="text-white">Figma</strong>-native, and handed off in a
              spec engineers actually enjoy building from.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 client rating · Landing page design from <strong className="text-gray-300">USD 600</strong> · Ships in 1–2 weeks
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Start Your Design Project', 'service_uiux_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Design Project
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Design Case Studies
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section aria-labelledby="off-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="off-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What we ship in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">design</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              From a one-page hero to a 60-screen SaaS — same research and craft standards.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((c) => (
              <AnimateOnScroll
                key={c.title}
                as="article"
                variant="up"
                className="p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-orange-500/20 to-pink-500/20 text-orange-300 rounded-xl mb-4">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed">{c.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="tools-heading" className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="tools-heading" className="text-3xl sm:text-4xl font-bold text-white">
              The design tools we ship with
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-wrap gap-3 justify-center">
            {TOOLS.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-orange-300 text-xs">{s.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ui-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">UI/UX Design FAQ</span>
            </div>
            <h2 id="ui-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Design — answered honestly
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-orange-500/30 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▾</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Available for new design projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to ship a design that wins on craft?
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start a Design Project
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
