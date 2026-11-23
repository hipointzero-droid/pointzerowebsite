import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-white text-black hover:bg-neutral-200 active:scale-[0.98] focus-visible:ring-white/70',
        brand:
          'bg-brand text-black hover:bg-brand-soft active:scale-[0.98] focus-visible:ring-brand/60',
        outline:
          'border border-white/25 bg-transparent text-ink hover:border-white/45 hover:bg-white/[0.06] active:scale-[0.98] focus-visible:ring-white/40',
        ghost:
          'bg-transparent text-white/70 hover:text-ink hover:bg-white/[0.06] focus-visible:ring-white/30',
        link: 'rounded-none bg-transparent px-0 text-brand underline-offset-4 hover:underline focus-visible:ring-brand/50',
      },
      size: {
        default: 'h-11 px-7',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
));
Button.displayName = 'Button';

export { Button, buttonVariants };
