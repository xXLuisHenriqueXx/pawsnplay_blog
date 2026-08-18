import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-2xl bg-transparent px-4 text-sm transition-colors outline-none placeholder:text-foreground/50 border border-border focus-visible:border-foreground aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
