import React, { Suspense } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StarsCanvas from '../../../components/StarsLazy';
import CodeAnimation from '../../../components/CodeAnimation';
import { TextGenerateEffect } from '../../../components/aceternity/TextGenerateEffect';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { trackCTAClick } from '../../../lib/analytics';

const HERO_HEADING = 'AI, Web & Mobile Software Development Company in Nepal';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TopSection() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
    >
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <StarsCanvas />
        </div>
      </Suspense>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Copy column */}
          <div className="w-full text-center lg:text-left">
            <motion.div
              custom={0.05}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 flex justify-center lg:justify-start"
            >
              <Badge className="px-3.5 py-1.5">
                AI &amp; Software Engineering Partner · Kathmandu, Nepal
              </Badge>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.025em] sm:text-[2.25rem] lg:text-[2.65rem] xl:text-[3rem] xl:leading-[1.1]"
            >
              <TextGenerateEffect
                words={HERO_HEADING}
                accentWords={['Software', 'Development']}
                className="text-ink"
                accentClassName="text-brand"
                duration={0.48}
              />
            </h1>

            <motion.p
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-neutral-400 sm:text-base lg:mx-0"
            >
              Point Zero is the AI &amp; software engineering partner for ambitious teams.
              We ship <strong className="font-medium text-neutral-200">RAG chatbots</strong>,
              <strong className="font-medium text-neutral-200"> AI agents</strong>,
              <strong className="font-medium text-neutral-200"> web apps</strong> and
              <strong className="font-medium text-neutral-200"> mobile apps</strong> — production-grade,
              eval-tested, and built to convert.
            </motion.p>

            <motion.p
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-4 max-w-xl text-sm text-neutral-500 lg:mx-0"
            >
              Production AI, web & mobile delivery · Reply within 1 business day
            </motion.p>

            <motion.div
              custom={0.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            >
              <Button
                type="button"
                variant="default"
                size="lg"
                onClick={() => {
                  trackCTAClick('Book a Free Discovery Call', 'home_hero');
                  navigate('/contact');
                }}
                aria-label="Book a free discovery call with Point Zero"
              >
                Book a Free Discovery Call
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => navigate('/project')}
                aria-label="See Point Zero case studies"
              >
                See Case Studies
              </Button>
            </motion.div>

            <motion.div
              custom={0.72}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Follow Us
              </span>
              <span className="h-px w-8 bg-white/15" aria-hidden />
              <ul className="m-0 flex list-none gap-2 p-0">
                {[
                  { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: 'https://www.facebook.com/pointzero.com.np/', label: 'Facebook' },
                  { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: 'https://www.instagram.com/pointzero.com.np/', label: 'Instagram' },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Point Zero on ${social.label}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-neutral-400 transition-colors hover:border-white/25 hover:text-white"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Visual column — CodeAnimation kept, always beside copy on lg+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden min-h-[320px] w-full md:block"
          >
            <CodeAnimation variant="hero" />
          </motion.div>
        </div>

        {/* Stats — same copy, quieter row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.85 }}
          className="mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '15+', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs text-neutral-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}