import React, { Suspense } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import StarsCanvas from '../../../components/StarsLazy';
import CodeAnimation from '../../../components/CodeAnimation';
import { trackCTAClick } from '../../../lib/analytics';

export default function TopSection() {
  const navigate = useNavigate();

  return (
    <section aria-labelledby="hero-heading" className='relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>
      {/* Three.js Stars Background */}
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

          {/* Left Content */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            {/* Badge */}
            <div className='hero-line inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8'>
              <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse' aria-hidden="true"></span>
              <span className='text-sm text-gray-300'>Top AI &amp; Software Engineering Partner · Kathmandu, Nepal</span>
            </div>

            {/* Main Heading - keyword-loaded, conversion-focused */}
            <h1 id="hero-heading" className='hero-line text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>
              AI, Web &amp; Mobile{' '}
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                Software Development
              </span>{' '}
              Company in Nepal
            </h1>

            {/* Description — outcome-led, keyword-rich */}
            <p className='hero-line mt-8 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed' style={{ animationDelay: '1s' }}>
              Point Zero is the AI &amp; software engineering partner for ambitious teams.
              We ship <strong className="text-gray-200 font-semibold">RAG chatbots</strong>,
              <strong className="text-gray-200 font-semibold"> AI agents</strong>,
              <strong className="text-gray-200 font-semibold"> web apps</strong> and
              <strong className="text-gray-200 font-semibold"> mobile apps</strong> — production-grade,
              eval-tested, and built to convert.
            </p>

            {/* Trust microcopy */}
            <p className='hero-line mt-4 text-sm text-gray-500 max-w-xl mx-auto lg:mx-0' style={{ animationDelay: '1.05s' }}>
              ⭐ 5.0 client rating · 50+ projects shipped · Reply within 1 business day
            </p>

            {/* CTA Buttons */}
            <div className='hero-line mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start' style={{ animationDelay: '1.15s' }}>
              <button
                onClick={() => {
                  trackCTAClick('Book a Free Discovery Call', 'home_hero');
                  navigate('/contact');
                }}
                className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
                aria-label="Book a free discovery call with Point Zero"
              >
                <span className='flex items-center justify-center gap-2'>
                  Book a Free Discovery Call
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => navigate("/project")}
                className='px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
                aria-label="See Point Zero case studies"
              >
                See Case Studies
              </button>
            </div>

            {/* Social Links */}
            <div className='hero-line mt-12 flex items-center gap-6 justify-center lg:justify-start' style={{ animationDelay: '1.3s' }}>
              <span className='text-sm text-gray-500 uppercase tracking-wider'>Follow Us</span>
              <div className='w-12 h-px bg-gradient-to-r from-gray-500 to-transparent' aria-hidden="true"></div>
              <ul className='flex gap-3 list-none p-0 m-0'>
                {[
                  { icon: <FacebookIcon className='w-5 h-5' />, href: 'https://www.facebook.com/pointzero.com.np/', label: 'Facebook' },
                  { icon: <InstagramIcon className='w-5 h-5' />, href: 'https://www.instagram.com/pointzero.com.np/', label: 'Instagram' },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pointzero on ${social.label}`}
                      className='p-2.5 text-gray-400 bg-white/5 rounded-lg transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 inline-flex'
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Code Animation */}
          <div className='lg:w-1/2 w-full hidden md:block'>
            <CodeAnimation />
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '15+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={index} className='hero-line text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10' style={{ animationDelay: `${1.4 + index * 0.08}s` }}>
              <div className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                {stat.number}
              </div>
              <div className='mt-2 text-sm text-gray-400'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-20'>
        <span className='text-xs uppercase tracking-wider'>Scroll</span>
        <div className='w-6 h-10 border-2 border-gray-400/80 rounded-full flex justify-center pt-2'>
          <div className='w-1.5 h-3 bg-cyan-400/80 rounded-full animate-scroll-bounce'></div>
        </div>
      </div>
    </section>
  );
}
