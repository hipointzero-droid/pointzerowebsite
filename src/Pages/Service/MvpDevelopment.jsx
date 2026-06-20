import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TimerIcon from '@mui/icons-material/Timer';

const SPRINTS = [
  {
    week: 'Week 1',
    title: 'Discovery & Definition',
    desc: 'We map the riskiest assumption, the smallest valuable slice, success metrics and a launch-ready scope. Output: Lean Canvas, click-through prototype, fixed scope.',
  },
  {
    week: 'Week 2–3',
    title: 'Design & Architecture',
    desc: 'High-fidelity Figma flows, design system, auth + data model, infra picks. Stakeholder demo at end of week 3.',
  },
  {
    week: 'Week 4–7',
    title: 'Build Sprints',
    desc: 'Two-week sprints with Friday demos. Continuous deploy to a staging URL. You can use the app from week 4.',
  },
  {
    week: 'Week 8',
    title: 'Beta & Hardening',
    desc: 'Closed beta with 10–50 real users, analytics events, crash reporting, performance audit and the must-fix punch list.',
  },
  {
    week: 'Week 9–10',
    title: 'Launch & Measure',
    desc: 'Production deploy, landing page, paywall or waitlist, day-one analytics dashboard and the first iteration plan based on real usage.',
  },
];

const WHATS_INCLUDED = [
  'Auth (email, Google, Apple) with magic links',
  'Stripe / eSewa / Khalti billing & subscriptions',
  'Admin dashboard for ops, support and analytics',
  'Transactional email + push notifications',
  'Role-based access control and audit logs',
  'Mixpanel / PostHog event tracking',
  'Sentry crash & error monitoring',
  'Postgres with migrations and backups',
  'CI/CD with staging + production environments',
  'Landing page with conversion tracking',
  'SEO basics — schema, sitemap, OG, robots',
  'Day-one runbook so you can support yourself',
];

const FAQS = [
  {
    q: 'What is an MVP and what should it include?',
    a: 'An MVP is the smallest version of your product that proves the riskiest assumption and starts collecting real-world signal. It should include real auth, one core flow done well, billing (even fake billing), and analytics — not 20 half-baked features.',
  },
  {
    q: 'How long does an MVP take to build?',
    a: 'A focused MVP at Point Zero ships in 8–10 weeks. We work in 2-week sprints with Friday demos, so by week 4 you can already use the app and start gathering feedback.',
  },
  {
    q: 'How much does MVP development cost?',
    a: 'Most MVPs at Point Zero range USD 6,000–18,000 depending on scope. We send a fixed-price quote after a free 30-minute discovery call and a Lean Canvas review.',
  },
  {
    q: 'Web MVP vs mobile MVP — which first?',
    a: 'Default to web unless your value prop genuinely requires mobile (camera, GPS, offline, push). Web MVPs are 2–3x faster to ship, easier to iterate, and skip the app-store review loop.',
  },
  {
    q: 'Do you offer equity-for-build deals?',
    a: 'Rarely, and only for founders we have prior context with. For everyone else we recommend a fixed-price MVP — it keeps incentives clean and lets you own the IP cleanly from day one.',
  },
  {
    q: 'What happens after the MVP launches?',
    a: 'We hand over the codebase, runbook and analytics dashboard. Most founders move to a monthly growth retainer with us covering feature iteration, A/B tests, paid-channel optimisation and infra reliability.',
  },
];

export default function MvpDevelopment() {
  const navigate = useNavigate();

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/mvp-development#howto',
    name: 'How Point Zero ships an MVP in 8–10 weeks',
    description:
      'The five-sprint MVP process Point Zero uses: discovery, design and architecture, build sprints, beta hardening, and launch with day-one analytics.',
    totalTime: 'P70D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '6000',
    },
    step: SPRINTS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `${s.week}: ${s.title}`,
      text: s.desc,
      url: `https://pointzero.com.np/services/mvp-development#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#timeline-heading', '#inc-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/mvp-development#webpage',
        url: 'https://pointzero.com.np/services/mvp-development',
        name: 'MVP Development for Ambitious Founders',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/mvp-development#service',
        name: 'MVP Development Services',
        serviceType: 'Startup MVP engineering',
        provider: { '@type': 'Organization', name: 'Point Zero', url: 'https://pointzero.com.np/' },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'MVP development for startups. From Lean Canvas to launched product in 8–10 weeks. Auth, billing, admin, analytics and a runbook included.',
        offers: {
          '@type': 'Offer',
          price: '6000',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '6000',
            priceCurrency: 'USD',
            unitText: 'starting price for MVP',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/mvp-development#faq',
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
        title="MVP Development Company — Launch in 8–10 Weeks | Point Zero"
        description="Point Zero builds startup MVPs end to end — auth, billing, admin, analytics. Lean scope, weekly demos, launch in 8–10 weeks. From USD 6,000."
        keywords="MVP development company, MVP development Nepal, startup MVP, SaaS MVP, Lean MVP, build an MVP fast, MVP cost, MVP development agency, hire MVP team Nepal"
        path="/services/mvp-development"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'MVP Development', path: '/services/mvp-development' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <BoltIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">MVP Development · Built in 8–10 weeks</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              MVP Development for{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Ambitious Founders
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              We take you from <strong className="text-white">Lean Canvas</strong> to a
              launched product in 8–10 weeks — with auth, billing, admin, analytics
              and a runbook. So you can prove your idea with real users instead of
              another investor deck.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 founder rating · MVPs from <strong className="text-gray-300">USD 6,000</strong> · Day-one analytics dashboard
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Founder Discovery Call
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Launched MVPs
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              From idea to launched product in{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">10 weeks</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Two-week sprints. Friday demos. A working app you can use by week 4.
            </p>
          </AnimateOnScroll>

          <ol className="space-y-4 max-w-4xl mx-auto">
            {SPRINTS.map((s) => (
              <AnimateOnScroll
                key={s.week}
                as="li"
                variant="up"
                className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all"
              >
                <div className="shrink-0 w-24 text-sm font-semibold text-emerald-300 uppercase tracking-wider pt-1">
                  {s.week}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="inc-heading" className="relative bg-black py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="inc-heading" className="text-3xl sm:text-4xl font-bold text-white">
              What ships with every Point Zero MVP
            </h2>
            <p className="mt-4 text-gray-400">
              No "Phase 2" surprises. The plumbing comes with the build.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {WHATS_INCLUDED.map((point) => (
              <div key={point} className="flex gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-emerald-400 shrink-0" />
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Point Zero */}
      <section aria-labelledby="why-heading" className="relative bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Why founders choose Point Zero for their MVP
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <TimerIcon className="w-6 h-6" />, title: 'Ship in weeks, not quarters', desc: 'Fixed 8–10 week timelines, weekly demos, a working app by week 4.' },
              { icon: <InsightsIcon className="w-6 h-6" />, title: 'Built to be measured', desc: 'Analytics, funnels and crash monitoring on day one — not retrofitted later.' },
              { icon: <HandshakeIcon className="w-6 h-6" />, title: 'Founder-friendly contracts', desc: 'Fixed scope, fixed price. You own the IP. Code lives in your GitHub.' },
              { icon: <GroupsIcon className="w-6 h-6" />, title: 'Senior team', desc: 'Senior engineers on the build — not interns. Direct Slack with the team.' },
              { icon: <BoltIcon className="w-6 h-6" />, title: 'AI-ready architecture', desc: 'Your MVP is built so RAG, agents and LLM features can plug in without a rewrite.' },
              { icon: <RocketLaunchIcon className="w-6 h-6" />, title: 'Launch support', desc: 'Day-one playbook covering paid ads, social, PR and analytics interpretation.' },
            ].map((b) => (
              <div key={b.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
                <div className="inline-flex p-2.5 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-300 rounded-lg mb-3">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="mvp-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">MVP FAQ</span>
            </div>
            <h2 id="mvp-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              MVP development — answered for founders
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-emerald-500/30 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-emerald-400 group-open:rotate-180 transition-transform">▾</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">2 founder slots open this quarter</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to put your idea in real users' hands?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Free 30-minute founder call. Lean Canvas review. Fixed-price quote in 48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your MVP
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
