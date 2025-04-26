import * as React from "react"
import { cn } from "@/lib/utils"

const RoundedButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button className={cn(
          "flex items-center justify-center h-[50px] w-[50px] rounded-[50px] bg-transparent border border-[#0C0D11][.1] hover:bg-white/[.5] transition-all cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
RoundedButton.displayName = "Button"
export { RoundedButton }