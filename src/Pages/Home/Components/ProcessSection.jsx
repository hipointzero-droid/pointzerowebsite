import React from 'react';
import ExploreIcon from '@mui/icons-material/Explore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function ProcessSection() {
  const steps = [
    {
      icon: <ExploreIcon className='w-7 h-7' />,
      title: 'Discover',
      description:
        'We dig into your goals, users and constraints. Out comes a tight brief, scope and success metrics—no fluff.',
      gradient: 'from-cyan-500 to-blue-600',
      tag: '01',
    },
    {
      icon: <DesignServicesIcon className='w-7 h-7' />,
      title: 'Design',
      description:
        'Wireframes, flows and high‑fidelity UI in your brand. We design for conversion and clarity, not award shows.',
      gradient: 'from-purple-500 to-pink-600',
      tag: '02',
    },
    {
      icon: <BuildIcon className='w-7 h-7' />,
      title: 'Build',
      description:
        'Modern React, Flutter, Node and Django stacks. Code reviews, tests, performance budgets—shipped weekly.',
      gradient: 'from-emerald-500 to-teal-600',
      tag: '03',
    },
    {
      icon: <RocketLaunchIcon className='w-7 h-7' />,
      title: 'Launch & Grow',
      description:
        'Smooth deploys, analytics, SEO and iteration. We stay with you after launch to compound results.',
      gradient: 'from-orange-500 to-red-600',
      tag: '04',
    },
  ];

  return (
    <section
      aria-labelledby="process-heading"
      className='relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden'
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimateOnScroll className='text-center mb-16' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <TimelineIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>How We Work</span>
          </div>
          <h2
            id="process-heading"
            className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'
          >
            A simple, predictable{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              4‑step process
            </span>
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed'>
            Every engagement at Pointzero follows the same battle‑tested process—so you always know
            what's next, what we're shipping, and what it'll cost.
          </p>
        </AnimateOnScroll>

        <ol className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0'>
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.title} as="li" variant="scale" delay={index % 4}>
              <article className='group relative h-full bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-3xl p-7 transition-all duration-500 hover:border-white/25 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 shine-wrap'>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true"></div>
                <div className='absolute top-5 right-6 text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500' aria-hidden="true">
                  {step.tag}
                </div>
                <div className='relative z-10'>
                  <div className={`inline-flex p-4 bg-gradient-to-br ${step.gradient} rounded-2xl text-white shadow-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {step.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2'>{step.title}</h3>
                  <p className='text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors'>
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow between steps on desktop */}
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
