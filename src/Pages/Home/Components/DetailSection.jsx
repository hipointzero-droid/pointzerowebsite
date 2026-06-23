import React from 'react';
import image from '../../../assets/8.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TuneIcon from '@mui/icons-material/Tune';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function DetailSection() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <TuneIcon className='w-6 h-6' />,
      title: 'Tailored Solutions',
      description: 'Customized strategies designed to skyrocket your sales, meticulously crafted to fit your unique business needs.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <LightbulbIcon className='w-6 h-6' />,
      title: 'Expertise and Innovation',
      description: 'Innovative approaches fueled by cutting-edge technology and a wealth of industry expertise.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <HandshakeIcon className='w-6 h-6' />,
      title: 'Collaborative Partnership',
      description: 'Together, we co-create winning strategies, fostering a collaborative partnership that ensures objectives are exceeded.',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className='relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          {/* Left Content */}
          <AnimateOnScroll className='lg:w-1/2' as="div" variant="left">
            {/* Section Tag */}
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
              <TrendingUpIcon className='w-4 h-4 text-cyan-400' />
              <span className='text-sm font-medium text-cyan-400'>Success Stories</span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Powering Your{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                Sales Success
              </span>
            </h2>

            <p className='mt-4 text-xl text-gray-300 font-medium'>
              with Point Zero's Impactful Solutions
            </p>

            {/* Image for mobile */}
            <div className='lg:hidden mt-8'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-20 blur-lg'></div>
                <img src={image} alt="Point Zero team delivering a successful software project — Kathmandu, Nepal" loading="lazy" decoding="async" width="800" height="600" className='relative w-full rounded-2xl' />
              </div>
            </div>

            {/* Highlights */}
            <div className='mt-10 space-y-6'>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className='group p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-gray-900/80'
                >
                  <div className='flex items-start gap-4'>
                    <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl text-white shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                        {item.title}
                      </h3>
                      <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/contact")}
              className='mt-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
            >
              Start Your Success Journey
            </button>
          </AnimateOnScroll>

          {/* Right Content - Image */}
          <AnimateOnScroll className='lg:w-1/2 hidden lg:block' delay={1} as="div" variant="right">
            <div className='relative'>
              {/* Gradient Border */}
              <div className='absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-lg'></div>

              {/* Main Image */}
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl border border-white/10'>
                <img src={image} alt="Point Zero engineering team shipping web, mobile and AI products" loading="lazy" decoding="async" width="800" height="600" className='w-full rounded-2xl' />

                {/* Floating Stats Card */}
                <div className='absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl'>
                      <TrendingUpIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-white'>150%</p>
                      <p className='text-gray-400 text-sm'>Average Growth</p>
                    </div>
                  </div>
                </div>

                {/* Floating Checkmarks */}
                <div className='absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl'>
                  <div className='space-y-2'>
                    {['On-time Delivery', 'Budget Friendly', 'Quality Assured'].map((item, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <CheckCircleIcon className='w-4 h-4 text-green-400' />
                        <span className='text-white text-sm'>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
