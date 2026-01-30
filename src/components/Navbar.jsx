import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10'
        : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to="/" className='flex items-center group'>
            <img src={logo} alt="Point Zero" className='h-14 transition-transform duration-300 group-hover:scale-105'/>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-1'>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              { path: '/project', label: 'Projects' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                  }
                  group
                `}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full
                  ${isActive(item.path) ? 'w-6' : 'w-0 group-hover:w-6'}
                `}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className='hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95'
            onClick={() => navigate("/contact")}
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className='lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors'
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className='bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-2'>
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/project', label: 'Projects' },
            { path: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setisOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                ${isActive(item.path)
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
