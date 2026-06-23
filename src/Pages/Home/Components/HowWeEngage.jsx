import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { trackCTAClick } from '../../../lib/analytics';

import GroupsIcon from '@mui/icons-material/Groups';
import LockClockIcon from '@mui/icons-material/LockClock';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MODELS = [
  {
    no: '01',
    title: 'Dedicated Team',
    cadence: 'Monthly retainer',
    headline: 'A senior squad, plugged in this week',
    desc: 'A 2–8 person team — engineers, designer, PM — embedded in your standups, sprints and Slack. Long-term ownership of a product or platform.',
    bullets: ['Senior engineers, no juniors', 'Same team start to finish', 'Pay only for who works'],
    icon: <GroupsIcon className="w-7 h-7" />,
    gradient: 'from-cyan-500/15 to-blue-600/15',
    accent: 'text-cyan-300',
    fit: 'Best for funded startups and product teams scaling capacity.',
  },
  {
    no: '02',
    title: 'Fixed Scope',
    cadence: 'Per project',
    headline: 'A milestone, a price, a date',
    desc: 'You bring a brief, we return a one-page scope and a fixed price within 48 hours. MVP, redesign or feature module — shipped on a calendar.',
    bullets: ['One-page scope in 48 hours', 'Fixed price, fixed date', 'Weekly demos until launch'],
    icon: <LockClockIcon className="w-7 h-7" />,
    gradient: 'from-emerald-500/15 to-green-600/15',
    accent: 'text-emerald-300',
    fit: 'Best for MVPs, redesigns and well-defined modules.',
  },
  {
    no: '03',
    title: 'Staff Augmentation',
    cadence: 'Hourly or monthly',
    headline: 'Plug a skill gap, not a team',
    desc: 'One engineer or designer who slots into your existing process — your tools, your sprints, your codebase. We cover holidays, on-call and ramp.',
    bullets: ['3–5 day embed', 'Your tools, your process', 'NDA from day zero'],
    icon: <EngineeringIcon className="w-7 h-7" />,
    gradient: 'from-purple-500/15 to-fuchsia-600/15',
    accent: 'text-purple-300',
    fit: 'Best for in-house teams that need senior throughput now.',
  },
  {
    no: '04',
    title: 'AI Discovery Sprint',
    cadence: '2-week engagement',
    headline: 'From idea to working POC',
    desc: 'A two-week sprint that ends with a live AI prototype, an evaluation report and a go/no-go signal. The fastest way to de-risk an AI bet.',
    bullets: ['Working POC in 2 weeks', 'Evaluation harness included', 'Roadmap if it ships'],
    icon: <HandshakeIcon className="w-7 h-7" />,
    gradient: 'from-orange-500/15 to-pink-600/15',
    accent: 'text-orange-300',
    fit: 'Best for founders and product leads exploring AI use cases.',
  },
];

export default function HowWeEngage() {
  const navigate = useNavigate();

  return (
    <section aria-labelledby="engage-heading" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-6 text-cyan-400">
            <span className="block w-10 h-px bg-cyan-400/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">How we engage</span>
          </div>
          <h2 id="engage-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pick the shape that{' '}
            <span className="italic font-serif bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              fits the build.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl">
            Four engagement models, one bar for quality. Switch shape any time —
            we adapt to the work, not the other way round.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MODELS.map((m, i) => (
            <AnimateOnScroll
              key={m.no}
              as="article"
              variant="up"
              delay={i % 2}
              className={`group relative p-7 bg-gradient-to-br ${m.gradient} border border-white/10 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`inline-flex p-3 rounded-2xl bg-white/[0.05] ring-1 ring-white/10 ${m.accent}`}>
                  {m.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-gray-500">{m.no}</div>
                  <div className="text-xs font-semibold text-gray-400 mt-1">{m.cadence}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{m.title}</h3>
              <p className={`text-sm font-medium ${m.accent} mb-4`}>{m.headline}</p>
              <p className="text-gray-300 leading-relaxed mb-5">{m.desc}</p>

              <ul className="space-y-2 mb-5">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-2 block w-1 h-1 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-gray-500 italic">{m.fit}</p>
                <button
                  onClick={() => {
                    trackCTAClick(`Engage: ${m.title}`, 'home_engagement_models');
                    navigate('/contact');
                  }}
                  className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5 transition-colors"
                >
                  Talk to us
                  <ArrowForwardIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
