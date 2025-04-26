 import * as React from "react"
 import { cn } from "@/lib/utils"
 
 const Tags = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
   ({ className, ...props }, ref) => {
     return (
       <div className={cn(
           "flex items-center justify-center h-[36px] w-auto px-[15px] rounded-[40px] bg-[#0C0D11]/[.05]",
           className
         )}
         ref={ref}
         {...props}
       />
     )
   }
 )
 Tags.displayName = "Tags"
 export { Tags }