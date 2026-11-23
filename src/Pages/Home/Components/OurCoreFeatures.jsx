import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';

export default function OurCoreFeatures() {
  const features = [
    {
      icon: <TuneIcon className='w-8 h-8' />,
      title: 'Tailored Solutions',
      description: 'Crafting bespoke digital solutions precisely tailored to your unique business needs and objectives.',
      delay: '0',
    },
    {
      icon: <LightbulbIcon className='w-8 h-8' />,
      title: 'Expertise & Innovation',
      description: 'Harnessing cutting-edge technologies and a passion for innovation to deliver groundbreaking experiences.',
      delay: '100',
    },
    {
      icon: <HandshakeIcon className='w-8 h-8' />,
      title: 'Collaborative Partnership',
      description: 'Fostering transparent and collaborative relationships, we work hand-in-hand with our clients to transform visions into reality.',
      delay: '200',
    },
  ];

  return (
    <section aria-labelledby="why-choose-heading" className='relative border-t border-white/10 bg-black py-24 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimateOnScroll className='text-center mb-16' as="div">
          <Badge className='mb-6 px-3.5 py-1.5'>
            <StarIcon className='w-4 h-4 text-brand' />
            Why Choose Us
          </Badge>
          <h2 id="why-choose-heading" className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
            Why teams choose{' '}
            <span className='text-brand'>Point Zero</span>
          </h2>
          <p className='mt-4 text-neutral-400 max-w-2xl mx-auto text-lg'>
            Three reasons clients pick us—and stick with us—for their most important digital work.
          </p>
        </AnimateOnScroll>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index % 3} as="div" className='group relative text-center' variant="scale">
              <div className='relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1'>
                <div className='relative z-10'>
                  <div className='inline-flex p-5 bg-white/[0.04] ring-1 ring-white/10 rounded-2xl text-brand mb-6 transition-transform duration-500 group-hover:scale-105'>
                    {feature.icon}
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>

                  <p className='text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors'>
                    {feature.description}
                  </p>
                </div>
              </div>

              {index < features.length - 1 && (
                <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 transform -translate-y-1/2'></div>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { value: 'Clear', label: 'Scoped Delivery' },
            { value: '24/7', label: 'Support Channels' },
            { value: 'Prod', label: 'Ready Deployments' },
            { value: 'Agile', label: 'Development Process' },
          ].map((stat, index) => (
            <AnimateOnScroll key={index} delay={index % 4} as="div">
            <div
              className='text-center p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20'
            >
              <div className='text-2xl lg:text-3xl font-bold text-brand'>
                {stat.value}
              </div>
              <div className='mt-2 text-sm text-neutral-400'>{stat.label}</div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}