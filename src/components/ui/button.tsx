import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[52px] whitespace-nowrap font-medium transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        normal: "bg-transparent text-slate-800 hover:bg-slate-200 border border-[#0C0D11]/[.15]" ,
        default: "bg-slate-800 text-white hover:bg-slate-900",
        primary: "bg-blue-800 text-white hover:bg-slate-900",
        success: "bg-green-800 text-white hover:bg-green-9000",
        warning: "bg-orange-800 text-white hover:bg-orange-900",
        danger: "bg-red-800 text-white hover:bg-red-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[52px] px-10 py-2 text-[16px]",
        sm: "h-9 rounded-md px-3 text-[14px]",
        lg: "h-11 rounded-md px-8 text-[16px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };