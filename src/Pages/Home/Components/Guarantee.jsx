import React from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import { Badge } from '../../../components/ui/badge';

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
      className="relative border-t border-white/10 bg-neutral-950 py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="max-w-4xl mx-auto text-center mb-14">
          <Badge className="mb-6 px-3.5 py-1.5">
            <VerifiedIcon className="w-4 h-4 text-brand" />
            Delivery Promise
          </Badge>
          <h2 id="guarantee-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The risk is{' '}
            <span className="italic font-serif text-brand">
              shared.
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-lg max-w-2xl mx-auto">
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
              className="group relative p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-2xl bg-white/[0.04] text-brand ring-1 ring-white/10 mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll as="div" variant="up" delay={3} className="mt-12 text-center">
          <p className="text-sm text-neutral-500 italic">
            ※ 95% of clients stay past the first engagement. 70% come back for a
            second. The promises above are why.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}