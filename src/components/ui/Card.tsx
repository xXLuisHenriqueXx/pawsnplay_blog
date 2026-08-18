import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"div">;

const Card = ({ className, ...props }: Props) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "group flex flex-col gap-4 p-4 bg-background border border-border shadow-sm rounded-xl",
        className,
      )}
      {...props}
    />
  );
};

export default Card;
