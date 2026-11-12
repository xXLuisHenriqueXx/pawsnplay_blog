import { useEffect, useRef, useState } from "react";
import { BadgeInfo } from "lucide-react";

import Button from "../ui/Button";

import type { ServicesContentItem } from "@/static/data/ServicesContent";
import { cn } from "@/lib/utils";

interface Props {
  data: ServicesContentItem;
  className?: string;
}

const ServiceCard = ({ data, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDownOutside = (event: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
    };
  }, [isOpen]);

  return (
    <li
      ref={cardRef}
      onClick={() => setIsOpen((prev) => !prev)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(
        "group/card relative flex flex-col items-center justify-center w-full h-full min-h-80 aspect-square shrink-0 cursor-pointer overflow-hidden rounded-4xl p-4 text-background text-center",
        className,
      )}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover -z-1"
        src={data.image}
        alt={data.name}
      />

      <h4 className="text-3xl font-bold">{data.name}</h4>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-y-4 bg-foreground/50 p-4 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover/card:pointer-events-auto group-hover/card:opacity-100",
          isOpen && "pointer-events-auto opacity-100",
        )}
      >
        <div>
          <h4 className="text-3xl font-bold">{data.name}</h4>
          <p className="max-w-xl">{data.description}</p>
        </div>

        <Button
          className="w-full max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <BadgeInfo /> Learn More
        </Button>
      </div>
    </li>
  );
};

export default ServiceCard;
