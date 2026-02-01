import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function OurCoreFeatures() {
  const features = [
    {
      icon: <TuneIcon className='w-8 h-8' />,
      title: 'Tailored Solutions',
      description: 'Crafting bespoke digital solutions precisely tailored to your unique business needs and objectives.',
      gradient: 'from-cyan-500 to-blue-600',
      delay: '0',
    },
    {
      icon: <LightbulbIcon className='w-8 h-8' />,
      title: 'Expertise & Innovation',
      description: 'Harnessing cutting-edge technologies and a passion for innovation to deliver groundbreaking experiences.',
      gradient: 'from-purple-500 to-pink-600',
      delay: '100',
    },
    {
      icon: <HandshakeIcon className='w-8 h-8' />,
      title: 'Collaborative Partnership',
      description: 'Fostering transparent and collaborative relationships, we work hand-in-hand with our clients to transform visions into reality.',
      gradient: 'from-orange-500 to-red-600',
      delay: '200',
    },
  ];

  return (
    <section className='relative bg-gradient-to-b from-gray-900 to-black py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <AnimateOnScroll className='text-center mb-16' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <StarIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>Why Choose Us</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
            Our Core{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              Features
            </span>
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto text-lg'>
            What sets us apart in delivering exceptional digital solutions for your business.
          </p>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index % 3} as="div" className='group relative text-center' variant="scale">
              {/* Card */}
              <div className='relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-gray-900/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 shine-wrap'>
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className='relative z-10'>
                  {/* Icon */}
                  <div className={`inline-flex p-5 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white shadow-lg mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors'>
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (between cards) */}
              {index < features.length - 1 && (
                <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2'></div>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: 'Agile', label: 'Development Process' },
          ].map((stat, index) => (
            <AnimateOnScroll key={index} delay={index % 4} as="div">
            <div
              className='text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/5'
            >
              <div className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                {stat.value}
              </div>
              <div className='mt-2 text-sm text-gray-400'>{stat.label}</div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
