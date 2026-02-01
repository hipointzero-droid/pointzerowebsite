import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wraps children and animates them into view when they scroll into the viewport.
 * @param {string} variant - 'up' | 'left' | 'right' | 'scale'
 * @param {string} className - Additional classes
 * @param {string} as - HTML element or component ('div', 'section', etc.)
 * @param {number} delay - Stagger delay index (0-10) for child stagger
 */
export default function AnimateOnScroll({ children, className = '', as: Component = 'div', delay = 0, variant = 'up' }) {
  const [ref, isInView] = useScrollReveal({ rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  const delayClass = delay > 0 ? ` reveal--delay-${Math.min(delay, 10)}` : '';
  const visibleClass = isInView ? ' reveal--visible' : '';
  const variantClass = ['up', 'left', 'right', 'scale'].includes(variant) ? ` reveal--${variant}` : ' reveal--up';

  return (
    <Component
      ref={ref}
      className={`reveal${variantClass}${delayClass}${visibleClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
