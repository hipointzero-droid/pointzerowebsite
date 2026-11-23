import React from 'react';
import ExploreIcon from '@mui/icons-material/Explore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';

export default function ProcessSection() {
  const steps = [
    {
      icon: <ExploreIcon className='w-7 h-7' />,
      title: 'Discover',
      description:
        'We dig into your goals, users and constraints. Out comes a tight brief, scope and success metrics—no fluff.',
      tag: '01',
    },
    {
      icon: <DesignServicesIcon className='w-7 h-7' />,
      title: 'Design',
      description:
        'Wireframes, flows and high‑fidelity UI in your brand. We design for conversion and clarity, not award shows.',
      tag: '02',
    },
    {
      icon: <BuildIcon className='w-7 h-7' />,
      title: 'Build',
      description:
        'Modern React, Flutter, Node and Django stacks. Code reviews, tests, performance budgets—shipped weekly.',
      tag: '03',
    },
    {
      icon: <RocketLaunchIcon className='w-7 h-7' />,
      title: 'Launch & Grow',
      description:
        'Smooth deploys, analytics, SEO and iteration. We stay with you after launch to compound results.',
      tag: '04',
    },
  ];

  return (
    <section
      aria-labelledby="process-heading"
      className='relative border-t border-white/10 bg-black py-24 overflow-hidden'
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimateOnScroll className='text-center mb-16' as="div">
          <Badge className='mb-6 px-3.5 py-1.5'>
            <TimelineIcon className='w-4 h-4 text-brand' />
            How We Work
          </Badge>
          <h2
            id="process-heading"
            className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'
          >
            A simple, predictable{' '}
            <span className='text-brand'>4‑step process</span>
          </h2>
          <p className='mt-4 text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed'>
            Every engagement at Point Zero follows the same battle‑tested process—so you always know
            what's next, what we're shipping, and what it'll cost.
          </p>
        </AnimateOnScroll>

        <ol className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0'>
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.title} as="li" variant="scale" delay={index % 4}>
              <article className='group relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-7 transition-all duration-500 hover:border-white/20 hover:-translate-y-1'>
                <div className='absolute top-5 right-6 text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500' aria-hidden="true">
                  {step.tag}
                </div>
                <div className='relative z-10'>
                  <div className='inline-flex p-4 bg-white/[0.04] ring-1 ring-white/10 rounded-2xl text-brand mb-5 transition-transform duration-500 group-hover:scale-105'>
                    {step.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2'>{step.title}</h3>
                  <p className='text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors'>
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-3 z-20 -translate-y-1/2' aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/20">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </article>
            </AnimateOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}