import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import Card3D from '../../../components/Card3D';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { trackCTAClick } from '../../../lib/analytics';

export default function OurServices() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 0,
      slug: 'developers',
      route: '/services/ai-development-nepal',
      icon: <EngineeringIcon style={{ fontSize: 44 }} />,
      title: 'Hire Dedicated Developers',
      description:
        'Augment your team with senior, AI-fluent engineers who slot into your sprints, your tooling and your codebase — committed end-to-end, not body-shopped.',
      glow: '139, 163, 255',
    },
    {
      id: 1,
      slug: 'mobile',
      route: '/services/mobile-app-development-nepal',
      icon: <PhoneIphoneIcon style={{ fontSize: 44 }} />,
      title: 'Mobile Apps',
      description:
        'Production-grade iOS and Android apps in Flutter, React Native, Swift and Kotlin — with eSewa, Khalti, Stripe and Apple/Google Pay handled in production.',
      glow: '139, 163, 255',
    },
    {
      id: 2,
      slug: 'web',
      route: '/services/web-development-nepal',
      icon: <LanguageIcon style={{ fontSize: 44 }} />,
      title: 'Web Development',
      description:
        'Marketing sites, SaaS dashboards and eCommerce on React, Next.js, Django and Node.js — sub-2s LCP, 95+ Lighthouse, and SEO baked into the architecture.',
      glow: '139, 163, 255',
    },
    {
      id: 3,
      slug: 'devops',
      route: '/services/devops-cloud-nepal',
      icon: <CloudIcon style={{ fontSize: 44 }} />,
      title: 'Infrastructure & DevOps',
      description:
        'AWS, GCP and Vercel cloud architecture with CI/CD, Terraform IaC, observability and on-call your team can sleep through. Audits typically save 20–40% in cloud cost.',
      glow: '139, 163, 255',
    },
  ];

  return (
    <section
      aria-labelledby="services-spotlight-heading"
      className="relative border-t border-white/10 bg-neutral-950 py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16" as="div">
          <Badge className="mb-6 px-3.5 py-1.5">
            <WorkspacePremiumIcon className="w-4 h-4 text-brand" />
            Premium Solutions
          </Badge>
          <h2
            id="services-spotlight-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Services that{' '}
            <span className="text-brand">compound results</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Hand-picked offerings that solve the bottleneck most teams hit — shipping
            high-quality digital products on time, without ballooning scope.
          </p>
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          style={{ perspective: '1400px' }}
        >
          {services.map((service) => (
            <AnimateOnScroll
              key={service.id}
              delay={service.id % 4}
              as="div"
              variant="scale"
            >
              <Card3D
                as="article"
                maxTilt={9}
                glowColor={service.glow}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  trackCTAClick(`Service card: ${service.title}`, 'home_services_3d');
                  navigate(service.route);
                }}
                className="
                  cursor-pointer h-full
                  bg-white/[0.03] backdrop-blur-sm
                  border border-white/10
                  rounded-2xl p-8 lg:p-9
                  transition-[border-color,box-shadow] duration-500
                  hover:border-white/20
                "
                style={{
                  boxShadow: hoveredCard === service.id
                    ? `0 24px 48px -24px rgba(${service.glow}, 0.2)`
                    : undefined,
                }}
              >
                <div
                  className="relative mb-6 inline-flex"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <div
                    className="relative w-20 h-20 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center text-brand transition-transform duration-500 group-hover:scale-105"
                  >
                    {service.icon}
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-4 transition-colors"
                  style={{ transform: 'translateZ(36px)' }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  {service.description}
                </p>

                <div
                  className="mt-7 flex items-center justify-between"
                  style={{ transform: 'translateZ(28px)' }}
                >
                  <span className="inline-flex items-center gap-2 font-semibold text-brand">
                    Explore Service
                    <ArrowForwardIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>

                  <div
                    className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none"
                    style={{ transform: 'translateZ(60px)' }}
                    aria-hidden="true"
                  >
                    0{service.id + 1}
                  </div>
                </div>
              </Card3D>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-16 text-center" delay={2} as="div">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">Ready to start your project?</p>
              <p className="text-neutral-400">Let's discuss how we can help transform your ideas into reality.</p>
            </div>
            <Button
              type="button"
              size="lg"
              onClick={() => {
                trackCTAClick('Get Started', 'home_services_3d_footer');
                navigate('/contact');
              }}
            >
              Get Started
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}