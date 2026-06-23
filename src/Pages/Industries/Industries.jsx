import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GavelIcon from '@mui/icons-material/Gavel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const INDUSTRIES = [
  {
    slug: 'healthcare',
    name: 'Healthcare & MedTech',
    icon: <LocalHospitalIcon className="w-7 h-7" />,
    gradient: 'from-rose-500/20 to-red-600/20',
    accent: 'text-rose-300',
    useCases: ['Clinical decision support', 'Patient triage chatbots', 'EMR integration', 'HIPAA-aware AI'],
  },
  {
    slug: 'finance',
    name: 'Finance & FinTech',
    icon: <AccountBalanceIcon className="w-7 h-7" />,
    gradient: 'from-emerald-500/20 to-green-600/20',
    accent: 'text-emerald-300',
    useCases: ['Fraud detection', 'KYC / credit scoring AI', 'eSewa & Khalti integrations', 'Algorithmic dashboards'],
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    icon: <SchoolIcon className="w-7 h-7" />,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: 'text-cyan-300',
    useCases: ['LMS & question banks', 'AI tutoring agents', 'Adaptive learning', 'Exam analytics'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: <LocalShippingIcon className="w-7 h-7" />,
    gradient: 'from-orange-500/20 to-amber-600/20',
    accent: 'text-orange-300',
    useCases: ['Route optimisation', 'Driver apps', 'Capacity forecasting', 'Warehouse vision AI'],
  },
  {
    slug: 'retail',
    name: 'Retail & eCommerce',
    icon: <StorefrontIcon className="w-7 h-7" />,
    gradient: 'from-pink-500/20 to-rose-600/20',
    accent: 'text-pink-300',
    useCases: ['Shopify & headless storefronts', 'Recommendation engines', 'Inventory AI', 'AR try-on'],
  },
  {
    slug: 'travel',
    name: 'Travel & Hospitality',
    icon: <FlightTakeoffIcon className="w-7 h-7" />,
    gradient: 'from-sky-500/20 to-cyan-600/20',
    accent: 'text-sky-300',
    useCases: ['Booking platforms', 'AI travel concierges', 'Pricing intelligence', 'Multi-language chat'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    icon: <HomeWorkIcon className="w-7 h-7" />,
    gradient: 'from-amber-500/20 to-yellow-600/20',
    accent: 'text-amber-300',
    useCases: ['Listing marketplaces', 'Mortgage calculators', 'Virtual tours', 'Tenant CRMs'],
  },
  {
    slug: 'legal',
    name: 'Legal & GovTech',
    icon: <GavelIcon className="w-7 h-7" />,
    gradient: 'from-indigo-500/20 to-blue-600/20',
    accent: 'text-indigo-300',
    useCases: ['Document AI / e-discovery', 'Case-law RAG', 'Compliance dashboards', 'Permit digitisation'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    icon: <PrecisionManufacturingIcon className="w-7 h-7" />,
    gradient: 'from-slate-500/20 to-zinc-600/20',
    accent: 'text-slate-300',
    useCases: ['Computer-vision QC', 'Predictive maintenance', 'IoT dashboards', 'Digital twins'],
  },
  {
    slug: 'media',
    name: 'Media, Entertainment & OTT',
    icon: <LiveTvIcon className="w-7 h-7" />,
    gradient: 'from-purple-500/20 to-fuchsia-600/20',
    accent: 'text-purple-300',
    useCases: ['Streaming apps', 'Personalised recommendations', 'Auto-tagging & metadata', 'AI-generated promos'],
  },
  {
    slug: 'food-delivery',
    name: 'Food & On-Demand',
    icon: <RestaurantIcon className="w-7 h-7" />,
    gradient: 'from-red-500/20 to-orange-600/20',
    accent: 'text-red-300',
    useCases: ['Delivery marketplaces', 'Dispatch algorithms', 'Loyalty & wallets', 'Multi-vendor admin'],
  },
  {
    slug: 'social',
    name: 'Social & Community',
    icon: <GroupsIcon className="w-7 h-7" />,
    gradient: 'from-teal-500/20 to-cyan-600/20',
    accent: 'text-teal-300',
    useCases: ['Realtime chat & feeds', 'Creator monetisation', 'Moderation AI', 'Video & voice'],
  },
  {
    slug: 'security',
    name: 'Security & DevSecOps',
    icon: <SecurityIcon className="w-7 h-7" />,
    gradient: 'from-lime-500/20 to-green-600/20',
    accent: 'text-lime-300',
    useCases: ['SOC dashboards', 'Anomaly detection AI', 'Compliance automation', 'Secrets management'],
  },
];

const PILLARS = [
  { title: 'Patterns, then product', desc: 'We start from a playbook proven in your vertical — not a blank page.' },
  { title: 'Regulation-aware', desc: 'HIPAA, GDPR, PCI-DSS, SOC 2 baked into the architecture from sprint one.' },
  { title: 'Schemas that survive', desc: 'Data models built for the next five years, not the next sprint.' },
  { title: 'AI grounded in the domain', desc: 'Prompts, guardrails and evals tuned to your jargon, not the generic web.' },
  { title: 'Integration-first', desc: 'Legacy ERPs, payment gateways and government APIs — handled.' },
  { title: 'Measured against your KPI', desc: 'Every release ties back to a number your CFO recognises.' },
];

const STAGES = [
  { week: 'Week 1', title: 'Vertical audit', desc: 'Map your domain, regulation and unit economics into a one-page brief.' },
  { week: 'Week 2', title: 'AI opportunity map', desc: 'Score every use case by impact, data readiness and risk.' },
  { week: 'Weeks 3–4', title: 'Rapid POC', desc: 'A working prototype against real data — go / no-go in two weeks.' },
  { week: 'Month 2+', title: 'Full build', desc: 'Production engineering with evals, observability and CI/CD.' },
  { week: 'Month 6+', title: 'Scale & compound', desc: 'Performance, cost and feature flywheel that compounds quarterly.' },
];

export default function Industries() {
  const navigate = useNavigate();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://pointzero.com.np/industries#page',
        url: 'https://pointzero.com.np/industries',
        name: 'Industries we serve — Point Zero',
        description:
          'Point Zero ships AI, web and mobile software across 13 verticals — healthcare, finance, education, logistics, retail, travel and more.',
        inLanguage: 'en-NP',
      },
      {
        '@type': 'ItemList',
        name: 'Industries served by Point Zero',
        numberOfItems: INDUSTRIES.length,
        itemListElement: INDUSTRIES.map((ind, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: ind.name,
        })),
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Industries — Healthcare, Finance, EdTech, Logistics & More | Point Zero"
        description="Point Zero ships AI, web and mobile software across 13 industries — healthcare, finance, EdTech, logistics, retail, travel, legal, manufacturing and more."
        keywords="healthcare app developer Nepal, fintech developer Nepal, EdTech developer Nepal, logistics software Nepal, retail software Nepal, travel app developer Nepal, legal tech Nepal, industry-specific software Nepal"
        path="/industries"
        image="https://pointzero.com.np/og/industries.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 text-cyan-400">
              <span className="block w-10 h-px bg-cyan-400/60" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">Industries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
              Every industry,{' '}
              <span className="block italic font-serif bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-indexed.
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Thirteen playbooks, built from the products we have shipped — each
              tuned to the regulation, data shape and unit economics of its
              vertical. We do not start your project from a blank page; we start
              from a pattern that already worked.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Book a Discovery Call', 'industries_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Discovery Call
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Case Studies
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries grid */}
      <section aria-labelledby="industries-grid" className="relative bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="max-w-3xl mb-12">
            <h2 id="industries-grid" className="text-3xl sm:text-4xl font-bold text-white">
              Playbooks we have already shipped
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Real code, real customers, real revenue — pick the one that looks
              like yours.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {INDUSTRIES.map((ind, i) => (
              <AnimateOnScroll
                key={ind.slug}
                as="article"
                variant="up"
                delay={i % 6}
                className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${ind.gradient} ring-1 ring-white/10 mb-5`}>
                  <span className={ind.accent}>{ind.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {ind.name}
                </h3>
                <ul className="space-y-1.5">
                  {ind.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-cyan-400/70 shrink-0" aria-hidden="true" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section aria-labelledby="pillars-heading" className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="max-w-3xl mb-12">
            <h2 id="pillars-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Why a domain-aware partner wins
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Six principles every Point Zero engagement is held to — regardless
              of the vertical.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <AnimateOnScroll
                key={p.title}
                as="div"
                variant="up"
                delay={i % 3}
                className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-white/10 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30 mb-4">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement stages */}
      <section aria-labelledby="stages-heading" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="max-w-3xl mb-12">
            <h2 id="stages-heading" className="text-3xl sm:text-4xl font-bold text-white">
              From audit to compound growth
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              A predictable five-step engagement — so you always know where you
              are, and what's next.
            </p>
          </AnimateOnScroll>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, i) => (
              <AnimateOnScroll
                key={s.title}
                as="li"
                variant="up"
                delay={i}
                className="relative p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-colors"
              >
                <div className="absolute -top-3 left-5 px-2.5 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {s.week}
                </div>
                <h3 className="text-lg font-semibold text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll
            as="div"
            variant="up"
            className="relative overflow-hidden p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-white/10"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Free discovery call</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your vertical is on the list.{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Let&apos;s talk this week.
                </span>
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl">
                Tell us the regulation, the data and the metric. We will come back
                inside 48 hours with a one-page scope and a fixed price.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    trackCTAClick('Start the conversation', 'industries_footer_cta');
                    navigate('/contact');
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start the conversation
                    <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  See full service list
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
