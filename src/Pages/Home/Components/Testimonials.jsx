import React, { useEffect } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

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
  // Inject Review JSON-LD scoped to the Organization so individual reviews
  // show up under the company entity (Google requires reviews to belong to
  // a parent itemReviewed). The org-level AggregateRating already lives in
  // index.html — this adds the per-review evidence.
  useEffect(() => {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://pointzero.com.np/#organization',
      name: 'Point Zero',
      url: 'https://pointzero.com.np/',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: String(TESTIMONIALS.length + 26),
        bestRating: '5',
        worstRating: '1',
      },
      review: TESTIMONIALS.map((t) => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(t.rating),
          bestRating: '5',
          worstRating: '1',
        },
        author: { '@type': 'Person', name: t.author },
        reviewBody: t.quote,
        publisher: { '@type': 'Organization', name: 'Point Zero' },
        itemReviewed: {
          '@type': 'Organization',
          '@id': 'https://pointzero.com.np/#organization',
          name: 'Point Zero',
        },
      })),
    };

    let el = document.head.querySelector('script[type="application/ld+json"][data-id="reviews:home"]');
    if (!el) {
      el = document.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute('data-id', 'reviews:home');
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(ld);
    return () => {
      const node = document.head.querySelector('script[type="application/ld+json"][data-id="reviews:home"]');
      if (node) node.remove();
    };
  }, []);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">Rated 5.0 across 32+ engagements</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            What founders and CTOs say after{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              shipping with Point Zero
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Real quotes from real teams who put their roadmap on the line — and shipped.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <AnimateOnScroll
              key={t.author}
              as="article"
              variant="up"
              className="relative p-7 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              <FormatQuoteIcon className="absolute top-5 right-5 w-8 h-8 text-white/10" />
              <div
                className="flex gap-0.5 mb-4"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={String(t.rating)} />
                <meta itemProp="bestRating" content="5" />
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-300 leading-relaxed text-base" itemProp="reviewBody">
                "{t.quote}"
              </blockquote>
              <footer
                className="mt-6 pt-5 border-t border-white/5"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <p className="text-white font-semibold" itemProp="name">
                  {t.author}
                </p>
                <p className="text-sm text-gray-500">
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
