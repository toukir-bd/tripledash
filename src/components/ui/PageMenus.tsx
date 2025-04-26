 
 import * as React from "react"
 import { cn } from "@/lib/utils"
 
 const PageMenus = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
   ({ className, ...props }, ref) => {
     return (
       <button className={cn(
           "flex items-center justify-center h-[46px] w-auto px-[25px] rounded-[46px] bg-transparent hover:bg-[#0C0D11]/[0.1] text-[#0C0D11]",
           className
         )}
         ref={ref}
         {...props}
       />
     )
   }
 )
 PageMenus.displayName = "PageMenus"
 export { PageMenus }