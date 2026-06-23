import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsightsIcon from '@mui/icons-material/Insights';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const STEPS = [
  {
    icon: <DescriptionIcon className="w-6 h-6" />,
    title: '1. Ingest your sources',
    desc: 'Docs (PDF, DOCX, HTML), websites, Notion, Confluence, Google Drive, internal DBs and APIs — with smart chunking and metadata.',
  },
  {
    icon: <StorageIcon className="w-6 h-6" />,
    title: '2. Embed & index',
    desc: 'Best-fit embedding model (OpenAI, Voyage, Cohere or open) into pgvector, Pinecone, Weaviate or Qdrant. Hybrid sparse + dense retrieval.',
  },
  {
    icon: <SearchIcon className="w-6 h-6" />,
    title: '3. Retrieve & re-rank',
    desc: 'BM25 + vector hybrid search, cross-encoder re-ranking and query rewriting so the model sees the most relevant chunks first.',
  },
  {
    icon: <TuneIcon className="w-6 h-6" />,
    title: '4. Generate with grounding',
    desc: 'Claude, GPT-4o or Gemini with strict grounding prompts, inline citations, and refusal behaviour when the context is insufficient.',
  },
  {
    icon: <InsightsIcon className="w-6 h-6" />,
    title: '5. Eval & monitor',
    desc: 'Golden-set evals on every release, online observability (Langfuse), hallucination tracking and cost dashboards.',
  },
];

const USE_CASES = [
  'AI customer support chatbots over your help center',
  'Internal knowledge-base assistants for support, sales and ops',
  'Document Q&A for legal, finance and healthcare teams',
  'AI-powered search over product catalogs and KB articles',
  'Onboarding copilots for new employees',
  'Compliance and policy chatbots with audit trails',
];

const FAQS = [
  {
    q: 'What is RAG (retrieval-augmented generation)?',
    a: 'RAG is a pattern where an LLM is given relevant context retrieved from your own data (docs, DB, APIs) before generating a response. It dramatically reduces hallucinations and makes the model answer from your source of truth instead of its training data.',
  },
  {
    q: 'RAG vs fine-tuning — which should I use?',
    a: 'Start with RAG. Fine-tuning is best for tone, structured output or proprietary jargon when prompts alone are not enough. For most knowledge use cases, RAG is faster to ship, cheaper to maintain and easier to update — you just re-index when content changes.',
  },
  {
    q: 'How much does a RAG chatbot cost to build?',
    a: 'A RAG pilot at Point Zero starts at USD 3,000 and ships in 2–3 weeks. Production deployments with evals, observability, multi-tenant auth and admin tooling range USD 8,000–25,000 depending on data volume and integrations.',
  },
  {
    q: 'Which vector database should I choose?',
    a: 'For most teams under 5M chunks we recommend pgvector — it lives inside Postgres so you avoid a new piece of infrastructure. For high-traffic SaaS we use Pinecone for managed scale. Weaviate and Qdrant when you need on-prem or hybrid sparse retrieval.',
  },
  {
    q: 'How do you handle hallucinations?',
    a: 'Three layers: (1) strict grounding prompts that force citations from retrieved context, (2) refusal behaviour when no relevant chunks are returned, (3) automated hallucination evals on a golden set so regressions are caught before deploy.',
  },
  {
    q: 'Can the chatbot answer in Nepali?',
    a: 'Yes. Claude and GPT-4o both handle Nepali fluently. For Devanagari-heavy corpora we recommend Voyage-3 embeddings, and we can add a language router so the model responds in the user input language.',
  },
];

export default function RagDevelopment() {
  const navigate = useNavigate();

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/rag-chatbot-development#howto',
    name: 'How a Point Zero RAG chatbot is built',
    description:
      'The five-stage pipeline Point Zero uses to ship production RAG chatbots: ingest, embed and index, retrieve and re-rank, generate with grounding, then evaluate and monitor.',
    totalTime: 'P21D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '3000',
    },
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
      url: `https://pointzero.com.np/services/rag-chatbot-development#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#how-heading', '#uc-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/rag-chatbot-development#webpage',
        url: 'https://pointzero.com.np/services/rag-chatbot-development',
        name: 'RAG Chatbot Development',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/rag-chatbot-development#service',
        name: 'RAG Chatbot Development',
        serviceType: 'Retrieval-augmented generation development',
        provider: {
          '@type': 'Organization',
          name: 'Point Zero',
          url: 'https://pointzero.com.np/',
        },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'RAG chatbot development with Claude, GPT, Gemini and Llama. Hybrid retrieval, re-ranking, evals and grounded citations.',
        offers: {
          '@type': 'Offer',
          price: '3000',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
          url: 'https://pointzero.com.np/services/rag-chatbot-development',
          category: 'RAG chatbot development',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '3000',
            priceCurrency: 'USD',
            unitText: 'starting price for RAG chatbot pilot',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/rag-chatbot-development#faq',
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
        title="RAG Chatbot Development — Claude, GPT, Gemini | Point Zero"
        description="Production RAG chatbot development by Point Zero. Hybrid retrieval, re-ranking, evals and grounded citations. Pilot in 2–3 weeks from USD 3,000."
        keywords="RAG chatbot development, RAG development Nepal, retrieval augmented generation, Claude RAG, GPT RAG, Gemini RAG, pgvector chatbot, Pinecone chatbot, AI knowledge base chatbot, LLM chatbot Nepal"
        path="/services/rag-chatbot-development"
        image="https://pointzero.com.np/og/rag-chatbot.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'RAG Chatbot Development', path: '/services/rag-chatbot-development' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
              <ChatBubbleOutlineIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">RAG Chatbot Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              RAG Chatbot{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Development
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Point Zero builds grounded RAG chatbots that answer from{' '}
              <strong className="text-white">your</strong> docs, websites and databases —
              not the open internet. Hybrid retrieval, re-ranking, inline citations,
              hallucination evals and full observability.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Pilot in 2–3 weeks · From <strong className="text-gray-300">USD 3,000</strong> · Production deploy in 6–10 weeks
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Start a RAG Pilot', 'service_rag_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start a RAG Pilot
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/services/ai-development-nepal')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See Full AI Services
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How RAG works at Point Zero */}
      <section aria-labelledby="how-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="how-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              How a Point Zero RAG chatbot works
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Every layer is intentional. No black boxes, no demo-grade hacks.
            </p>
          </AnimateOnScroll>

          <ol className="space-y-4 max-w-3xl mx-auto">
            {STEPS.map((s) => (
              <AnimateOnScroll
                key={s.title}
                as="li"
                variant="up"
                className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all"
              >
                <div className="shrink-0 p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-xl h-fit">
                  {s.icon}
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

      {/* Use cases */}
      <section aria-labelledby="uc-heading" className="relative bg-black py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="uc-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Where RAG actually wins
            </h2>
            <p className="mt-4 text-gray-400">
              Real use cases we have shipped — not slideware.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {USE_CASES.map((u) => (
              <div key={u} className="flex gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-purple-400 shrink-0" />
                <p className="text-gray-300 leading-relaxed">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="rag-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">RAG FAQ</span>
            </div>
            <h2 id="rag-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              RAG, explained without jargon
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-purple-500/30 transition-all"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▾</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Available for new RAG projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to ground your AI in your own data?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Free discovery call. Scoped estimate within 48 hours. Pilot in 2–3 weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your RAG Pilot
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
