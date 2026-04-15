import React, { useState, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/Stars';
import AnimateOnScroll from '../../components/AnimateOnScroll';

// Project Images - Web
import porject2 from '../../assets/project2.png';
import tunesevern from '../../assets/project/tuneseven.png';
import bidesh from '../../assets/project/bidesh.png';
import chatmandu from '../../assets/project/chatmandu.png';
import epass from '../../assets/project/epass.png';
import gigabion from '../../assets/project/Gigabion.png';
import mcq from '../../assets/project/mcq.png';
import nepaldental from '../../assets/project/Nepaldentalhome.png';
import technery from '../../assets/project/Technergy.png';
import sajilodera from '../../assets/project/sajilodera.png';
import sajiloderaCaseStudy from '../../assets/project/sajilodera-case-study.png';
import bachelorQuestionBank from '../../assets/project/bachelor-question-bank.png';
import pymentor from '../../assets/project/pymentor.png';

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
import { useNavigate } from 'react-router-dom';

export default function Project() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const webProjects = [
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
      id: 5,
      image: technery,
      title: 'Technergy.com.np',
      subtitle: 'Tech Agency',
      description: 'Innovation through impactful design and dynamic websites.',
      technologies: ['Tailwind CSS', 'GSAP', 'React'],
      gradient: 'from-blue-500 to-indigo-600',
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

            {/* Featured Case Study */}
            <section className="relative pb-16">
              <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={sajiloderaCaseStudy}
                        alt="SajiloDera case study"
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
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        onClick={(e) => {
                          if (!project.link || project.link === '#') e.preventDefault();
                        }}
                        aria-disabled={!project.link || project.link === '#'}
                      >
                        View Project
                        <OpenInNewIcon className="w-4 h-4" />
                      </a>
                    </div>
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
        <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
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
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        onClick={(e) => {
                          if (!project.link || project.link === '#') e.preventDefault();
                        }}
                        aria-disabled={!project.link || project.link === '#'}
                      >
                        View Details
                        <OpenInNewIcon className="w-4 h-4" />
                      </a>
                    </div>
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
