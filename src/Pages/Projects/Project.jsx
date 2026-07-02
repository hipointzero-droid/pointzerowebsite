import React, { useState, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import Picture from '../../components/Picture';

// Project Images - Web
import porject2 from '../../assets/project2.png';
import tunesevern from '../../assets/project/tuneseven.png';
import bidesh from '../../assets/project/bidesh.png';
import chatmandu from '../../assets/project/chatmandu.png';
import epass from '../../assets/project/epass.png';
import gigabion from '../../assets/project/Gigabion.png';
import mcq from '../../assets/project/mcq.png';
import nepaldental from '../../assets/project/Nepaldentalhome.png';
import sajilodera from '../../assets/project/sajilodera.png';
import sajiloderaCaseStudy from '../../assets/project/sajilodera-case-study.png';
import bachelorQuestionBank from '../../assets/project/bachelor-question-bank.png';
import bachelorQuestionBankCaseStudy from '../../assets/project/bachelor-question-bank-case-study.png';
import pymentor from '../../assets/project/pymentor.png';
import wellnepa from '../../assets/project/wellnepa.png';

// Project Images - Mobile
import medicity from '../../assets/project/2.png';
import bideshapp from '../../assets/project/bideshapp.png';
import gabionbox from '../../assets/project/5.png';
import chatmanduapp from '../../assets/project/6.png';
import epassapp from '../../assets/project/3.png';
import ecommerceapp from '../../assets/project/4.png';
import newsapp from '../../assets/project/1.png';

// Icons
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterListIcon from '@mui/icons-material/FilterList';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentsIcon from '@mui/icons-material/Payments';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import InsightsIcon from '@mui/icons-material/Insights';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

export default function Project() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const webProjects = [
    {
      id: -1,
      image: wellnepa,
      title: 'WellNepa.com',
      subtitle: "Nepal's #1 Verified Coaching Marketplace",
      description: 'A modern coaching marketplace for fitness, nutrition and mental wellness—book verified 1-on-1 sessions with trusted coaches in Nepal.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      gradient: 'from-violet-500 to-fuchsia-600',
      link: 'https://wellnepa.com',
    },
    {
      id: 0,
      image: sajilodera,
      title: 'Sajilodera.org',
      subtitle: 'Property & Transport Platform',
      description: 'Modern websites and web applications for property rentals and transport—built for speed, clarity, and conversions.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      gradient: 'from-emerald-500 to-green-600',
      link: 'https://sajilodera.org',
    },
    {
      id: 1,
      image: porject2,
      title: 'Rozai.com.np',
      subtitle: 'E-Commerce Platform',
      description: 'Premier destination for quality goods in Nepal with seamless shopping experience.',
      technologies: ['React', 'Django', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-600',
      link: '#',
    },
    {
      id: 2,
      image: tunesevern,
      title: 'Neptunes.app',
      subtitle: 'Music Platform',
      description: 'Platform for creators to share their art and connect with audiences worldwide.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-600',
      link: '#',
    },
    {
      id: 3,
      image: bidesh,
      title: 'Bidesh.online',
      subtitle: 'Immigration Services',
      description: 'Resources for individuals working abroad to thrive and succeed.',
      technologies: ['Next.js', 'Tailwind', 'Flutter'],
      gradient: 'from-cyan-500 to-blue-600',
      link: '#',
    },
    {
      id: 4,
      image: gigabion,
      title: 'Gigabion.com',
      subtitle: 'Industrial Solutions',
      description: 'GI wire production plant with skilled technical expertise.',
      technologies: ['React', 'Django', 'AWS'],
      gradient: 'from-green-500 to-emerald-600',
      link: '#',
    },
    {
      id: 6,
      image: nepaldental,
      title: 'Nepaldentalhome.com.np',
      subtitle: 'Healthcare',
      description: 'Celebrating the joy of happy smiles since 2016.',
      technologies: ['Next.js', 'Tailwind', 'Strapi'],
      gradient: 'from-teal-500 to-cyan-600',
      link: '#',
    },
    {
      id: 7,
      image: chatmandu,
      title: 'Chatmandu',
      subtitle: 'Communication Platform',
      description: 'Revolutionizing how people connect and interact online.',
      technologies: ['Next.js', 'Socket.io', 'Redis'],
      gradient: 'from-violet-500 to-purple-600',
      link: '#',
    },
    {
      id: 8,
      image: epass,
      title: 'Epass.com.np',
      subtitle: 'Digital Permits',
      description: 'Electronic passes for travel, permits, and permissions.',
      technologies: ['React', 'Django', 'PostgreSQL'],
      gradient: 'from-amber-500 to-orange-600',
      link: '#',
    },
    {
      id: 9,
      image: mcq,
      title: 'UBTTopikExam.com',
      subtitle: 'Education Platform',
      description: 'Effective learning tools for mastering MCQs across subjects.',
      technologies: ['React', 'Django', 'ML'],
      gradient: 'from-rose-500 to-pink-600',
      link: '#',
    },
  ];

  const mobileProjects = [
    {
      id: 0,
      image: bachelorQuestionBank,
      title: 'Bachelor Question Bank',
      subtitle: 'Education App (Nepal)',
      description: 'The ultimate companion for Bachelor-level students in Nepal—old question papers, solutions, notes & books, subject-wise browsing, and offline access.',
      gradient: 'from-red-500 to-orange-600',
      link: 'https://play.google.com/store/apps/details?id=com.bachelorquestion.nepali',
    },
    {
      id: 0.5,
      image: pymentor,
      title: 'PyMentor AI Interview',
      subtitle: 'Python Interview Prep',
      description: 'AI-powered mock interviews with real-time feedback, plus an interactive Python code playground to write, run, and debug solutions as you prepare for technical interviews.',
      gradient: 'from-indigo-500 to-purple-600',
      link: 'https://play.google.com/store/apps/details?id=com.pymentor.pymentor',
    },
    {
      id: 1,
      image: medicity,
      title: 'Medicity',
      subtitle: 'Fintech App',
      description: 'Fully functional Fintech money transaction app with advanced admin panel.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      image: newsapp,
      title: 'News House Nepal',
      subtitle: 'News Portal',
      description: 'Trusted news portal with up-to-the-minute updates on Nepal.',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      id: 3,
      image: ecommerceapp,
      title: 'E-Commerce App',
      subtitle: 'Shopping Platform',
      description: 'Product categorization, secure payments, and order tracking.',
      gradient: 'from-purple-500 to-violet-600',
    },
    {
      id: 4,
      image: epassapp,
      title: 'E-Pass App',
      subtitle: 'Digital Permits',
      description: 'Mobile access to digital pass services and permits.',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      id: 5,
      image: chatmanduapp,
      title: 'Chatmandu App',
      subtitle: 'Messaging',
      description: 'Real-time conversations with friends and family worldwide.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 6,
      image: gabionbox,
      title: 'Gabion Box Nepal',
      subtitle: 'Construction',
      description: 'Gabions and geotextile fabrics for construction projects.',
      gradient: 'from-slate-500 to-gray-600',
    },
    {
      id: 7,
      image: bideshapp,
      title: 'Bidesh App',
      subtitle: 'Immigration',
      description: 'Resources for individuals working abroad to succeed.',
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  const stats = [
    { value: '50+', label: 'Web Projects' },
    { value: '30+', label: 'Mobile Apps' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Our Work — AI, Web & Mobile Case Studies | Point Zero"
        description="Selected case studies from Point Zero: WellNepa coaching marketplace, SajiloDera, Bachelor Question Bank, PyMentor AI Interview, ChatMandu and more."
        keywords="Pointzero portfolio, software case studies Nepal, WellNepa, SajiloDera, Bachelor Question Bank, PyMentor, ChatMandu, AI projects Nepal"
        path="/project"
        image="https://pointzero.com.np/og/project.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/project' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Pointzero Portfolio',
          url: 'https://pointzero.com.np/project',
          about: 'Selected web and mobile product work by Pointzero.',
          hasPart: [
            { '@type': 'CreativeWork', name: 'WellNepa', url: 'https://wellnepa.com' },
            { '@type': 'CreativeWork', name: 'SajiloDera', url: 'https://sajilodera.org' },
            {
              '@type': 'CreativeWork',
              name: 'Bachelor Question Bank',
              url: 'https://play.google.com/store/apps/details?id=com.bachelorquestion.nepali',
            },
            {
              '@type': 'CreativeWork',
              name: 'PyMentor AI Interview',
              url: 'https://play.google.com/store/apps/details?id=com.pymentor.pymentor',
            },
          ],
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <AnimateOnScroll className="text-center" as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Our Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Projects That{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Define Excellence
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative web and mobile solutions that have helped
              businesses transform their digital presence and achieve remarkable results.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <AnimateOnScroll key={index} as="div" variant="scale" delay={(index % 4) + 1}>
                <div className="text-center p-4 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Filter Buttons */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              {[
                { id: 'all', label: 'All Projects', icon: <FilterListIcon className="w-4 h-4" /> },
                { id: 'web', label: 'Web Development', icon: <WebIcon className="w-4 h-4" /> },
                { id: 'mobile', label: 'Mobile Apps', icon: <PhoneIphoneIcon className="w-4 h-4" /> },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Web Projects Section */}
      {(activeFilter === 'all' || activeFilter === 'web') && (
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="flex items-center gap-4 mb-12" as="div" variant="left">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <WebIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Web Development</h2>
                <p className="text-gray-400">Modern websites and web applications</p>
              </div>
            </AnimateOnScroll>

            {/* Featured Case Study — WellNepa */}
            <section className="relative pb-16">
              <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/25 via-fuchsia-500/20 to-purple-500/25 rounded-3xl blur-2xl"></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-72 lg:h-auto lg:min-h-[26rem] bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-purple-500/10">
                      <Picture
                        src={wellnepa}
                        alt="WellNepa coaching marketplace — homepage walkthrough"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 lg:bg-gradient-to-l"></div>
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur border border-white/15 rounded-full">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-white">Live · wellnepa.com</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-violet-300 text-sm font-semibold uppercase tracking-wider">Featured Case Study</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-violet-500/15 border border-violet-400/30 rounded-full text-[10px] font-semibold text-violet-200 uppercase tracking-wide">
                          <VerifiedIcon className="w-3 h-3" /> New
                        </span>
                      </div>
                      <h3 className="mt-3 text-3xl lg:text-4xl font-bold text-white">WellNepa</h3>
                      <p className="mt-2 text-lg text-gray-300">Nepal's #1 verified coaching marketplace</p>

                      <p className="mt-6 text-gray-400 leading-relaxed">
                        We designed and built a modern coaching marketplace—pairing verified coaches in fitness,
                        nutrition and mental wellness with clients across Nepal. Sleek search, ratings, transparent
                        hourly pricing, and a conversion-tuned hero make booking a 1-on-1 session feel effortless.
                      </p>

                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { v: '500+', l: 'Verified coaches' },
                          { v: '10K+', l: 'Sessions booked' },
                          { v: '4.9', l: 'Avg. rating' },
                          { v: '6', l: 'Specialties' },
                        ].map((s) => (
                          <div key={s.l} className="text-center px-3 py-3 bg-white/5 border border-white/10 rounded-xl">
                            <div className="text-lg font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">{s.v}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">{s.l}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {['React', 'Tailwind CSS', 'Node.js', 'Payments'].map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href="https://wellnepa.com"
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.02] transition-all duration-300"
                        >
                          Visit WellNepa
                          <OpenInNewIcon className="w-5 h-5" />
                        </a>
                        <a
                          href="#wellnepa-platform"
                          className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                        >
                          Platform walkthrough
                          <ArrowForwardIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>

            {/* WellNepa — Platform walkthrough (six integrated modules) */}
            <section id="wellnepa-platform" className="relative pb-20 scroll-mt-24">
              <AnimateOnScroll as="div" variant="up" className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-400/20 rounded-full mb-6">
                  <StarIcon className="w-4 h-4 text-violet-300" />
                  <span className="text-sm font-medium text-violet-200">WellNepa · Platform walkthrough</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Everything you need to run your{' '}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    coaching business
                  </span>
                </h3>
                <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  Six integrated modules, one seamless experience. From first booking to weekly payouts —
                  it's all here, designed to keep you focused on coaching, not admin.
                </p>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <EventAvailableIcon className="w-7 h-7" />,
                    title: 'Smart Bookings',
                    description: 'Real-time calendar, time-zone aware slots, and one-tap rescheduling that respects coach availability.',
                    gradient: 'from-violet-500 to-purple-600',
                    tag: '01',
                  },
                  {
                    icon: <GroupsIcon className="w-7 h-7" />,
                    title: 'Coach Profiles',
                    description: 'Verified profiles with specialties, ratings and hourly rates—built to convert curious visitors into clients.',
                    gradient: 'from-fuchsia-500 to-pink-600',
                    tag: '02',
                  },
                  {
                    icon: <PaymentsIcon className="w-7 h-7" />,
                    title: 'Payments & Payouts',
                    description: 'Secure card and wallet payments at checkout. Coaches get reliable weekly payouts—zero admin work.',
                    gradient: 'from-emerald-500 to-teal-600',
                    tag: '03',
                  },
                  {
                    icon: <ChatBubbleOutlineIcon className="w-7 h-7" />,
                    title: 'In-app Messaging',
                    description: 'Secure 1-on-1 chat between coach and client—share check-ins, plans and notes without leaving the platform.',
                    gradient: 'from-cyan-500 to-blue-600',
                    tag: '04',
                  },
                  {
                    icon: <FitnessCenterIcon className="w-7 h-7" />,
                    title: 'Programs & Plans',
                    description: 'Build workouts, nutrition plans and mental-wellness programs—delivered to clients on schedule.',
                    gradient: 'from-orange-500 to-red-600',
                    tag: '05',
                  },
                  {
                    icon: <InsightsIcon className="w-7 h-7" />,
                    title: 'Insights & Reviews',
                    description: 'Track session counts, ratings and revenue trends. Social proof that helps top coaches stand out.',
                    gradient: 'from-amber-500 to-yellow-600',
                    tag: '06',
                  },
                ].map((m, index) => (
                  <AnimateOnScroll key={m.title} as="div" variant="scale" delay={index % 6}>
                    <div className="group relative h-full bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-3xl p-7 transition-all duration-500 hover:border-white/25 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10 shine-wrap">
                      <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <div className="absolute top-5 right-6 text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                        {m.tag}
                      </div>
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 bg-gradient-to-br ${m.gradient} rounded-2xl text-white shadow-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          {m.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll as="div" variant="up" className="mt-10 text-center">
                <a
                  href="https://wellnepa.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Experience WellNepa live
                  <OpenInNewIcon className="w-5 h-5" />
                </a>
              </AnimateOnScroll>
            </section>

            {/* Featured Case Study */}
            <section className="relative pb-16">
              <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <Picture
                        src={sajiloderaCaseStudy}
                        alt="SajiloDera property and transport platform — case study screens"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 lg:bg-gradient-to-l"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Featured Case Study</span>
                      <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white">SajiloDera</h3>
                      <p className="mt-2 text-lg text-gray-300">Rooms & Transport in One App</p>

                      <p className="mt-6 text-gray-400 leading-relaxed">
                        SajiloDera is an all-in-one Nepali home and transport solution. We designed and developed a modern,
                        conversion-focused web experience to showcase the product and make it easy for users to learn,
                        explore, and take action.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {['React', 'Tailwind CSS', 'Vite'].map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                          View Case Study
                          <ArrowForwardIcon className="w-5 h-5" />
                        </button>
                        <a
                          href="https://sajilodera.org"
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                        >
                          Visit Website
                          <OpenInNewIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>

            {/* Featured Case Study — Bachelor Question Bank (same layout as above) */}
            <section className="relative pb-16">
              <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto lg:min-h-[22rem]">
                      <Picture
                        src={bachelorQuestionBankCaseStudy}
                        alt="Bachelor Question Bank app — home, notices, bookmarks, and question papers"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 lg:bg-gradient-to-l"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-rose-400 text-sm font-semibold uppercase tracking-wider">Featured Case Study</span>
                      <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white">Bachelor Question Bank</h3>
                      <p className="mt-2 text-lg text-gray-300">Your ultimate Bachelor study partner</p>

                      <p className="mt-6 text-gray-400 leading-relaxed">
                        A polished mobile experience for Tribhuvan University and Nepali Bachelor students: notices on the home
                        feed, bookmarked PDFs and notes, and a hero entry point to 1000+ past papers—clear hierarchy, strong CTAs,
                        and a red-and-white brand system that feels fast and trustworthy.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        <li className="flex gap-2">
                          <span className="text-rose-400 shrink-0">•</span>
                          <span>Latest notices, bookmarks, and subject-wise question banks in one scrollable home.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-rose-400 shrink-0">•</span>
                          <span>Glass-style featured card for question papers with explore flow and bottom navigation for core tasks.</span>
                        </li>
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {['Mobile app', 'PDF & notices', 'Student UX'].map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.bachelorquestion.nepali"
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                        >
                          Get on Google Play
                          <ArrowForwardIcon className="w-5 h-5" />
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveFilter('mobile');
                            setTimeout(() => {
                              document.getElementById('mobile-apps-section')?.scrollIntoView({ behavior: 'smooth' });
                            }, 80);
                          }}
                          className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                        >
                          More mobile apps
                          <OpenInNewIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <AnimateOnScroll key={project.id} as="div" variant="scale" delay={index % 6}>
                <div
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 shine-wrap"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover — only when a live link exists */}
                    {project.link && project.link !== '#' && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          View Project
                          <OpenInNewIcon className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Projects Section */}
      {(activeFilter === 'all' || activeFilter === 'mobile') && (
        <section id="mobile-apps-section" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="flex items-center gap-4 mb-12" as="div" variant="right">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                <PhoneIphoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Mobile Applications</h2>
                <p className="text-gray-400">iOS and Android apps that users love</p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileProjects.map((project, index) => (
                <AnimateOnScroll key={project.id} as="div" variant="scale" delay={index % 6}>
                <div
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/5 shine-wrap"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover — only when a live link exists */}
                    {project.link && project.link !== '#' && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          View Details
                          <OpenInNewIcon className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let's collaborate and bring your ideas to life. Our team is ready to create
                something amazing for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Explore Services
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
