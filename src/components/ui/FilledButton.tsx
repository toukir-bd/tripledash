import * as React from "react"
import { cn } from "@/lib/utils"

const FilledButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button className={cn(
          "flex items-center justify-center h-[50px] w-[50px] rounded-[50px] bg-white/[.7] hover:bg-white transition-all cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FilledButton.displayName = "FilledButton"
export { FilledButton }