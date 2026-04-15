import React from 'react';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function Features() {
  const services = [
    {
      icon: <WebIcon className='w-8 h-8' />,
      title: 'Web Development',
      description: 'Modern websites and web applications—bringing your online presence to life with sleek design and seamless functionality.',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      icon: <PhoneIphoneIcon className='w-8 h-8' />,
      title: 'App Development',
      description: 'Transforming ideas into intuitive mobile experiences that captivate and engage users across all platforms.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: <CodeIcon className='w-8 h-8' />,
      title: 'Software Development',
      description: 'Building robust, scalable software solutions tailored to your unique business needs and goals.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
    {
      icon: <BugReportIcon className='w-8 h-8' />,
      title: 'Software Testing & QA',
      description: 'Guaranteeing perfection in every line of code, ensuring your software runs flawlessly every time.',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: <CloudIcon className='w-8 h-8' />,
      title: 'Infrastructure & DevOps',
      description: 'Architecting resilient infrastructure and implementing DevOps practices for unmatched efficiency.',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      icon: <GroupsIcon className='w-8 h-8' />,
      title: 'Hire Dedicated Developers',
      description: 'Expand your team with seasoned professionals dedicated to bringing your projects to fruition.',
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
    },
  ];

  return (
    <section className='relative bg-black py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <AnimateOnScroll className='text-center mb-16' as="div">
          <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
            <CodeIcon className='w-4 h-4 text-cyan-400' />
            <span className='text-sm font-medium text-cyan-400'>What We Offer</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
            Our{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
              Services
            </span>
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto text-lg'>
            Comprehensive digital solutions designed to transform your business and drive growth in the digital age.
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <AnimateOnScroll key={index} delay={index % 6} as="div" variant="scale">
            <div
              className='group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-gray-900/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 shine-wrap'
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className='relative z-10'>
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl text-white shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-white transition-colors'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors'>
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className='mt-6 flex items-center gap-2 text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll className='mt-16 text-center' delay={2} as="div">
          <p className='text-gray-400 mb-6'>Need a custom solution? We've got you covered.</p>
          <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black'>
            Discuss Your Project
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
