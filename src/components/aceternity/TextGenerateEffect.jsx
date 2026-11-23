import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Aceternity Text Generate Effect — word-by-word fade + blur.
 * Pass exact heading string; optional accentWords for emphasis.
 * Default type color matches .zero logo wordmark (#F3F3F5).
 */
export function TextGenerateEffect({
  words,
  className,
  duration = 0.55,
  filter = true,
  accentWords = [],
  accentClassName = 'text-brand',
}) {
  const reduceMotion = useReducedMotion();
  const wordsArray = useMemo(() => words.trim().split(/\s+/), [words]);
  const accentSet = useMemo(
    () => new Set(accentWords.map((w) => w.toLowerCase())),
    [accentWords],
  );

  if (reduceMotion) {
    return (
      <span className={cn('text-ink', className)}>
        {wordsArray.map((word, idx) => {
          const isAccent = accentSet.has(word.toLowerCase());
          return (
            <span
              key={`${word}-${idx}`}
              className={isAccent ? accentClassName : undefined}
            >
              {word}
              {idx < wordsArray.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.span
      className={cn('inline', className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.055, delayChildren: 0.12 },
        },
      }}
    >
      {wordsArray.map((word, idx) => {
        const isAccent = accentSet.has(word.toLowerCase());
        return (
          <motion.span
            key={`${word}-${idx}`}
            className={cn(
              'inline-block',
              isAccent ? accentClassName : 'text-ink',
            )}
            variants={{
              hidden: {
                opacity: 0,
                filter: filter ? 'blur(7px)' : 'blur(0px)',
                y: 6,
              },
              visible: {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                transition: {
                  duration,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            {word}
            {idx < wordsArray.length - 1 ? '\u00A0' : ''}
          </motion.span>
        );
      })}
    </motion.span>
  );
}