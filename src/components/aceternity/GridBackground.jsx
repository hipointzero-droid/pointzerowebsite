import React from 'react';
import { cn } from '../../lib/utils';

/** Very light grid — used sparingly so the hero stays calm */
export function GridBackground({ className }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]',
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}