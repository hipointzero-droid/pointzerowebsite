import React from 'react';
import image from "../../../assets/2.png";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function InnovateSection() {
  return (
    <section className='relative bg-gradient-to-b from-gray-900 to-black py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          {/* Left Content */}
          <AnimateOnScroll className='lg:w-1/2' as="div" variant="left">
            {/* Section Tag */}
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
              <AutoAwesomeIcon className='w-4 h-4 text-cyan-400' />
              <span className='text-sm font-medium text-cyan-400'>About Point Zero</span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              The AI &amp; Software Engineering Partner for{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                Ambitious Teams
              </span>
            </h2>

            <p className='mt-6 text-gray-400 text-lg leading-relaxed'>
              Point Zero is a Kathmandu-based digital product studio that ships
              production-grade AI, web and mobile software for startups and enterprises
              in Nepal, the US, UK and the UAE. We move fast — RAG pilots in 2–3 weeks,
              marketing sites in 2–4, MVPs in 8–10 — without trading away rigour.
            </p>

            <p className='mt-4 text-gray-400 text-lg leading-relaxed'>
              Senior engineers on the build, fixed-price discovery, weekly demos, and
              evals or analytics tied to every release. The code lives in your GitHub
              from day one, with a runbook your team can actually use.
            </p>

            {/* Feature Points — outcomes, not slogans */}
            <div className='mt-8 space-y-4'>
              {[
                { icon: <RocketLaunchIcon className='w-5 h-5' />, text: 'Ship in weeks — RAG pilot in 14 days, MVP in 8–10 weeks' },
                { icon: <TrendingUpIcon className='w-5 h-5' />, text: 'Sub-2-second LCP and 95+ Lighthouse on every web launch' },
                { icon: <AutoAwesomeIcon className='w-5 h-5' />, text: 'Eval-gated AI releases — no "vibe-check" deploys to production' },
              ].map((item, index) => (
                <div key={index} className='flex items-center gap-4 group'>
                  <div className='p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 transition-all duration-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30'>
                    {item.icon}
                  </div>
                  <span className='text-gray-300 font-medium'>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className='mt-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black'>
              Learn More About Us
            </button>
          </AnimateOnScroll>

          {/* Right Content - Image */}
          <AnimateOnScroll className='lg:w-1/2 relative' delay={1} as="div" variant="right">
            {/* Decorative Frame */}
            <div className='relative'>
              {/* Gradient Border */}
              <div className='absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 blur-lg'></div>

              {/* Image Container */}
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl border border-white/10 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/5'>
                <img
                  src={image}
                  alt="Digital Innovation"
                  className='w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-[1.02]'
                />

                {/* Floating Card */}
                <div className='absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl'>
                  <div className='flex items-center gap-3'>
                    <div className='p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl'>
                      <RocketLaunchIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <p className='text-white font-semibold'>Innovation First</p>
                      <p className='text-gray-400 text-sm'>Driving digital transformation</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className='absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                  Since 2019
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
