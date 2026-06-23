import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { trackCTAClick } from '../../../lib/analytics';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SCENARIOS = [
  {
    id: 'idea',
    icon: <LightbulbIcon className="w-6 h-6" />,
    label: 'Just an idea',
    headline: "You have a problem worth solving. We'll pressure-test it.",
    desc: 'A 30-minute call, a one-page scope and a fixed price within 48 hours — or honest advice on why this is not the right time.',
    cta: 'Pressure-test my idea',
  },
  {
    id: 'prototype',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    label: 'Got a prototype',
    headline: 'Built it in Claude, Cursor or Lovable? We will engineer it for production.',
    desc: "We tell you what production really needs — auth, evals, observability, scaling — and ship the gap inside a fixed budget.",
    cta: 'Audit my prototype',
  },
  {
    id: 'mid-build',
    icon: <EngineeringIcon className="w-6 h-6" />,
    label: 'Mid-build',
    headline: 'In flight, behind schedule, or short a senior engineer?',
    desc: 'A senior engineer or designer embedded in your sprint inside a week — your tools, your standups, your code.',
    cta: 'Get senior throughput',
  },
  {
    id: 'live',
    icon: <TrendingUpIcon className="w-6 h-6" />,
    label: 'Live & scaling',
    headline: 'Already shipping. We harden, optimise and extend.',
    desc: 'Performance audits, cost optimisation, AI-bolt-ons and observability — applied to a product already in production.',
    cta: 'Audit & optimise',
  },
];

export default function ScenarioCTA() {
  const navigate = useNavigate();
  const [active, setActive] = useState('idea');
  const current = SCENARIOS.find((s) => s.id === active) || SCENARIOS[0];

  return (
    <section
      aria-labelledby="scenario-cta-heading"
      className="relative bg-black py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(34,211,238,0.08),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6 text-cyan-400">
            <span className="block w-10 h-px bg-cyan-400/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">Where you are</span>
            <span className="block w-10 h-px bg-cyan-400/60" aria-hidden="true" />
          </div>
          <h2 id="scenario-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            If you are serious about shipping,{' '}
            <span className="italic font-serif bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              let&apos;s talk this week.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Pick the one that sounds like you — we will tailor the conversation.
          </p>
        </AnimateOnScroll>

        {/* Scenario picker */}
        <AnimateOnScroll as="div" variant="up" delay={1} className="mt-10">
          <div role="tablist" aria-label="Project scenarios" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {SCENARIOS.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`scenario-panel-${s.id}`}
                  id={`scenario-tab-${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={`flex flex-col items-start gap-3 p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-cyan-500/15 to-blue-600/10 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-300' : 'text-gray-400'}>{s.icon}</span>
                  <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active scenario panel */}
          <div
            role="tabpanel"
            id={`scenario-panel-${current.id}`}
            aria-labelledby={`scenario-tab-${current.id}`}
            className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 border border-white/10 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                {current.headline}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{current.desc}</p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => {
                    trackCTAClick(`Scenario: ${current.label}`, 'home_scenario_cta');
                    navigate('/contact');
                  }}
                  className="group px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
                >
                  <span className="flex items-center gap-2">
                    {current.cta}
                    <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <p className="text-xs text-gray-500">
                  ✓ Talk to an engineer, not a salesperson · ✓ Reply within 1 business day · ✓ Free discovery call
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
