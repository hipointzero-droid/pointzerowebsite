import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import HubIcon from '@mui/icons-material/Hub';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DescriptionIcon from '@mui/icons-material/Description';
import InsightsIcon from '@mui/icons-material/Insights';
import VerifiedIcon from '@mui/icons-material/Verified';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const CAPABILITIES = [
  {
    icon: <SearchIcon className="w-7 h-7" />,
    title: 'RAG Chatbots & Knowledge Assistants',
    desc: 'Production-grade retrieval-augmented chatbots over your docs, websites and databases. Hybrid search, re-ranking, evals and grounded citations.',
  },
  {
    icon: <SmartToyIcon className="w-7 h-7" />,
    title: 'AI Agents & Multi-Step Workflows',
    desc: 'Autonomous and human-in-the-loop agents that plan, call tools and integrate with Slack, email, CRMs and internal APIs.',
  },
  {
    icon: <DescriptionIcon className="w-7 h-7" />,
    title: 'Document & PDF Extraction',
    desc: 'Structured extraction pipelines for invoices, KYC docs, contracts and reports — with confidence scores and fallback review.',
  },
  {
    icon: <HubIcon className="w-7 h-7" />,
    title: 'LLM Integrations',
    desc: 'Claude (Anthropic), GPT (OpenAI), Gemini (Google) and open Llama models. Multi-model routing, caching and cost controls.',
  },
  {
    icon: <InsightsIcon className="w-7 h-7" />,
    title: 'Evals, Observability & SLAs',
    desc: 'Offline + online evals, regression checks, model-drift detection and Langfuse/Phoenix observability — so quality stays high.',
  },
  {
    icon: <BoltIcon className="w-7 h-7" />,
    title: 'Fine-Tuning & Prompt Libraries',
    desc: 'LoRA fine-tuning, prompt versioning and golden-set evals so your model gets better every release — not worse.',
  },
];

const STACK = [
  { name: 'Anthropic Claude', tag: 'LLM' },
  { name: 'OpenAI GPT', tag: 'LLM' },
  { name: 'Google Gemini', tag: 'LLM' },
  { name: 'Llama 3', tag: 'Open LLM' },
  { name: 'LangChain', tag: 'Orchestration' },
  { name: 'LangGraph', tag: 'Agents' },
  { name: 'Vercel AI SDK', tag: 'SDK' },
  { name: 'pgvector', tag: 'Vector DB' },
  { name: 'Pinecone', tag: 'Vector DB' },
  { name: 'Weaviate', tag: 'Vector DB' },
  { name: 'Qdrant', tag: 'Vector DB' },
  { name: 'Langfuse', tag: 'Observability' },
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    desc: 'Free 30-minute call. We map your use case, success metrics and constraints, and return a fixed-price or T&M scope within 48 hours.',
  },
  {
    step: '02',
    title: 'Data & Retrieval Design',
    desc: 'Source ingestion, chunking strategy, embedding model selection, vector DB choice and hybrid-search tuning.',
  },
  {
    step: '03',
    title: 'Build & Eval',
    desc: 'Iterative sprints with weekly demos. Every prompt change is gated by a golden eval set so regressions never reach production.',
  },
  {
    step: '04',
    title: 'Ship to Production',
    desc: 'Cloud deploy (AWS/GCP/Vercel), observability, caching, cost dashboards and rate-limit handling baked in from day one.',
  },
  {
    step: '05',
    title: 'Iterate & Grow',
    desc: 'Monthly retainer: model upgrades, eval regression, prompt tuning, new features and cost optimisation.',
  },
];

const FAQS = [
  {
    q: 'Which is the best AI development company in Nepal?',
    a: 'Point Zero is among the top AI development companies in Nepal. We design and ship production-grade RAG chatbots, AI agents and LLM applications for clients in Nepal and worldwide — with evals, observability and SLAs from day one.',
  },
  {
    q: 'How long does it take to build a RAG chatbot or AI agent?',
    a: 'A RAG chatbot pilot ships in 2–3 weeks. A production agent with evals and observability lands in 6–10 weeks. We work in weekly sprints with demos, so you see progress every Friday.',
  },
  {
    q: 'How much does AI software development cost?',
    a: 'RAG pilots typically start at USD 3,000. Production AI products range USD 8,000–40,000 depending on data sources, eval coverage and integrations. We send a fixed-price or T&M estimate after a free discovery call.',
  },
  {
    q: 'Which LLM does Point Zero recommend — Claude, GPT or Gemini?',
    a: 'It depends. Claude is our default for long-context reasoning and grounded generation. GPT-4o excels at tool use and structured output. Gemini wins on cost-per-token at scale. We benchmark all three against your evals before locking in a model.',
  },
  {
    q: 'Do you handle data privacy and compliance?',
    a: 'Yes. We default to private deployments (no model training on your data), enforce PII redaction in the retrieval layer, and can deploy fully self-hosted on your VPC using open Llama models when required.',
  },
  {
    q: 'Can you fine-tune a model on our data?',
    a: 'Yes. We do LoRA fine-tuning for domain-specific tasks where RAG alone is not enough — typically for tone matching, structured extraction and proprietary jargon. We always start with RAG and benchmark before recommending fine-tuning.',
  },
];

export default function AiDevelopment() {
  const navigate = useNavigate();

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/ai-development-nepal#howto',
    name: 'How Point Zero ships AI products in Nepal',
    description:
      'The Point Zero five-step process for shipping production-grade AI products: discovery, retrieval design, build with evals, production deploy, then iterate.',
    totalTime: 'P56D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '3000',
    },
    supply: PROCESS.map((p) => ({ '@type': 'HowToSupply', name: p.title })),
    tool: STACK.map((t) => ({ '@type': 'HowToTool', name: t.name })),
    step: PROCESS.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.desc,
      url: `https://pointzero.com.np/services/ai-development-nepal#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#cap-heading', '#process-heading', '#why-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/ai-development-nepal#webpage',
        url: 'https://pointzero.com.np/services/ai-development-nepal',
        name: 'AI Development Company in Nepal',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/ai-development-nepal#service',
        name: 'AI Development Services',
        serviceType: 'Artificial Intelligence software development',
        provider: {
          '@type': 'Organization',
          name: 'Point Zero',
          url: 'https://pointzero.com.np/',
        },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'Production-grade AI development in Nepal: RAG chatbots, AI agents, LLM integrations (Claude, GPT, Gemini, Llama), vector search, fine-tuning and evals.',
        offers: {
          '@type': 'Offer',
          price: '3000',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
          url: 'https://pointzero.com.np/services/ai-development-nepal',
          category: 'AI development',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '3000',
            priceCurrency: 'USD',
            unitText: 'starting price for AI pilot',
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI capabilities',
          itemListElement: CAPABILITIES.map((c) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: c.title, description: c.desc },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/ai-development-nepal#faq',
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
        title="AI Development Company in Nepal — RAG, Agents & LLMs | Point Zero"
        description="Hire Point Zero — the top AI development company in Nepal. We ship RAG chatbots, AI agents and LLM apps with Claude, GPT, Gemini & Llama. Free discovery call."
        keywords="AI development company Nepal, AI software development Nepal, RAG development Nepal, LLM development Nepal, AI agents Nepal, Claude developer Nepal, OpenAI integration Nepal, Gemini integration Nepal, vector database Nepal, pgvector Pinecone, hire AI engineer Nepal"
        path="/services/ai-development-nepal"
        image="https://pointzero.com.np/og/ai-development.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'AI Development', path: '/services/ai-development-nepal' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
              <AutoAwesomeIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">AI Development · Kathmandu, Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              AI Development Company in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Nepal
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Point Zero builds production-grade AI software — RAG chatbots, AI agents
              and LLM applications — for startups and enterprises in Nepal, the US, UK
              and Middle East. We work with{' '}
              <strong className="text-white">Claude</strong>,{' '}
              <strong className="text-white">GPT</strong>,{' '}
              <strong className="text-white">Gemini</strong> and open{' '}
              <strong className="text-white">Llama</strong> models, with vector search,
              evals and observability shipped from day one.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 client rating · RAG pilots from <strong className="text-gray-300">USD 3,000</strong> · Reply within 1 business day
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Book a Free AI Discovery Call', 'service_ai_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
                aria-label="Book a free AI discovery call"
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Free AI Discovery Call
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/project')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                See AI Case Studies
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="cap-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="cap-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What we build with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Real production systems — not demos. Every engagement ships with evals,
              observability and a runbook for when things break.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
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

      {/* Stack */}
      <section aria-labelledby="stack-heading" className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="stack-heading" className="text-3xl sm:text-4xl font-bold text-white">
              The AI stack we ship in production
            </h2>
            <p className="mt-4 text-gray-400">
              Best-in-class models, orchestration, vector databases and observability —
              chosen per use case, not per fashion.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
              >
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-cyan-400 text-xs">{s.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="relative bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              How we ship AI products in Nepal
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Weekly demos, eval-gated releases, fixed-price discovery. No surprises.
            </p>
          </AnimateOnScroll>

          <ol className="space-y-6 max-w-4xl mx-auto">
            {PROCESS.map((p) => (
              <AnimateOnScroll
                key={p.step}
                as="li"
                variant="up"
                className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all"
              >
                <div className="shrink-0 text-3xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Point Zero */}
      <section aria-labelledby="why-heading" className="relative bg-black py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-white text-center">
              Why teams pick Point Zero for AI in Nepal
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Production-grade evals — not "vibe checks". Every release is gated by a golden-set regression run.',
              'Multi-model routing — Claude for reasoning, GPT for tools, Gemini for cost. We benchmark all three.',
              'Cost dashboards from day one — caching, batching, and prompt compression to keep token spend predictable.',
              'Privacy-first defaults — PII redaction, private deployments, self-hosted Llama on your VPC if required.',
              'Local team, global standards — Kathmandu HQ, US/UK/EU clients, English-first comms in your time zone.',
              'Honest scoping — fixed-price or T&M with milestones, weekly demos, no scope-creep surprises.',
            ].map((point) => (
              <div key={point} className="flex gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-cyan-400 shrink-0" />
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="ai-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">AI Development FAQ</span>
            </div>
            <h2 id="ai-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              AI development — answered honestly
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-cyan-500/30 transition-all"
              >
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

      {/* Final CTA */}
      <section className="relative bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Available for new AI projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to ship your AI product?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Free discovery call. Scoped estimate within 48 hours. RAG pilots in 2–3 weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your AI Project
                  <RocketLaunchIcon className="w-5 h-5" />
                </span>
              </button>
              <a
                href="mailto:hi.pointzero@gmail.com"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
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
