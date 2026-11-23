import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GavelIcon from '@mui/icons-material/Gavel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const INDUSTRIES = [
  { name: 'Healthcare', icon: <LocalHospitalIcon className="w-5 h-5" /> },
  { name: 'Finance', icon: <AccountBalanceIcon className="w-5 h-5" /> },
  { name: 'Education', icon: <SchoolIcon className="w-5 h-5" /> },
  { name: 'Logistics', icon: <LocalShippingIcon className="w-5 h-5" /> },
  { name: 'Retail', icon: <StorefrontIcon className="w-5 h-5" /> },
  { name: 'Travel', icon: <FlightTakeoffIcon className="w-5 h-5" /> },
  { name: 'Real Estate', icon: <HomeWorkIcon className="w-5 h-5" /> },
  { name: 'Legal & GovTech', icon: <GavelIcon className="w-5 h-5" /> },
  { name: 'Manufacturing', icon: <PrecisionManufacturingIcon className="w-5 h-5" /> },
  { name: 'Media & OTT', icon: <LiveTvIcon className="w-5 h-5" /> },
  { name: 'On-Demand', icon: <RestaurantIcon className="w-5 h-5" /> },
  { name: 'Social & Community', icon: <GroupsIcon className="w-5 h-5" /> },
];

export default function IndustriesSection() {
  const navigate = useNavigate();

  return (
    <section aria-labelledby="home-industries" className="relative border-t border-white/10 bg-black py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 text-brand">
            <span className="block w-10 h-px bg-brand/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">Industries</span>
          </div>
          <h2 id="home-industries" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            We know your{' '}
            <span className="italic font-serif text-brand">
              world.
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl">
            Twelve verticals, dozens of shipped products. Pick the playbook that
            already worked in your industry.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" variant="up" delay={1} className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.name}
                onClick={() => navigate('/industries')}
                className="group flex items-center gap-3 px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-left"
              >
                <span className="text-brand shrink-0">{ind.icon}</span>
                <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
                  {ind.name}
                </span>
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" variant="up" delay={2} className="mt-8">
          <button
            onClick={() => navigate('/industries')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white transition-colors"
          >
            See every industry we ship in
            <ArrowForwardIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}