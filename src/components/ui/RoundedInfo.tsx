 import * as React from "react"
 import { cn } from "@/lib/utils"
 
 const RoundedInfo = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
   ({ className, ...props }, ref) => {
     return (
       <div className={cn(
           "flex items-center justify-center h-[50px] w-[50px] rounded-[50px] bg-[#0C0D11]/[.07]",
           className
         )}
         ref={ref}
         {...props}
       />
     )
   }
 )
 RoundedInfo.displayName = "RoundedInfo"
 export { RoundedInfo }