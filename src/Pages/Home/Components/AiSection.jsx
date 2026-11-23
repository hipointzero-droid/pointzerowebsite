import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HubIcon from '@mui/icons-material/Hub';
import TuneIcon from '@mui/icons-material/Tune';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { HoverEffect } from '../../../components/aceternity/HoverEffect';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

export default function AiSection() {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: <ChatBubbleOutlineIcon className="h-6 w-6" />,
      title: 'RAG chatbots & assistants',
      description:
        'Retrieval‑augmented chat over your docs, websites and databases—grounded answers with citations, no hallucinations.',
    },
    {
      icon: <SmartToyIcon className="h-6 w-6" />,
      title: 'AI agents & automations',
      description:
        'Multi‑step agents that book, research, write and operate tools—integrated with Slack, email, CRMs and your APIs.',
    },
    {
      icon: <StorageIcon className="h-6 w-6" />,
      title: 'Vector search & embeddings',
      description:
        'pgvector, Pinecone, Weaviate or Qdrant—chunking, embedding and hybrid search tuned to your domain.',
    },
    {
      icon: <DocumentScannerIcon className="h-6 w-6" />,
      title: 'Document & data extraction',
      description:
        'Parse PDFs, invoices, contracts and forms into clean structured JSON—OCR, layout models and LLM extraction.',
    },
    {
      icon: <TuneIcon className="h-6 w-6" />,
      title: 'Fine‑tuning & evals',
      description:
        'Domain‑specific fine‑tunes, prompt libraries, and rigorous offline evals so quality goes up release after release.',
    },
    {
      icon: <HubIcon className="h-6 w-6" />,
      title: 'LLM integrations',
      description:
        'Claude, GPT, Gemini, Llama and open models—routed, cached and observable behind a single, swappable interface.',
    },
  ];

  return (
    <section
      aria-labelledby="ai-heading"
      id="ai-rag"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-black py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center" as="div">
          <Badge className="mb-6 px-3.5 py-1.5">AI Software · RAG · LLM Apps</Badge>
          <h2
            id="ai-heading"
            className="text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl"
          >
            Nepal&apos;s go‑to studio for{' '}
            <span className="text-brand">AI &amp; RAG software</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-neutral-400">
            We design and ship production‑grade AI products—retrieval‑augmented chatbots, agents,
            and LLM‑powered workflows—built on Claude, GPT, Gemini and open models, with rigorous
            evals and observability so they keep getting better in production.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" variant="up">
          <HoverEffect items={capabilities} />
        </AnimateOnScroll>

        <AnimateOnScroll as="div" variant="up" className="mt-12">
          <div className="relative flex flex-col items-center justify-between gap-6 border border-white/10 bg-white/[0.02] p-8 lg:flex-row lg:p-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Building an AI product? Start with Point Zero.
              </h3>
              <p className="mt-2 max-w-2xl text-neutral-400">
                We help startups and enterprises in Nepal and worldwide ship reliable AI software—
                from a 2‑week RAG pilot to a full production rollout with evals, monitoring and SLAs.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-400">
                {['Claude', 'OpenAI', 'Gemini', 'Llama', 'pgvector', 'Pinecone', 'LangGraph', 'Vercel AI'].map((t) => (
                  <li key={t} className="border border-white/10 bg-white/[0.03] px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              type="button"
              size="lg"
              className="shrink-0"
              onClick={() => navigate('/contact')}
              aria-label="Get an AI scoping call with Point Zero"
            >
              Get an AI scoping call
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
