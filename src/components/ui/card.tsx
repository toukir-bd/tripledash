import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(
          "bg-white/[.3] rounded-[50%] py-10 px-12",
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