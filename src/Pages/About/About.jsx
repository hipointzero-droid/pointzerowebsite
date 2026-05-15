import React, { Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import img1 from '../../assets/about1.png';
import img2 from '../../assets/about2.png';
import rectang1 from '../../assets/about/Rectangle 7.png';
import rectang2 from '../../assets/about/rectangle.png';
import rectang3 from '../../assets/about/Rectangle 5.png';
import rectang4 from '../../assets/about/Rectangle 3.png';
import rectang5 from '../../assets/about/Rectangle 6.png';
import kripas from '../../assets/about/kirpas.png';
import sagun from '../../assets/about/sagun.png';
import yunish from '../../assets/about/yunish.png';
import EarthCanvas from '../../components/Earth';
import StarsCanvas from '../../components/Stars';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SmoothCounter from './SmoothCount';
import Seo from '../../components/Seo';

export default function About() {
  const teamMembers = [
    { name: 'Kripas Khatiwada', role: 'CEO & Founder', image: kripas },
    { name: 'Sagun Khatiwada', role: 'Managing Director', image: sagun },
    { name: 'Yunish Pandit', role: 'Full Stack Developer', image: yunish },
  ];

  const galleryImages = [rectang1, rectang2, rectang3, rectang4, rectang5];

  return (
    <div className='bg-black min-h-screen'>
      <Seo
        title="About Pointzero — Digital Product Studio in Nepal"
        description="Meet the Pointzero team and learn how we partner with founders and product teams to design and ship modern web and mobile products from Kathmandu, Nepal."
        keywords="Pointzero team, software company Nepal, digital product studio Kathmandu, about Pointzero"
        path="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Pointzero',
          url: 'https://pointzero.com.np/about',
          mainEntity: {
            '@type': 'Organization',
            name: 'Pointzero',
            foundingLocation: 'Kathmandu, Nepal',
            employees: [
              { '@type': 'Person', name: 'Kripas Khatiwada', jobTitle: 'CEO & Founder' },
              { '@type': 'Person', name: 'Sagun Khatiwada', jobTitle: 'Managing Director' },
              { '@type': 'Person', name: 'Yunish Pandit', jobTitle: 'Full Stack Developer' },
            ],
          },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className='relative min-h-screen overflow-hidden'>
        {/* Stars Background */}
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Left Content */}
            <AnimateOnScroll className='lg:w-1/2 text-center lg:text-left' as="div" variant="left">
              {/* Badge */}
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8'>
                <RocketLaunchIcon className='w-4 h-4 text-cyan-400' />
                <span className='text-sm text-gray-300'>Software Development Company Since 2022</span>
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                Our Treasure Comprises Our{' '}
                <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                  People, Vision & Values
                </span>
              </h1>

              <p className='mt-8 text-lg text-gray-400 leading-relaxed'>
                Point Zero is more than just a software development company; we are the architects of digital
                transformation. With a relentless commitment to innovation and excellence, we specialize in
                crafting tailored solutions that empower businesses to thrive in the digital age.
              </p>

              {/* Quick Stats */}
              <div className='mt-10 flex flex-wrap gap-6 justify-center lg:justify-start'>
                {[
                  { icon: <PublicIcon />, label: 'Global Reach' },
                  { icon: <GroupsIcon />, label: 'Expert Team' },
                  { icon: <FavoriteIcon />, label: 'Client Love' },
                ].map((item, index) => (
                  <div key={index} className='flex items-center gap-2 text-gray-300'>
                    <span className='text-cyan-400'>{item.icon}</span>
                    <span className='text-sm font-medium'>{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Right Content - 3D Earth */}
            <AnimateOnScroll className='lg:w-1/2 h-[400px] lg:h-[500px] w-full' as="div" variant="right" delay={1}>
              <div className='relative w-full h-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl scale-75'></div>
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                  </div>
                }>
                  <EarthCanvas />
                </Suspense>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center'>
            {galleryImages.map((img, index) => (
              <AnimateOnScroll key={index} delay={index % 5} as="div" variant="scale" className='flex-shrink-0 group relative overflow-hidden rounded-2xl'>
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className='w-40 h-40 md:w-48 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className='relative py-24'>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Who We Are */}
            <AnimateOnScroll as="div" variant="left" className='group p-8 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl transition-all duration-500 hover:border-cyan-500/30 shine-wrap'>
              <div className='p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl w-fit mb-6'>
                <GroupsIcon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Who We Are</h3>
              <p className='text-gray-400 leading-relaxed'>
                Point Zero is a forward-thinking software development company with a passion for innovation
                and excellence. We pride ourselves on our dynamic team of professionals who bring diverse
                expertise and a shared commitment to pushing the boundaries of what's possible in the digital
                realm. At Point Zero, creativity, collaboration, and integrity are at the core of everything we do.
              </p>
            </AnimateOnScroll>

            {/* What We Do */}
            <AnimateOnScroll as="div" variant="right" delay={1} className='group p-8 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl transition-all duration-500 hover:border-purple-500/30 shine-wrap'>
              <div className='p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl w-fit mb-6'>
                <VisibilityIcon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>What We Do</h3>
              <p className='text-gray-400 leading-relaxed'>
                At Point Zero, we specialize in a range of digital services aimed at empowering businesses to
                thrive in today's competitive landscape. From captivating web development to groundbreaking
                app solutions, our services encompass everything needed to establish and elevate your digital
                presence. We offer tailored software solutions, cutting-edge technology integration, and expert
                consultation.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className='relative py-24 bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <AnimateOnScroll className='text-center mb-16' as="div">
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
              <FavoriteIcon className='w-4 h-4 text-cyan-400' />
              <span className='text-sm font-medium text-cyan-400'>Our Core Values</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
              Belief of Every{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                Pointzeroian
              </span>
            </h2>
          </AnimateOnScroll>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Client-centric */}
            <AnimateOnScroll as="div" variant="scale" delay={1} className='group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 shine-wrap'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
              <div className='relative p-8'>
                <img src={img1} alt="Client-centric" className='w-20 h-20 mb-6' />
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg'>
                    <HandshakeIcon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Client-centric Approach</h3>
                </div>
                <p className='text-gray-400 leading-relaxed'>
                  Our approach is rooted in collaboration and transparency. We believe in working closely with
                  our clients to understand their unique needs, challenges, and goals. By fostering open
                  communication and a deep understanding of our clients' businesses, we are able to develop
                  customized solutions that address their specific requirements and deliver measurable results.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Quality */}
            <AnimateOnScroll as="div" variant="scale" delay={2} className='group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 shine-wrap'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
              <div className='relative p-8'>
                <img src={img2} alt="Quality" className='w-20 h-20 mb-6' />
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg'>
                    <AccessTimeIcon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Quality Delivered in Time</h3>
                </div>
                <p className='text-gray-400 leading-relaxed'>
                  Our mission at Point Zero is simple: to empower businesses with the tools and technologies
                  they need to thrive in the digital age. We are driven by a relentless pursuit of excellence and a
                  commitment to delivering innovative solutions that exceed expectations. With a focus on quality,
                  creativity, and customer satisfaction, we strive to be the go-to partner for businesses.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='relative py-24'>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <AnimateOnScroll className='text-center mb-12' as="div">
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              We've helped businesses increase their revenue on an average by{' '}
              <span className='text-cyan-400 font-bold'>90%</span> in their first year with us!
            </p>
          </AnimateOnScroll>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { endValue: 200, label: 'Satisfied Clients Across the Globe', icon: <PublicIcon className='w-8 h-8' /> },
              { endValue: 700, label: 'Projects Delivered Successfully', icon: <WorkIcon className='w-8 h-8' /> },
              { endValue: 100, label: 'Experts Under the Same Roof', icon: <PeopleIcon className='w-8 h-8' /> },
            ].map((stat, index) => (
              <AnimateOnScroll key={index} as="div" variant="scale" delay={index % 3}>
              <div
                className='text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-gray-900/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10'
              >
                <div className='inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl text-cyan-400 mb-6'>
                  {stat.icon}
                </div>
                <div className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  <SmoothCounter endValue={stat.endValue} startValue={0} />
                </div>
                <p className='mt-4 text-gray-400'>{stat.label}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='relative py-24 bg-gradient-to-b from-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <AnimateOnScroll className='text-center mb-16' as="div">
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6'>
              <GroupsIcon className='w-4 h-4 text-cyan-400' />
              <span className='text-sm font-medium text-cyan-400'>Meet the Team</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
              Our{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift'>
                Amazing Team
              </span>
            </h2>
            <p className='mt-4 text-gray-400 max-w-2xl mx-auto'>
              Meet the talented individuals who make Point Zero a success.
            </p>
          </AnimateOnScroll>

          {/* Team Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {teamMembers.map((member, index) => (
              <AnimateOnScroll key={index} as="div" variant="scale" delay={index % 3} className='group relative'>
                <div className='relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-4 transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2'>
                  {/* Image */}
                  <div className='relative overflow-hidden rounded-xl mb-4'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                      <div className='flex gap-2'>
                        <a href="#" className='p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors'>
                          <LinkedInIcon className='w-4 h-4' />
                        </a>
                        <a href="#" className='p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors'>
                          <TwitterIcon className='w-4 h-4' />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className='text-white font-semibold text-sm truncate'>{member.name}</h4>
                  <p className='text-gray-500 text-xs mt-1'>{member.role}</p>
                </div>
            </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <AnimateOnScroll as="div" variant="scale" className='p-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl shine-wrap transition-all duration-300 hover:border-cyan-500/20'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Work Together?
            </h2>
            <p className='text-gray-400 mb-8 max-w-xl mx-auto'>
              Join the growing list of businesses that trust Point Zero to deliver exceptional digital solutions.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
            >
              Get in Touch
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
