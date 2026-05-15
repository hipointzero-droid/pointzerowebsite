import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

export default function Footer() {
  const navigate = useNavigate();

  const services = [
    { name: 'AI & RAG Software', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile App Development', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Quality Assurance', path: '/services' },
  ];

  const hireTeam = [
    { name: 'AI / LLM Engineers', path: '/services' },
    { name: 'Mobile Developers', path: '/services' },
    { name: 'Web Developers', path: '/services' },
    { name: 'UI/UX Designers', path: '/services' },
    { name: 'DevOps Engineers', path: '/services' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/project' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className='relative bg-gray-950 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className='relative z-10 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <AnimateOnScroll className='flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shine-wrap transition-all duration-300 hover:border-cyan-500/20' as="div" variant="scale">
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl lg:text-3xl font-bold text-white'>
                Ready to Start Your Project?
              </h3>
              <p className='mt-2 text-gray-400'>
                Get in touch with us for a free consultation and quote.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className='group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950'
            >
              <span>Get Free Estimation</span>
              <ArrowForwardIcon className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </button>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

          {/* Company Info */}
          <div className='lg:col-span-1'>
            <Link to="/" className='inline-block' aria-label="Pointzero — Home">
              <img src={logo} alt="Pointzero logo" className='h-14' width="140" height="56" loading="lazy" />
            </Link>
            <p className='mt-6 text-gray-400 leading-relaxed'>
              Pointzero is a digital product studio in Nepal. We design and ship modern websites,
              mobile apps and custom software for ambitious teams.
            </p>

            {/* Contact Info */}
            <address className='not-italic mt-8 space-y-4'>
              <a href="mailto:hi.pointzero@gmail.com" className='flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors'>
                <EmailIcon className='w-5 h-5' aria-hidden="true" />
                <span>hi.pointzero@gmail.com</span>
              </a>
              <a href="tel:+9779860486269" className='flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors'>
                <PhoneIcon className='w-5 h-5' aria-hidden="true" />
                <span>+977 986-0486269</span>
              </a>
              <div className='flex items-start gap-3 text-gray-400'>
                <LocationOnIcon className='w-5 h-5 shrink-0' aria-hidden="true" />
                <span>Kathmandu, Nepal</span>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Our Services</h3>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className='text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Team */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Hire Developer Team</h3>
            <ul className='space-y-3'>
              {hireTeam.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className='text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className='mt-8'>
              <h3 className='text-white font-semibold text-lg mb-4'>Follow Us</h3>
              <ul className='flex gap-3 list-none p-0'>
                {[
                  { icon: <FacebookIcon className='w-5 h-5' />, href: 'https://www.facebook.com/pointzero.com.np/', label: 'Facebook' },
                  { icon: <InstagramIcon className='w-5 h-5' />, href: 'https://www.instagram.com/pointzero.com.np/', label: 'Instagram' },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pointzero on ${social.label}`}
                      className='p-2.5 text-gray-400 bg-white/5 rounded-lg transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 border border-white/5 hover:border-cyan-500/30 inline-flex'
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='relative z-10 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-500 text-sm text-center md:text-left'>
              &copy; {new Date().getFullYear()} Pointzero. All rights reserved.
            </p>
            <nav aria-label="Footer legal" className='flex items-center gap-6 text-sm text-gray-500'>
              <Link to="/contact" className='hover:text-cyan-400 transition-colors'>Contact</Link>
              <a href="mailto:hi.pointzero@gmail.com" className='hover:text-cyan-400 transition-colors'>Email us</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
