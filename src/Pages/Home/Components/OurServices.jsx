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
      glow: '251, 191, 36', // amber-400
      gradient: 'from-yellow-500/15 to-amber-600/15',
      ringGradient: 'from-yellow-400/40 to-amber-500/40',
      iconColor: 'text-amber-300',
    },
    {
      id: 1,
      slug: 'mobile',
      route: '/services/mobile-app-development-nepal',
      icon: <PhoneIphoneIcon style={{ fontSize: 44 }} />,
      title: 'Mobile Apps',
      description:
        'Production-grade iOS and Android apps in Flutter, React Native, Swift and Kotlin — with eSewa, Khalti, Stripe and Apple/Google Pay handled in production.',
      glow: '249, 115, 22', // orange-500
      gradient: 'from-orange-500/15 to-red-600/15',
      ringGradient: 'from-orange-400/40 to-red-500/40',
      iconColor: 'text-orange-300',
    },
    {
      id: 2,
      slug: 'web',
      route: '/services/web-development-nepal',
      icon: <LanguageIcon style={{ fontSize: 44 }} />,
      title: 'Web Development',
      description:
        'Marketing sites, SaaS dashboards and eCommerce on React, Next.js, Django and Node.js — sub-2s LCP, 95+ Lighthouse, and SEO baked into the architecture.',
      glow: '244, 114, 182', // pink-400
      gradient: 'from-red-500/15 to-pink-600/15',
      ringGradient: 'from-red-400/40 to-pink-500/40',
      iconColor: 'text-pink-300',
    },
    {
      id: 3,
      slug: 'devops',
      route: '/services/devops-cloud-nepal',
      icon: <CloudIcon style={{ fontSize: 44 }} />,
      title: 'Infrastructure & DevOps',
      description:
        'AWS, GCP and Vercel cloud architecture with CI/CD, Terraform IaC, observability and on-call your team can sleep through. Audits typically save 20–40% in cloud cost.',
      glow: '59, 130, 246', // blue-500
      gradient: 'from-blue-500/15 to-indigo-600/15',
      ringGradient: 'from-blue-400/40 to-indigo-500/40',
      iconColor: 'text-blue-300',
    },
  ];

  return (
    <section
      aria-labelledby="services-spotlight-heading"
      className="relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(34,211,238,0.04),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16" as="div">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <WorkspacePremiumIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Premium Solutions</span>
          </div>
          <h2
            id="services-spotlight-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Services that{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              compound results
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Hand-picked offerings that solve the bottleneck most teams hit — shipping
            high-quality digital products on time, without ballooning scope.
          </p>
        </AnimateOnScroll>

        {/* Services Grid — 3D tilt cards */}
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
                className={`
                  cursor-pointer h-full
                  bg-gradient-to-br ${service.gradient}
                  bg-gray-900/60 backdrop-blur-sm
                  border border-white/10
                  rounded-3xl p-8 lg:p-9
                  transition-[border-color,box-shadow] duration-500
                  hover:border-white/25 hover:shadow-2xl
                `}
                style={{
                  boxShadow: hoveredCard === service.id
                    ? `0 30px 60px -20px rgba(${service.glow}, 0.25)`
                    : undefined,
                }}
              >
                {/* Icon — floats furthest forward for the 3D feel */}
                <div
                  className="relative mb-6 inline-flex"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  {/* Glow plate behind icon */}
                  <div
                    className={`absolute inset-0 -m-3 rounded-2xl bg-gradient-to-br ${service.ringGradient} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                    aria-hidden="true"
                  />
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} ring-1 ring-white/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.iconColor}`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title — mid parallax depth */}
                <h3
                  className="text-2xl font-bold text-white mb-4 transition-colors"
                  style={{ transform: 'translateZ(36px)' }}
                >
                  {service.title}
                </h3>

                {/* Description — closer to the card surface */}
                <p
                  className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  {service.description}
                </p>

                {/* Explore link */}
                <div
                  className="mt-7 flex items-center justify-between"
                  style={{ transform: 'translateZ(28px)' }}
                >
                  <span className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${service.ringGradient} bg-clip-text text-transparent`}>
                    Explore Service
                    <ArrowForwardIcon className="w-5 h-5 text-cyan-300 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>

                  {/* Decorative number — pops out furthest */}
                  <div
                    className="text-5xl font-black text-white/5 group-hover:text-white/15 transition-colors duration-500 leading-none"
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

        {/* Bottom CTA */}
        <AnimateOnScroll className="mt-16 text-center" delay={2} as="div">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-500/20">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">Ready to start your project?</p>
              <p className="text-gray-400">Let's discuss how we can help transform your ideas into reality.</p>
            </div>
            <button
              onClick={() => {
                trackCTAClick('Get Started', 'home_services_3d_footer');
                navigate('/contact');
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Get Started
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
