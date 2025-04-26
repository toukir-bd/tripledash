import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const divVariants = cva(
  "rounded-[42px] py-10 px-12",
  {
    variants: {
      variant: {
        assigned: "bg-white/[.65] text-[#0C0D11]",
        inprogress: "bg-[#0051FF] text-white",
        reviewing: "bg-[#F08C00] text-white",
        completed: "bg-[#12B034] text-white",
        rejected: "bg-[#0C0D11]/[.07] text-[#0C0D11]/[.35]",
      },
    },
    defaultVariants: {
      variant: "assigned",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  asChild?: boolean;
}

const InfoCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, asChild, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(divVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

InfoCard.displayName = "InfoCard";

export { InfoCard };
