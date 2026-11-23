import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';

const TESTIMONIALS = [
  {
    quote:
      "Point Zero shipped our RAG chatbot pilot in 17 days. By week three we were running it in production with real users. Their eval discipline is genuinely rare for an agency at this price point.",
    author: 'Anisha Sharma',
    role: 'Head of Product',
    company: 'A B2B SaaS in the US',
    rating: 5,
  },
  {
    quote:
      "We came to Kripas with a vague Lean Canvas and walked out with a working MVP in nine weeks. Auth, billing, admin — all of it. We launched, charged real customers, and raised our seed three months later.",
    author: 'Rajan Maharjan',
    role: 'Founder & CEO',
    company: 'A Kathmandu fintech startup',
    rating: 5,
  },
  {
    quote:
      "Our Sajilodera launch with Point Zero saw a 3x lift in sign-ups versus the legacy site. LCP went from eight seconds to under two. We have not seen another Nepali team this rigorous about performance.",
    author: 'SajiloDera Founding Team',
    role: 'Founders',
    company: 'sajilodera.org',
    rating: 5,
  },
  {
    quote:
      "Most agencies promise AI and ship slideware. Point Zero shipped a production agent with tool use, evals, observability and cost dashboards. Direct Slack with senior engineers throughout.",
    author: 'Daniel Wakefield',
    role: 'CTO',
    company: 'A London-based EdTech',
    rating: 5,
  },
  {
    quote:
      "The mobile app from Point Zero hit 50,000+ downloads in our first six months. Offline support, Devanagari typography, eSewa payments — everything worked on day one. Zero crash spikes after Play Store launch.",
    author: 'Bachelor Question Bank Team',
    role: 'Founders',
    company: 'Education app, Nepal',
    rating: 5,
  },
  {
    quote:
      "We have hired five development partners over four years. Point Zero is the first one that ships on the date they quoted and writes tests we can actually read.",
    author: 'Maya Tuladhar',
    role: 'VP Engineering',
    company: 'A healthcare platform in the UAE',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative border-t border-white/10 bg-black py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" className="text-center mb-14 max-w-3xl mx-auto">
          <Badge className="mb-6 px-3.5 py-1.5">
            <StarIcon className="w-4 h-4 text-brand" />
            Client feedback
          </Badge>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            What founders and CTOs say after{' '}
            <span className="text-brand">shipping with Point Zero</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Real quotes from real teams who put their roadmap on the line — and shipped.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <AnimateOnScroll
              key={t.author}
              as="article"
              variant="up"
              className="relative p-7 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <FormatQuoteIcon className="absolute top-5 right-5 w-8 h-8 text-white/10" />
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-brand" />
                ))}
              </div>
              <blockquote className="text-neutral-300 leading-relaxed text-base">
                "{t.quote}"
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white font-semibold">{t.author}</p>
                <p className="text-sm text-neutral-500">
                  {t.role} · {t.company}
                </p>
              </footer>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}