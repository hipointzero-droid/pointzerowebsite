import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { trackCTAClick } from '../../../lib/analytics';

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Modern websites and web applications—bringing your online presence to life with sleek design and seamless functionality.',
    path: '/services/web-development-nepal',
  },
  {
    title: 'App Development',
    description:
      'Transforming ideas into intuitive mobile experiences that captivate and engage users across all platforms.',
    path: '/services/mobile-app-development-nepal',
  },
  {
    title: 'Software Development',
    description:
      'Building robust, scalable software solutions tailored to your unique business needs and goals.',
    path: '/services/mvp-development',
  },
  {
    title: 'Software Testing & QA',
    description:
      'Guaranteeing perfection in every line of code, ensuring your software runs flawlessly every time.',
    path: '/services',
  },
  {
    title: 'Infrastructure & DevOps',
    description:
      'Architecting resilient infrastructure and implementing DevOps practices for unmatched efficiency.',
    path: '/services/devops-cloud-nepal',
  },
  {
    title: 'Hire Dedicated Developers',
    description:
      'Expand your team with seasoned professionals dedicated to bringing your projects to fruition.',
    path: '/services/ai-development-nepal',
  },
];

export default function Features() {
  const navigate = useNavigate();

  const go = (path, label) => {
    trackCTAClick(label, 'what_we_offer');
    navigate(path);
  };

  return (
    <section
      aria-labelledby="services-overview-heading"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <AnimateOnScroll className="max-w-3xl" as="div">
          <Badge className="mb-6 px-3.5 py-1.5">What We Offer</Badge>
          <h2
            id="services-overview-heading"
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.65rem]"
          >
            What we build for{' '}
            <span className="text-brand">you</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-neutral-400 sm:text-lg">
            End‑to‑end digital product capability—web, mobile, software, QA,
            infrastructure and dedicated teams—under one roof, accountable to
            your roadmap.
          </p>
        </AnimateOnScroll>

        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10" aria-label="Services we offer">
          {SERVICES.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index % 6} as="li" variant="up">
              <button
                type="button"
                onClick={() => go(service.path, service.title)}
                className="group grid w-full grid-cols-1 gap-3 py-7 text-left transition-colors sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8 sm:py-8"
                aria-label={`${service.title} — Learn more`}
              >
                <span className="font-mono text-xs tracking-widest text-neutral-600 transition-colors group-hover:text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="min-w-0">
                  <span className="block text-lg font-medium tracking-tight text-white transition-colors group-hover:text-brand sm:text-xl">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-neutral-400 sm:text-base">
                    {service.description}
                  </span>
                </span>

                <span className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-neutral-500 transition-colors group-hover:text-white sm:justify-self-end">
                  Learn More
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </AnimateOnScroll>
          ))}
        </ul>

        <AnimateOnScroll className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between" delay={2} as="div">
          <p className="text-base text-neutral-400">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <Button
            type="button"
            size="lg"
            onClick={() => go('/contact', 'Discuss Your Project')}
            aria-label="Discuss your project with Point Zero"
          >
            Discuss Your Project
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
