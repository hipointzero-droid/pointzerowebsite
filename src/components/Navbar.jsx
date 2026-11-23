import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-500',
        scrolled || !onHome
          ? 'border-white/10 bg-black/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center" aria-label="Point Zero home">
          <img
            src={logo}
            alt="Point Zero — AI and software studio in Kathmandu, Nepal"
            width={180}
            height={96}
            decoding="async"
            className="h-12 w-auto object-contain opacity-95 transition-opacity group-hover:opacity-100 sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/industries', label: 'Industries' },
            { path: '/project', label: 'Projects' },
            { path: '/blog', label: 'Blog' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors',
                isActive(item.path) ? 'text-white' : 'text-neutral-400 hover:text-white',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          type="button"
          variant="default"
          size="sm"
          className="hidden lg:inline-flex"
          onClick={() => navigate('/contact')}
          aria-label="Get in touch — go to contact page"
        >
          Get in Touch
        </Button>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => navigate('/contact')}
            aria-label="Contact Point Zero"
          >
            Contact
          </Button>
          <button
            type="button"
            className="rounded-full p-2.5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => setisOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden',
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-transparent opacity-0',
        )}
      >
        <div className="space-y-0.5 px-4 py-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/industries', label: 'Industries' },
            { path: '/project', label: 'Projects' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setisOpen(false)}
              className={cn(
                'block rounded-lg px-4 py-3 text-[15px] font-medium transition-colors',
                isActive(item.path) ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}