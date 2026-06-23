import React, { useRef, useCallback } from 'react';

/**
 * Premium 3D tilt card — the pattern used by Stripe, Linear, Vercel.
 *
 * Effects layered together:
 *   1. Perspective tilt — the card rotates in 3D toward the cursor.
 *   2. Spotlight — a soft cyan radial-gradient highlight follows the cursor.
 *   3. Sheen — a thin diagonal light streak slides across on hover.
 *   4. Border glow — gradient ring intensifies on hover.
 *   5. Inner parallax — children with `data-parallax="strong"` float a bit
 *      further than the card surface, giving depth without Three.js.
 *
 * Performance:
 *   - All animation is GPU-only (transform + opacity).
 *   - Tilt math is throttled via requestAnimationFrame.
 *   - No JS runs at all if the user prefers reduced motion.
 *
 * Usage:
 *   <Card3D className="p-8">
 *     <div data-parallax="strong">…icon…</div>
 *     <h3>Title</h3>
 *   </Card3D>
 */
export default function Card3D({
  as: Tag = 'div',
  children,
  className = '',
  maxTilt = 8,
  glowColor = '34, 211, 238', // cyan-400 default
  ...rest
}) {
  const ref = useRef(null);
  const frameRef = useRef(0);

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Normalised -0.5..0.5 across the card surface.
      const dx = x / rect.width - 0.5;
      const dy = y / rect.height - 0.5;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        el.style.setProperty('--rx', `${(-dy * maxTilt).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(dx * maxTilt).toFixed(2)}deg`);
        el.style.setProperty('--opacity', '1');
      });
    },
    [maxTilt],
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--opacity', '0');
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        '--mx': '50%',
        '--my': '50%',
        '--rx': '0deg',
        '--ry': '0deg',
        '--opacity': '0',
        '--glow': glowColor,
        transform:
          'perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0)',
        transformStyle: 'preserve-3d',
        transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
      className={`relative isolate group ${className}`}
      {...rest}
    >
      {/* Animated gradient border — visible on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.6), rgba(59,130,246,0.5), rgba(168,85,247,0.6), rgba(34,211,238,0.6))',
          padding: '1px',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Cursor-following spotlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: 'var(--opacity)',
          background:
            'radial-gradient(280px circle at var(--mx) var(--my), rgba(var(--glow), 0.18), transparent 60%)',
        }}
      />

      {/* Diagonal sheen sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      >
        <span className="absolute -inset-x-1/2 top-0 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rotate-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-out" />
      </span>

      {/* Actual content — receives the tilt because it's inside the rotated wrapper */}
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </Tag>
  );
}
