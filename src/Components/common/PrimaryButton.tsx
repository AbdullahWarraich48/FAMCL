"use client";

import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/Components/ui/button";

type PrimaryButtonProps = ComponentProps<typeof Button> & {
  children: ReactNode;
};

 const baseClasses =
   "bg-[#12254B] hover:bg-[#0f1f3d] text-white rounded-full px-12 py-7 text-xl font-semibold shadow-md transition-all duration-200";

 const PrimaryButton = ({ className, children, ...props }: PrimaryButtonProps) => {
   const mergedClasses = [baseClasses, className].filter(Boolean).join(" ");

   return (
     <Button className={mergedClasses} {...props}>
       {children}
     </Button>
   );
 };

 export default PrimaryButton;

