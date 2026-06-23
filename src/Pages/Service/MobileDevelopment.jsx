import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PaymentIcon from '@mui/icons-material/Payment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedIcon from '@mui/icons-material/Verified';

const OFFERINGS = [
  {
    icon: <FlashOnIcon className="w-7 h-7" />,
    title: 'Cross-Platform with Flutter',
    desc: 'One Dart codebase shipped to both iOS and Android. Sub-second hot reload, 60fps animations, native modules where it matters.',
  },
  {
    icon: <PhoneIphoneIcon className="w-7 h-7" />,
    title: 'React Native',
    desc: 'JavaScript / TypeScript apps with native modules, OTA updates via Expo / CodePush, and reuse with your web team.',
  },
  {
    icon: <AppleIcon className="w-7 h-7" />,
    title: 'Native iOS — Swift / SwiftUI',
    desc: 'For apps that need deep iOS integration: HealthKit, ARKit, WidgetKit, CallKit, custom animations and best-in-class App Store quality.',
  },
  {
    icon: <AndroidIcon className="w-7 h-7" />,
    title: 'Native Android — Kotlin / Jetpack Compose',
    desc: 'Modern Compose UIs, background work with WorkManager, Material 3 design and Play Store submission handled end to end.',
  },
  {
    icon: <PaymentIcon className="w-7 h-7" />,
    title: 'Local & Global Payments',
    desc: 'eSewa, Khalti, FonePay, IME Pay, ConnectIPS, Stripe and Apple/Google Pay — production-tested with webhooks and refunds.',
  },
  {
    icon: <NotificationsActiveIcon className="w-7 h-7" />,
    title: 'Push, Analytics & Crash',
    desc: 'Firebase Cloud Messaging, OneSignal, deep links, attribution, Mixpanel/Amplitude events, Crashlytics and Sentry — wired in from day one.',
  },
];

const STACK = [
  { name: 'Flutter', tag: 'Cross-platform' },
  { name: 'Dart', tag: 'Language' },
  { name: 'React Native', tag: 'Cross-platform' },
  { name: 'Expo', tag: 'Tooling' },
  { name: 'Swift', tag: 'iOS' },
  { name: 'SwiftUI', tag: 'iOS' },
  { name: 'Kotlin', tag: 'Android' },
  { name: 'Jetpack Compose', tag: 'Android' },
  { name: 'Firebase', tag: 'Backend-as-a-service' },
  { name: 'Supabase', tag: 'Backend-as-a-service' },
  { name: 'Sentry', tag: 'Crash' },
  { name: 'OneSignal', tag: 'Push' },
];

const FAQS = [
  {
    q: 'How much does a mobile app cost in Nepal?',
    a: 'An MVP mobile app at Point Zero starts at NPR 3,00,000 (USD 2,500) for a focused Flutter build with 3–5 screens and a backend. Production apps with auth, payments and admin range from USD 6,000 to USD 30,000+.',
  },
  {
    q: 'How long does mobile app development take?',
    a: 'An MVP ships in 6–10 weeks. Full production apps land in 10–16 weeks. Larger products run on rolling 2-week sprints with TestFlight / Play Console beta builds every week.',
  },
  {
    q: 'Flutter vs React Native — which is better?',
    a: 'Flutter wins on UI consistency, animations, and pixel-perfect design. React Native wins when you already have a JS/TS team and want to share logic with your web app. For most greenfield mobile apps in Nepal we default to Flutter.',
  },
  {
    q: 'Do you handle App Store and Play Store submission?',
    a: 'Yes. We handle the entire submission flow — store listings, screenshots, privacy manifest, App Store Connect, Play Console, signed builds, age ratings and rejection appeals if needed.',
  },
  {
    q: 'Can you integrate eSewa, Khalti and FonePay in the mobile app?',
    a: 'Yes. We have shipped eSewa, Khalti, FonePay, IME Pay and ConnectIPS in production mobile apps — with webhook handling, refunds, reconciliation and proper failure-state UX.',
  },
  {
    q: 'Do you provide post-launch support and updates?',
    a: 'Yes. We offer monthly support retainers for OS upgrades (iOS/Android annual updates), SDK upgrades, store policy changes, crash triage and feature iteration.',
  },
];

export default function MobileDevelopment() {
  const navigate = useNavigate();

  const MOB_PROCESS = [
    { title: 'Discovery & platform pick', desc: 'Free founder call. We map the must-have flow and recommend Flutter, React Native or native based on real constraints.' },
    { title: 'Design & prototyping', desc: 'High-fidelity Figma with platform-aware tokens (HIG + Material 3), motion specs and a clickable TestFlight-style prototype.' },
    { title: 'Build sprints with TestFlight / Play beta', desc: 'Two-week sprints, weekly internal builds to TestFlight + Play Internal Testing, and crash dashboards from week one.' },
    { title: 'Payments, push & analytics integration', desc: 'eSewa, Khalti, FonePay, Stripe, FCM, OneSignal, Mixpanel — production-tested, with refund and reconciliation flows.' },
    { title: 'Store submission & launch support', desc: 'App Store Connect & Play Console submission handled end-to-end, including review appeals and day-one analytics dashboard.' },
  ];

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/mobile-app-development-nepal#howto',
    name: 'How Point Zero ships a mobile app in Nepal',
    description:
      'The five-step process Point Zero uses to ship iOS and Android apps in Nepal: discovery, design, sprints with TestFlight betas, payments + analytics, store launch.',
    totalTime: 'P70D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '2500' },
    step: MOB_PROCESS.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.desc,
      url: `https://pointzero.com.np/services/mobile-app-development-nepal#step-${i + 1}`,
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
        '@id': 'https://pointzero.com.np/services/mobile-app-development-nepal#webpage',
        url: 'https://pointzero.com.np/services/mobile-app-development-nepal',
        name: 'Mobile App Development Company in Nepal',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/mobile-app-development-nepal#service',
        name: 'Mobile App Development Services',
        serviceType: 'Mobile application development',
        provider: { '@type': 'Organization', name: 'Point Zero', url: 'https://pointzero.com.np/' },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'Mobile app development company in Nepal. iOS and Android apps with Flutter, React Native, Swift and Kotlin — with local payments and analytics built in.',
        offers: {
          '@type': 'Offer',
          price: '2500',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
          url: 'https://pointzero.com.np/services/mobile-app-development-nepal',
          category: 'Mobile app development',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '2500',
            priceCurrency: 'USD',
            unitText: 'starting price for MVP mobile app',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/mobile-app-development-nepal#faq',
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
        title="Mobile App Development Company in Nepal — Flutter, iOS, Android | Point Zero"
        description="Top mobile app development company in Kathmandu, Nepal. iOS & Android with Flutter, React Native, Swift, Kotlin. From USD 2,500. Free quote."
        keywords="mobile app development company Nepal, mobile app developer Kathmandu, Flutter developer Nepal, React Native developer Nepal, iOS developer Nepal, Android developer Nepal, Swift Kotlin Nepal, hire mobile developer Nepal, app development Nepal cost"
        path="/services/mobile-app-development-nepal"
        image="https://pointzero.com.np/og/mobile-development.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Mobile App Development', path: '/services/mobile-app-development-nepal' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-8">
              <PhoneIphoneIcon className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">Mobile App Development · Kathmandu, Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Mobile App Development{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Company in Nepal
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              iOS and Android apps that ship fast and feel native. Built with{' '}
              <strong className="text-white">Flutter</strong>,{' '}
              <strong className="text-white">React Native</strong>,{' '}
              <strong className="text-white">Swift</strong> and{' '}
              <strong className="text-white">Kotlin</strong> — with local payments,
              push, analytics and crash reporting wired in from day one.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 client rating · MVPs from <strong className="text-gray-300">USD 2,500</strong> · Ships in 6–10 weeks
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Get a Free Mobile Quote', 'service_mobile_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Get a Free Mobile Quote
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Mobile Case Studies
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section aria-labelledby="off-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="off-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What we ship on{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">mobile</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Cross-platform or native — we pick the stack for the job, not the trend.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((c) => (
              <AnimateOnScroll
                key={c.title}
                as="article"
                variant="up"
                className="p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-300 rounded-xl mb-4">
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
              The mobile stack we ship in production
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-pink-300 text-xs">{s.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mob-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">Mobile App FAQ</span>
            </div>
            <h2 id="mob-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Mobile development — honest answers
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-pink-500/30 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-pink-400 group-open:rotate-180 transition-transform">▾</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">Available for new mobile projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to ship a mobile app users actually love?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Free discovery call. Scoped estimate in 48 hours. MVPs ship in 6–10 weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Mobile App
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
