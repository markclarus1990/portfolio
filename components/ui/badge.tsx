import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/20 text-primary shadow-sm backdrop-blur-sm",
        secondary:
          "border-transparent bg-white/5 text-foreground/80 backdrop-blur-sm",
        outline: "text-foreground/80 border-white/10",
        success:
          "border-transparent bg-emerald-500/20 text-emerald-400 shadow-sm backdrop-blur-sm",
        glow: "border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_-3px] shadow-primary/30 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
