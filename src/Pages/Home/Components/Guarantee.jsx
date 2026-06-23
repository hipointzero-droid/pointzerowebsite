import React from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

import VerifiedIcon from '@mui/icons-material/Verified';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import KeyIcon from '@mui/icons-material/Key';
import StarIcon from '@mui/icons-material/Star';
import ShieldIcon from '@mui/icons-material/Shield';

const PROMISES = [
  {
    icon: <ScheduleIcon className="w-6 h-6" />,
    title: 'On time, or we credit',
    desc: "Miss the agreed delivery date? You get back 1% of the engagement fee for every week we slip — capped at 20%.",
  },
  {
    icon: <FactCheckIcon className="w-6 h-6" />,
    title: 'Try before you commit',
    desc: 'A 7-day no-risk trial on every engagement. If the team is not the right fit, walk away — no fee, no questions.',
  },
  {
    icon: <KeyIcon className="w-6 h-6" />,
    title: 'You own everything',
    desc: 'Source code, IP, prompts, evaluation harnesses, deployment scripts and documentation — yours, day one.',
  },
  {
    icon: <StarIcon className="w-6 h-6" />,
    title: 'Senior people, start to finish',
    desc: 'The engineers who scope your project are the engineers who ship it. No bait-and-switch, no juniors on the critical path.',
  },
  {
    icon: <ShieldIcon className="w-6 h-6" />,
    title: 'NDA-protected, always',
    desc: 'Mutual NDA is offered by default before the discovery call — and signed before a single line of code is written.',
  },
];

export default function Guarantee() {
  return (
    <section
      aria-labelledby="guarantee-heading"
      className="relative bg-gradient-to-b from-black via-gray-950 to-black py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <VerifiedIcon className="w-4 h-4 text-cyan-300" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">100% Guarantee</span>
          </div>
          <h2 id="guarantee-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The risk is{' '}
            <span className="italic font-serif bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              shared.
            </span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Five promises every Point Zero engagement is held to. Put in writing,
            in the contract, before kickoff.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROMISES.map((p, i) => (
            <AnimateOnScroll
              key={p.title}
              as="div"
              variant="up"
              delay={i % 3}
              className="group relative p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 ring-1 ring-cyan-500/30 mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll as="div" variant="up" delay={3} className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            ※ 95% of clients stay past the first engagement. 70% come back for a
            second. The promises above are why.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
