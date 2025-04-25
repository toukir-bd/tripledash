import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(
          "bg-white/[.3] rounded-[50px] py-10 px-12 shadow-lg/[.035]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
export { Card }