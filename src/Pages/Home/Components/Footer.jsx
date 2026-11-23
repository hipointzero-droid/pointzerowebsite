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
import { Button } from '../../../components/ui/button';

export default function Footer() {
  const navigate = useNavigate();

  const services = [
    { name: 'AI Development Company in Nepal', path: '/services/ai-development-nepal' },
    { name: 'RAG Chatbot Development', path: '/services/rag-chatbot-development' },
    { name: 'Web Development in Nepal', path: '/services/web-development-nepal' },
    { name: 'Mobile App Development in Nepal', path: '/services/mobile-app-development-nepal' },
    { name: 'MVP Development', path: '/services/mvp-development' },
    { name: 'UI/UX Design in Nepal', path: '/services/ui-ux-design-nepal' },
    { name: 'DevOps & Cloud in Nepal', path: '/services/devops-cloud-nepal' },
  ];

  const hireTeam = [
    { name: 'AI / LLM Engineers', path: '/services/ai-development-nepal' },
    { name: 'RAG Engineers', path: '/services/rag-chatbot-development' },
    { name: 'Flutter Developers', path: '/services/mobile-app-development-nepal' },
    { name: 'React / Next.js Developers', path: '/services/web-development-nepal' },
    { name: 'UI/UX Designers', path: '/services/ui-ux-design-nepal' },
    { name: 'DevOps / SRE Engineers', path: '/services/devops-cloud-nepal' },
    { name: 'Founding Engineers (MVP)', path: '/services/mvp-development' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Projects', path: '/project' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className='relative bg-neutral-950 overflow-hidden'>
      <div className='relative z-10 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <AnimateOnScroll className='flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:border-white/20' as="div" variant="scale">
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl lg:text-3xl font-bold text-white'>
                Ready to Start Your Project?
              </h3>
              <p className='mt-2 text-neutral-400'>
                Get in touch with us for a free consultation and quote.
              </p>
            </div>
            <Button
              type="button"
              size="lg"
              onClick={() => navigate("/contact")}
              className="group"
            >
              <span>Get Free Estimation</span>
              <ArrowForwardIcon className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </AnimateOnScroll>
        </div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

          <div className='lg:col-span-1'>
            <Link to="/" className='inline-block' aria-label="Point Zero — Home">
              <img
                src={logo}
                alt="Point Zero — AI and software studio in Kathmandu, Nepal"
                className='h-16 w-auto object-contain'
                width="251"
                height="135"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className='mt-6 text-neutral-400 leading-relaxed'>
              Point Zero is a digital product studio in Nepal. We design and ship modern websites,
              mobile apps and custom software for ambitious teams.
            </p>

            <address className='not-italic mt-8 space-y-4'>
              <a href="mailto:hi.pointzero@gmail.com" className='flex items-center gap-3 text-neutral-400 hover:text-brand transition-colors'>
                <EmailIcon className='w-5 h-5' aria-hidden="true" />
                <span>hi.pointzero@gmail.com</span>
              </a>
              <a href="tel:+9779860486269" className='flex items-center gap-3 text-neutral-400 hover:text-brand transition-colors'>
                <PhoneIcon className='w-5 h-5' aria-hidden="true" />
                <span>+977 986-0486269</span>
              </a>
              <div className='flex items-start gap-3 text-neutral-400'>
                <LocationOnIcon className='w-5 h-5 shrink-0' aria-hidden="true" />
                <span>Kathmandu, Nepal</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Our Services</h3>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className='text-neutral-400 hover:text-brand transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Hire Developer Team</h3>
            <ul className='space-y-3'>
              {hireTeam.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className='text-neutral-400 hover:text-brand transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-neutral-400 hover:text-brand transition-colors inline-flex items-center gap-2 group'
                  >
                    <span className='w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

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
                      aria-label={`Point Zero on ${social.label}`}
                      className='p-2.5 text-neutral-400 bg-white/[0.03] rounded-lg transition-all duration-300 hover:bg-white/[0.06] hover:text-brand border border-white/10 hover:border-white/20 inline-flex'
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

      <div className='relative z-10 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-neutral-500 text-sm text-center md:text-left'>
              &copy; {new Date().getFullYear()} Point Zero. All rights reserved.
            </p>
            <nav aria-label="Footer legal" className='flex items-center gap-6 text-sm text-neutral-500'>
              <Link to="/contact" className='hover:text-brand transition-colors'>Contact</Link>
              <a href="mailto:hi.pointzero@gmail.com" className='hover:text-brand transition-colors'>Email us</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}