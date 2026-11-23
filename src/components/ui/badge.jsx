import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border text-xs font-medium tracking-wide',
  {
    variants: {
      variant: {
        default: 'border-white/15 bg-white/[0.04] text-white/70 backdrop-blur-md',
        brand: 'border-brand/30 bg-brand/10 text-brand backdrop-blur-md',
        outline: 'border-white/20 bg-transparent text-ink-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
