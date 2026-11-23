import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImage from '../../../assets/about/kathmandu-city.jpg';
import AnimateOnScroll from '../../../components/AnimateOnScroll';
import Picture from '../../../components/Picture';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

const OUTCOMES = [
  'Ship in weeks — RAG pilot in 14 days, MVP in 8–10 weeks',
  'Sub-2-second LCP and 95+ Lighthouse on every web launch',
  'Eval-gated AI releases — no "vibe-check" deploys to production',
];

export default function InnovateSection() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 sm:py-24"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <meta itemProp="name" content="About Point Zero" />
      <link itemProp="url" href="https://pointzero.com.np/#about" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-16">
          <AnimateOnScroll className="w-full lg:w-1/2" as="div" variant="left">
            <Badge className="mb-6 px-3.5 py-1.5">About Point Zero</Badge>

            <h2
              id="about-heading"
              className="text-balance text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.65rem]"
              itemProp="headline"
            >
              The AI &amp; Software Engineering Partner for{' '}
              <span className="text-brand">Ambitious Teams</span>
            </h2>

            <div itemProp="description">
              <p className="mt-6 text-base leading-[1.7] text-neutral-400 sm:text-lg">
                Point Zero is a Kathmandu-based digital product studio that ships
                production-grade AI, web and mobile software for startups and enterprises
                in Nepal, the US, UK and the UAE. We move fast — RAG pilots in 2–3 weeks,
                marketing sites in 2–4, MVPs in 8–10 — without trading away rigour.
              </p>

              <p className="mt-4 text-base leading-[1.7] text-neutral-400 sm:text-lg">
                Senior engineers on the build, fixed-price discovery, weekly demos, and
                evals or analytics tied to every release. The code lives in your GitHub
                from day one, with a runbook your team can actually use.
              </p>
            </div>

            <ul className="mt-8 space-y-3 border-t border-white/10 pt-8" aria-label="Point Zero delivery outcomes">
              {OUTCOMES.map((text) => (
                <li key={text} className="flex gap-3 text-[15px] leading-snug text-neutral-300 sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="mt-10"
              onClick={() => navigate('/about')}
              aria-label="Learn more about Point Zero"
            >
              Learn More About Us
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll className="relative w-full lg:w-1/2" delay={1} as="div" variant="right">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-black">
              {/* VS Code–style chrome — matches hero code panel */}
              <div className="relative flex items-center border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <div className="flex gap-2" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="pointer-events-none absolute inset-x-0 text-center font-mono text-sm text-neutral-500">
                  kathmandu.jpg
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Picture
                  src={aboutImage}
                  alt="Boudhanath Stupa in Kathmandu, Nepal — Point Zero’s home city"
                  width="1920"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center grayscale contrast-[1.1]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12">
                  <p className="font-mono text-sm font-medium tracking-wide text-white">Kathmandu</p>
                  <p className="mt-0.5 font-mono text-xs text-neutral-400">Est. 2022 · AI · Web · Mobile</p>
                </figcaption>
              </div>

              <div
                className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-neutral-500"
                aria-hidden
              >
                <span>UTF-8</span>
                <span>JPG · Grayscale</span>
                <span>Ln 1, Col 1</span>
              </div>
            </figure>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
