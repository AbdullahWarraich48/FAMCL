import * as React from "react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { id?: string }
>(({ className, type = "checkbox", id, ...props }, ref) => (
  <input
    type={type}
    id={id}
    ref={ref}
    className={cn(
      "h-4 w-4 shrink-0 rounded border border-slate-300 text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
