import React from 'react';
import image from '../../../assets/8.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TuneIcon from '@mui/icons-material/Tune';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

export default function DetailSection() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <TuneIcon className='w-6 h-6' />,
      title: 'Tailored Solutions',
      description: 'Customized strategies designed to skyrocket your sales, meticulously crafted to fit your unique business needs.',
    },
    {
      icon: <LightbulbIcon className='w-6 h-6' />,
      title: 'Expertise and Innovation',
      description: 'Innovative approaches fueled by cutting-edge technology and a wealth of industry expertise.',
    },
    {
      icon: <HandshakeIcon className='w-6 h-6' />,
      title: 'Collaborative Partnership',
      description: 'Together, we co-create winning strategies, fostering a collaborative partnership that ensures objectives are exceeded.',
    },
  ];

  return (
    <section className='relative border-t border-white/10 bg-neutral-950 py-24 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          <AnimateOnScroll className='lg:w-1/2' as="div" variant="left">
            <Badge className='mb-6 px-3.5 py-1.5'>
              <TrendingUpIcon className='w-4 h-4 text-brand' />
              Success Stories
            </Badge>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Powering Your{' '}
              <span className='text-brand'>Sales Success</span>
            </h2>

            <p className='mt-4 text-xl text-neutral-300 font-medium'>
              with Point Zero's Impactful Solutions
            </p>

            <div className='lg:hidden mt-8'>
              <div className='relative'>
                <img src={image} alt="Point Zero team delivering a successful software project — Kathmandu, Nepal" loading="lazy" decoding="async" width="800" height="600" className='relative w-full rounded-2xl border border-white/10' />
              </div>
            </div>

            <div className='mt-10 space-y-6'>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className='group p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]'
                >
                  <div className='flex items-start gap-4'>
                    <div className='p-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl text-brand shrink-0'>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors'>
                        {item.title}
                      </h3>
                      <p className='text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="button"
              size="lg"
              className="mt-10"
              onClick={() => navigate("/contact")}
            >
              Start Your Success Journey
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll className='lg:w-1/2 hidden lg:block' delay={1} as="div" variant="right">
            <div className='relative'>
              <div className='relative bg-black/40 p-4 rounded-2xl border border-white/10'>
                <img src={image} alt="Point Zero engineering team shipping web, mobile and AI products" loading="lazy" decoding="async" width="800" height="600" className='w-full rounded-xl border border-white/10' />

                <div className='absolute -bottom-6 -left-6 bg-neutral-950/95 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl text-brand'>
                      <TrendingUpIcon className='w-6 h-6' />
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-white'>Growth</p>
                      <p className='text-neutral-400 text-sm'>Focused Delivery</p>
                    </div>
                  </div>
                </div>

                <div className='absolute -top-4 -right-4 bg-neutral-950/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl'>
                  <div className='space-y-2'>
                    {['On-time Delivery', 'Budget Friendly', 'Quality Assured'].map((item, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <CheckCircleIcon className='w-4 h-4 text-brand' />
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