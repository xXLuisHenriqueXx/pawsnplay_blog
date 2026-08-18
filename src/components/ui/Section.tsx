import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const Section = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn(
        "relative flex flex-col gap-y-4 w-full py-20 px-6",
        className,
      )}
      {...props}
    ></section>
  );
};

export default Section;
