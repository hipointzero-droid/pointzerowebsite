import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { CardSpotlight } from './CardSpotlight';

/**
 * Aceternity UI — Card Hover Effect + Card Spotlight
 * Sliding highlight between cards + spotlight / dot-grid card shell.
 */
export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3',
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="group relative h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-1 block rounded-3xl bg-brand/20"
                layoutId="aiHoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.15 },
                }}
              />
            )}
          </AnimatePresence>

          <CardSpotlight className="relative z-10">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand shadow-[0_0_0_1px_rgba(139, 163, 255,0.3)] transition-all duration-300 group-hover:border-brand/80 group-hover:bg-brand/15 group-hover:text-brand-soft group-hover:shadow-[0_0_24px_rgba(139, 163, 255,0.35)]">
                {item.icon}
              </div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-600 transition-colors group-hover:text-neutral-400">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            <div className="mt-6 h-px w-10 bg-white/10 transition-all duration-300 group-hover:w-16 group-hover:bg-brand" />
          </CardSpotlight>
        </div>
      ))}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3
      className={cn(
        'text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl',
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p
      className={cn(
        'mt-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300',
        className,
      )}
    >
      {children}
    </p>
  );
}
