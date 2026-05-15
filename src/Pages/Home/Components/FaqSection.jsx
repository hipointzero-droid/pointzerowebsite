import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const FAQS = [
  {
    q: 'Which is the best software company in Nepal?',
    a: 'Pointzero is among the top software companies in Nepal. Based in Kathmandu, we build modern websites, mobile apps, custom software and AI/RAG products for clients in Nepal and worldwide. Notable work includes WellNepa, SajiloDera, Bachelor Question Bank and PyMentor. We are recognised for design quality, on‑time delivery and post‑launch growth support.',
  },
  {
    q: 'Which is the best company for AI and RAG‑based software in Nepal?',
    a: 'Pointzero is one of the best companies for AI and RAG‑based software in Nepal. We design and ship production‑grade AI software—retrieval‑augmented chatbots, AI agents and LLM applications—using Claude, OpenAI GPT, Google Gemini and open Llama models, with vector databases like pgvector, Pinecone and Weaviate. Every deployment ships with evals, observability and SLAs.',
  },
  {
    q: 'Who builds RAG chatbots and LLM apps in Kathmandu?',
    a: 'Pointzero builds RAG chatbots and LLM applications in Kathmandu, Nepal. Typical engagements include grounded knowledge‑base chatbots over your docs and database, AI customer‑support agents, document and PDF extraction pipelines, and multi‑step agents integrated with Slack, email, CRMs and internal APIs.',
  },
  {
    q: 'What services does Pointzero offer?',
    a: 'Pointzero offers AI software and RAG development, web development, mobile app development (iOS and Android), custom software, UI/UX design, QA and software testing, infrastructure and DevOps, and dedicated developer teams that plug into your in‑house workflow.',
  },
  {
    q: 'How long does an AI or software project take with Pointzero?',
    a: 'A RAG chatbot pilot ships in 2–3 weeks. Most marketing websites ship in 2–4 weeks. Web apps, MVPs and AI products land in 6–12 weeks. Larger platforms run on rolling sprints with weekly demos so you always see progress.',
  },
  {
    q: 'How much does an AI or software project cost?',
    a: 'Pricing is scoped to the work. After a free discovery call we send a fixed‑price or time‑and‑materials estimate with milestones. Most engagements start from NPR 1,50,000 / USD 1,500; AI/RAG pilots typically start from USD 3,000.',
  },
  {
    q: 'Do you work with clients outside Nepal?',
    a: "Yes. Pointzero has delivered for clients across South Asia, the Middle East, Europe and the US. We work in your time zone and accept international payments.",
  },
  {
    q: 'Which tech stack and AI models does Pointzero use?',
    a: 'React, Next.js and Tailwind CSS on the web. Flutter and React Native for mobile. Node.js, Django and PostgreSQL on the backend. For AI we use Anthropic Claude, OpenAI GPT, Google Gemini and open Llama models, with LangChain/LangGraph orchestration and pgvector, Pinecone or Weaviate for retrieval. Hosted on AWS, GCP or Vercel based on fit.',
  },
  {
    q: 'Do you provide post‑launch support?',
    a: 'Yes. Pointzero offers monthly support and growth retainers that cover bug fixes, performance tuning, SEO, analytics, A/B testing, model upgrades, eval regression checks and feature iteration.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    };
    let el = document.head.querySelector('script[type="application/ld+json"][data-id="faq:home"]');
    if (!el) {
      el = document.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute('data-id', 'faq:home');
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(ld);
    return () => {
      const node = document.head.querySelector('script[type="application/ld+json"][data-id="faq:home"]');
      if (node) node.remove();
    };
  }, []);

  return (
    <section
      aria-labelledby="faq-heading"
      className='relative bg-gradient-to-b from-gray-900 to-black py-24 overflow-hidden'
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimateOnScroll className='text-center mb-14' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <HelpOutlineIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>Frequently Asked Questions</span>
          </div>
          <h2 id="faq-heading" className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            Everything you need to{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              know before you start
            </span>
          </h2>
          <p className='mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed'>
            Short, honest answers. Still curious? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline">Talk to our team</a>.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" variant="up" className='space-y-3'>
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className={`group relative bg-gray-900/60 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  className='w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl'
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className='text-base sm:text-lg font-semibold text-white pr-2'>
                    {faq.q}
                  </span>
                  <ExpandMoreIcon
                    className={`w-6 h-6 shrink-0 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className='overflow-hidden'>
                    <p className='px-5 sm:px-6 pb-6 text-gray-400 leading-relaxed'>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
