import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Aceternity UI — Card Spotlight (CSS spotlight, no WebGL)
 * https://ui.aceternity.com/components/card-spotlight
 */
export function CardSpotlight({
  children,
  className,
  radius = 280,
  color = 'rgba(139, 163, 255, 0.28)',
  ...props
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)`;

  return (
    <div
      className={cn(
        'group/spotlight relative h-full overflow-hidden rounded-2xl border border-white/[0.1] bg-neutral-950 p-7 transition-colors duration-300 hover:border-white/20 sm:p-8',
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {/* Dot grid — classic Aceternity card texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        aria-hidden
      />

      {/* Soft bottom wash */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
        aria-hidden
      />

      {/* Hover ring glow */}
      <div
        className={cn(
          'pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500',
          isHovering && 'opacity-100',
        )}
        style={{
          background:
            'linear-gradient(135deg, rgba(139, 163, 255,0.55), transparent 40%, transparent 60%, rgba(255,255,255,0.12))',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
        aria-hidden
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
