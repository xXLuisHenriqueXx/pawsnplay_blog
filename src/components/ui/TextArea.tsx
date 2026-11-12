import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm transition-colors outline-none placeholder:text-foreground/50 focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-error",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
