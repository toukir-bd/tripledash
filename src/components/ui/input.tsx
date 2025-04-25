import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-md text-[#0C0D11] font-medium h-[52px] w-full px-[25px] rounded-[52px] bg-white border border-[#0C0D11]/[.15] hover:border-[#0051FF]/[.55] focus:border-[#0051FF]/[.55] focus-visible:shadow-[0_0_0_4px_rgba(0,81,255,0.1)] focus-visible:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
export { Input }