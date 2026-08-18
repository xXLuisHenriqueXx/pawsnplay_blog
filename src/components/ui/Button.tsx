import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative flex shrink-0 flex-row items-center justify-center gap-4 text-sm font-medium outline-none transition-all duration-300 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "bg-foreground text-background hover:bg-background hover:text-foreground",
        outline:
          "border border-background text-background bg-transparent hover:bg-background hover:text-foreground-secondary",
        ghost:
          "text-background hover:text-foreground-secondary hover:bg-foreground/10",
      },
      size: {
        default: "h-12 px-4",
        "icon-sm": "size-8",
        "icon-md": "size-10",
        "icon-lg": "size-12 [&_svg]:size-6",
        "icon-xl": "size-14 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = "default" | "secondary" | "outline" | "ghost";
export type ButtonSizes =
  | "default"
  | "icon-sm"
  | "icon-md"
  | "icon-lg"
  | "icon-xl";

type Props = ButtonPrimitive.Props & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: Props) => {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
};

export default Button;
