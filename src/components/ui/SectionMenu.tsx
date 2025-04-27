import * as React from "react"
import { cn } from "@/lib/utils"

const SectionMenu = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button className={cn(
          "flex items-center justify-center h-[50px] w-[50px] rounded-[50px] bg-white/[.5] hover:bg-white transition-all cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
SectionMenu.displayName = "SectionMenu"
export { SectionMenu }