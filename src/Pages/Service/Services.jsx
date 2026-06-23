import React, { Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';

// Icons
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'ai',
      icon: <AutoAwesomeIcon className="w-8 h-8" />,
      title: 'AI & RAG Software Development',
      subtitle: 'Production‑grade LLM products',
      description:
        'We design and ship AI software for startups and enterprises—retrieval‑augmented (RAG) chatbots, AI agents, document and PDF extraction, and LLM workflows—on Claude, OpenAI GPT, Google Gemini and open Llama models, with evals, observability and SLAs.',
      gradient: 'from-cyan-500 to-purple-600',
      features: [
        'RAG chatbots & assistants over your docs and DB',
        'AI agents and multi‑step automations',
        'Vector search (pgvector, Pinecone, Weaviate, Qdrant)',
        'LLM integrations (Claude, GPT, Gemini, Llama)',
        'Document & data extraction pipelines',
        'Fine‑tuning, prompt libraries & evals',
      ],
      technologies: [
        { name: 'Claude', color: '#D97706' },
        { name: 'OpenAI', color: '#10A37F' },
        { name: 'Gemini', color: '#4285F4' },
        { name: 'LangGraph', color: '#22D3EE' },
      ],
      cta: 'Build AI Software',
    },
    {
      id: 'mobile',
      icon: <PhoneIphoneIcon className="w-8 h-8" />,
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Excellence',
      description: 'Our specialty is developing powerful mobile applications for all sizes of businesses. We leverage cutting-edge technology to create apps for iOS, Android, hybrid, and cross-platform platforms that deliver exceptional user experiences.',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Native iOS App Development',
        'Native Android App Development',
        'Cross-platform Solutions',
        'React Native & Flutter',
        'App Store Optimization',
        'Maintenance & Support',
      ],
      technologies: [
        { name: 'Swift', color: '#FA7343' },
        { name: 'Kotlin', color: '#7F52FF' },
        { name: 'React Native', color: '#61DAFB' },
        { name: 'Flutter', color: '#02569B' },
      ],
      cta: 'Hire Mobile Developers',
    },
    {
      id: 'web',
      icon: <WebIcon className="w-8 h-8" />,
      title: 'Web Development',
      subtitle: 'Modern Web Solutions',
      description: 'We are a top web development company. Our certified developers are masters at building unique online solutions with the newest web technology for businesses of all scales. From simple websites to complex web applications.',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Modern websites and web applications',
        'Custom Website Development',
        'Web Application Development',
        'eCommerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Cloud Integration',
      ],
      technologies: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#ffffff' },
        { name: 'Node.js', color: '#68A063' },
        { name: 'Python', color: '#3776AB' },
      ],
      cta: 'Hire Web Developers',
    },
    {
      id: 'uiux',
      icon: <BrushIcon className="w-8 h-8" />,
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Create stunning user experiences that captivate and convert. Our design team crafts intuitive interfaces that delight users and drive business results through research-driven design methodology.',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Interaction Design',
        'Usability Testing',
        'Design Handoff',
      ],
      technologies: [
        { name: 'Figma', color: '#F24E1E' },
        { name: 'Adobe XD', color: '#FF61F6' },
        { name: 'Sketch', color: '#F7B500' },
        { name: 'Framer', color: '#0055FF' },
      ],
      cta: 'Hire UI/UX Designers',
    },
    {
      id: 'qa',
      icon: <BugReportIcon className="w-8 h-8" />,
      title: 'Quality Assurance',
      subtitle: 'Bug-Free Delivery',
      description: 'Quality Assurance and software testing services are fundamental to our ecosystem. Our proficient testers contribute to expedited releases without compromising quality through comprehensive testing strategies.',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        'Manual QA Testing',
        'Automated Testing',
        'Performance Testing',
        'Security Testing',
        'API Testing',
        'Mobile App Testing',
      ],
      technologies: [
        { name: 'Selenium', color: '#43B02A' },
        { name: 'Cypress', color: '#64748b' },
        { name: 'Jest', color: '#C21325' },
        { name: 'Postman', color: '#FF6C37' },
      ],
      cta: 'Hire QA Experts',
    },
    {
      id: 'devops',
      icon: <CloudIcon className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      subtitle: 'Scalable Infrastructure',
      description: 'Build resilient, scalable infrastructure with our DevOps expertise. We help you deploy faster, scale effortlessly, and maintain high availability with modern cloud-native solutions.',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'CI/CD Pipeline Setup',
        'Cloud Migration',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        '24/7 Support',
      ],
      technologies: [
        { name: 'AWS', color: '#FF9900' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'Kubernetes', color: '#326CE5' },
        { name: 'Terraform', color: '#7B42BC' },
      ],
      cta: 'Hire DevOps Engineers',
    },
    {
      id: 'team',
      icon: <GroupsIcon className="w-8 h-8" />,
      title: 'Dedicated Teams',
      subtitle: 'Extend Your Team',
      description: 'Augment your team with dedicated developers who integrate seamlessly with your workflow. Get skilled professionals committed to your project success with flexible engagement models.',
      gradient: 'from-yellow-500 to-orange-600',
      features: [
        'Flexible Engagement',
        'Skilled Professionals',
        'Quick Onboarding',
        'Direct Communication',
        'Agile Methodology',
        'Transparent Pricing',
      ],
      technologies: [
        { name: 'Full Stack', color: '#22D3EE' },
        { name: 'Frontend', color: '#F59E0B' },
        { name: 'Backend', color: '#10B981' },
        { name: 'Mobile', color: '#8B5CF6' },
      ],
      cta: 'Build Your Team',
    },
  ];

  const stats = [
    { icon: <RocketLaunchIcon />, value: '500+', label: 'Projects Delivered' },
    { icon: <SpeedIcon />, value: '99%', label: 'On-Time Delivery' },
    { icon: <SecurityIcon />, value: '100%', label: 'Secure Code' },
    { icon: <SupportAgentIcon />, value: '24/7', label: 'Support' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Services — AI, RAG, Web, Mobile, UI/UX & DevOps | Point Zero"
        description="Hire Point Zero for AI/RAG development, web apps, mobile apps, UI/UX, MVP build and DevOps. Trusted by startups and enterprises in Nepal and worldwide."
        keywords="AI development services Nepal, RAG development services, LLM integration services, web development services Nepal, mobile app services Nepal, UI/UX design services, MVP development Nepal, hire developers Nepal"
        path="/services"
        image="https://pointzero.com.np/og/services.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Pointzero services',
          itemListElement: [
            {
              name: 'AI & RAG Software Development',
              description:
                'RAG chatbots, AI agents and LLM apps with Claude, OpenAI GPT, Google Gemini and Llama, plus vector databases (pgvector, Pinecone, Weaviate, Qdrant).',
            },
            { name: 'Mobile App Development' },
            { name: 'Web Development' },
            { name: 'UI/UX Design' },
            { name: 'Software Testing & QA' },
            { name: 'Infrastructure & DevOps' },
            { name: 'Hire Dedicated Developers' },
          ].map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Service',
              name: s.name,
              description: s.description,
              provider: { '@type': 'Organization', name: 'Pointzero' },
              areaServed: ['Nepal', 'Worldwide'],
            },
          })),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll className="text-center" as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">World-Class Development Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hire Specialized{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Web & Mobile
              </span>
              <br />
              Development Experts
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Since 2022, we have been a reliable partner for software application development.
              We provide a comprehensive spectrum of IT services and solutions worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </AnimateOnScroll>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={index} as="div" variant="scale" delay={(index % 4) + 1}>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:border-cyan-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl text-cyan-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-20" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Services
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your business
            </p>
          </AnimateOnScroll>

          <div className="space-y-40">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={service.id}
                as="div"
                variant={index % 2 === 0 ? 'left' : 'right'}
                delay={index % 3}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                id={service.id}
              >
                {/* Visual Side — premium icon card, no stock images */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    {/* Outer glow */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500`}></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-8 sm:p-10 border border-white/10 overflow-hidden min-h-[420px] flex flex-col justify-between">
                      {/* Animated grid background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" aria-hidden="true"></div>

                      {/* Gradient orbs */}
                      <div className={`absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br ${service.gradient} opacity-30 blur-3xl rounded-full group-hover:opacity-50 transition-opacity duration-700`} aria-hidden="true"></div>
                      <div className={`absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-br ${service.gradient} opacity-25 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700`} aria-hidden="true"></div>

                      {/* Subtitle badge */}
                      <div className="relative flex items-center justify-between">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.gradient} rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg`}>
                          {service.subtitle}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                          0{services.findIndex((s) => s.id === service.id) + 1}
                        </span>
                      </div>

                      {/* Big centered icon */}
                      <div className="relative flex items-center justify-center my-8 sm:my-10">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl rounded-full`} aria-hidden="true"></div>
                        <div className={`relative p-10 sm:p-12 bg-gradient-to-br ${service.gradient} rounded-3xl text-white shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                          {React.cloneElement(service.icon, { className: 'w-16 h-16 sm:w-20 sm:h-20' })}
                        </div>
                      </div>

                      {/* Tech badge constellation */}
                      <div className="relative flex flex-wrap gap-2 justify-center">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-gray-200 hover:bg-white/10 transition-colors"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: tech.color }}
                              aria-hidden="true"
                            />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
                        style={{ color: tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate("/contact")}
                    className={`group px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105`}
                  >
                    <span className="flex items-center gap-2">
                      {service.cta}
                      <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Process
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and requirements', icon: '🎯' },
              { step: '02', title: 'Planning', desc: 'Creating roadmap, architecture, and timeline', icon: '📋' },
              { step: '03', title: 'Development', desc: 'Agile development with regular updates', icon: '⚡' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support', icon: '🚀' },
            ].map((item, index) => (
              <AnimateOnScroll key={index} as="div" variant="scale" delay={index % 4} className="relative group">
                <div className="h-full p-8 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-gray-900/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 shine-wrap">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400/30 to-blue-500/30 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-400">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Technologies We{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Master
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: '#61DAFB' },
              { name: 'Next.js', color: '#ffffff' },
              { name: 'Node.js', color: '#68A063' },
              { name: 'Python', color: '#3776AB' },
              { name: 'Flutter', color: '#02569B' },
              { name: 'Swift', color: '#FA7343' },
              { name: 'Kotlin', color: '#7F52FF' },
              { name: 'AWS', color: '#FF9900' },
              { name: 'Docker', color: '#2496ED' },
              { name: 'MongoDB', color: '#47A248' },
              { name: 'PostgreSQL', color: '#336791' },
              { name: 'TypeScript', color: '#3178C6' },
            ].map((tech, index) => (
              <AnimateOnScroll key={index} as="div" variant="scale" delay={index % 6}>
              <div
                className="group p-4 sm:p-6 bg-gray-800/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-cyan-500/30 hover:bg-gray-800/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15 hover:scale-[1.02]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold" style={{ color: tech.color }}>
                    {tech.name[0]}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium text-center group-hover:text-white transition-colors">{tech.name}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => navigate("/project")}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
