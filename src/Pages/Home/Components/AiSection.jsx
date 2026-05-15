import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HubIcon from '@mui/icons-material/Hub';
import TuneIcon from '@mui/icons-material/Tune';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function AiSection() {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: <ChatBubbleOutlineIcon className='w-7 h-7' />,
      title: 'RAG chatbots & assistants',
      description:
        'Retrieval‑augmented chat over your docs, websites and databases—grounded answers with citations, no hallucinations.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <SmartToyIcon className='w-7 h-7' />,
      title: 'AI agents & automations',
      description:
        'Multi‑step agents that book, research, write and operate tools—integrated with Slack, email, CRMs and your APIs.',
      gradient: 'from-purple-500 to-fuchsia-600',
    },
    {
      icon: <StorageIcon className='w-7 h-7' />,
      title: 'Vector search & embeddings',
      description:
        'pgvector, Pinecone, Weaviate or Qdrant—chunking, embedding and hybrid search tuned to your domain.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <DocumentScannerIcon className='w-7 h-7' />,
      title: 'Document & data extraction',
      description:
        'Parse PDFs, invoices, contracts and forms into clean structured JSON—OCR, layout models and LLM extraction.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: <TuneIcon className='w-7 h-7' />,
      title: 'Fine‑tuning & evals',
      description:
        'Domain‑specific fine‑tunes, prompt libraries, and rigorous offline evals so quality goes up release after release.',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      icon: <HubIcon className='w-7 h-7' />,
      title: 'LLM integrations',
      description:
        'Claude, GPT, Gemini, Llama and open models—routed, cached and observable behind a single, swappable interface.',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section
      aria-labelledby="ai-heading"
      id="ai-rag"
      className='relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden scroll-mt-24'
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimateOnScroll className='text-center mb-16' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <AutoAwesomeIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>AI Software · RAG · LLM Apps</span>
          </div>
          <h2 id="ai-heading" className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            Nepal's go‑to studio for{' '}
            <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              AI & RAG software
            </span>
          </h2>
          <p className='mt-5 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed'>
            We design and ship production‑grade AI products—retrieval‑augmented chatbots, agents,
            and LLM‑powered workflows—built on Claude, GPT, Gemini and open models, with rigorous
            evals and observability so they keep getting better in production.
          </p>
        </AnimateOnScroll>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {capabilities.map((c, index) => (
            <AnimateOnScroll key={c.title} as="article" variant="scale" delay={index % 6}>
              <div className='group relative h-full bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-3xl p-7 transition-all duration-500 hover:border-white/25 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 shine-wrap'>
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true"></div>
                <div className='relative z-10'>
                  <div className={`inline-flex p-4 bg-gradient-to-br ${c.gradient} rounded-2xl text-white shadow-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {c.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2'>{c.title}</h3>
                  <p className='text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors'>
                    {c.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll as="div" variant="up" className='mt-12'>
          <div className='relative p-8 lg:p-10 bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 shine-wrap'>
            <div>
              <h3 className='text-2xl font-bold text-white'>Building an AI product? Start with Pointzero.</h3>
              <p className='mt-2 text-gray-400 max-w-2xl'>
                We help startups and enterprises in Nepal and worldwide ship reliable AI software—
                from a 2‑week RAG pilot to a full production rollout with evals, monitoring and SLAs.
              </p>
              <ul className='mt-4 flex flex-wrap gap-2 text-xs text-gray-300'>
                {['Claude', 'OpenAI', 'Gemini', 'Llama', 'pgvector', 'Pinecone', 'LangGraph', 'Vercel AI'].map((t) => (
                  <li key={t} className='px-3 py-1 bg-white/5 border border-white/10 rounded-full'>{t}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className='shrink-0 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300'
            >
              Get an AI scoping call
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
