import React from 'react';
import { cn } from '../../lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-neutral-500 transition-colors duration-200 resize-none',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand/50 focus-visible:border-brand/40',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
