import { BadgeInfo, PawPrint, type LucideIcon } from "lucide-react";

import type { ButtonVariants } from "@/components/ui/Button";

export interface HeroContentButton {
  id: string;
  label: string;
  icon: LucideIcon;
  variant: ButtonVariants;
  action: () => void;
}
interface HeroContent {
  title: string;
  description: string;
  buttons: HeroContentButton[];
}

export const HERO_CONTENT: HeroContent = {
  title: "Everything Your Pet Needs. All in One Place.",
  description:
    "From everyday essentials to professional grooming, training, veterinary care, and more, Paws n' Play is here to make caring for your pet simple, joyful, and stress-free.",
  buttons: [
    {
      id: "shop-now",
      label: "Shop Now",
      icon: PawPrint,
      variant: "default",
      action: () =>
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "learn-more",
      label: "Learn More",
      icon: BadgeInfo,
      variant: "outline",
      action: () =>
        document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }),
    },
  ],
};
