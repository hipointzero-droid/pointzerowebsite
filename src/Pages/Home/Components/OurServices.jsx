import React, { useState } from 'react';
import developer from '../../../assets/developer.png';
import developer1 from '../../../assets/developer1.png';
import website from '../../../assets/website.png';
import website1 from '../../../assets/website1.png';
import mobile from '../../../assets/mobile.png';
import mboile1 from '../../../assets/mobile1.png';
import ui from '../../../assets/ux.png';
import ui1 from '../../../assets/ux1.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function OurServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 0,
      icon: developer,
      iconHover: developer1,
      title: 'Hire Dedicated Developers',
      description: 'Augment your team with our Hire Dedicated Developers service, where you gain access to seasoned professionals fully committed to bringing your projects to fruition.',
      gradient: 'from-yellow-500 to-amber-600',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-amber-500/10',
      shadowColor: 'group-hover:shadow-yellow-500/20',
    },
    {
      id: 1,
      icon: mobile,
      iconHover: mboile1,
      title: 'Mobile Apps',
      description: 'Our mission is to empower businesses with cutting-edge mobile applications. We create intuitive, high-performance apps that engage users and drive business growth.',
      gradient: 'from-orange-500 to-red-600',
      hoverBg: 'hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10',
      shadowColor: 'group-hover:shadow-orange-500/20',
    },
    {
      id: 2,
      icon: website,
      iconHover: website1,
      title: 'Web Development',
      description: 'We deliver innovative web solutions that exceed expectations. From responsive designs to complex web applications, we build digital experiences that make lasting impressions.',
      gradient: 'from-red-500 to-pink-600',
      hoverBg: 'hover:bg-gradient-to-br hover:from-red-500/10 hover:to-pink-500/10',
      shadowColor: 'group-hover:shadow-red-500/20',
    },
    {
      id: 3,
      icon: ui,
      iconHover: ui1,
      title: 'Infrastructure & DevOps',
      description: 'In today\'s fast-paced digital landscape, having reliable infrastructure is essential. We architect resilient systems and implement DevOps practices for maximum efficiency.',
      gradient: 'from-blue-500 to-indigo-600',
      hoverBg: 'hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-indigo-500/10',
      shadowColor: 'group-hover:shadow-blue-500/20',
    },
  ];

  return (
    <section className='relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <AnimateOnScroll className='text-center mb-16' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <WorkspacePremiumIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>Premium Solutions</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
            Our Core{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              Services
            </span>
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto text-lg'>
            Discover our specialized service offerings designed to accelerate your digital transformation journey.
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {services.map((service) => (
            <AnimateOnScroll key={service.id} delay={service.id % 5} as="div" variant="scale">
            <div
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] shine-wrap ${service.hoverBg} cursor-pointer`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className='relative z-10 flex flex-col h-full'>
                {/* Icon */}
                <div className='mb-6'>
                  <img
                    src={hoveredCard === service.id ? service.iconHover : service.icon}
                    alt={service.title}
                    className='w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110'
                  />
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors'>
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className='mt-6 flex items-center gap-2'>
                  <span className={`font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Explore Service
                  </span>
                  <ArrowForwardIcon className={`w-5 h-5 text-gray-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white`} />
                </div>
              </div>

              {/* Decorative Number */}
              <div className='absolute top-6 right-6 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500'>
                0{service.id + 1}
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll className='mt-16 text-center' delay={2} as="div">
          <div className='inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-500/20'>
            <div className='text-center sm:text-left'>
              <p className='text-white font-semibold text-lg'>Ready to start your project?</p>
              <p className='text-gray-400'>Let's discuss how we can help transform your ideas into reality.</p>
            </div>
            <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'>
              Get Started
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
