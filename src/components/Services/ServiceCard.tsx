import { BadgeInfo } from "lucide-react";

import Button from "../ui/Button";

import type { ServicesContentItem } from "@/static/data/ServicesContent";
import { cn } from "@/lib/utils";

interface Props {
  data: ServicesContentItem;
  className?: string;
}

const ServiceCard = ({ data, className }: Props) => {
  return (
    <li
      className={cn(
        "group/card relative flex flex-col items-center justify-center w-full h-full min-h-80 aspect-square shrink-0 overflow-hidden rounded-4xl p-4 text-background text-center",
        className,
      )}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover -z-1"
        src={data.image}
        alt={data.name}
      />

      <h4 className="text-3xl font-bold">{data.name}</h4>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 h-full w-full p-4 bg-foreground/50 backdrop-blur-xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <div>
          <h4 className="text-3xl font-bold">{data.name}</h4>
          <p className="max-w-xl">{data.description}</p>
        </div>

        <Button className="w-full max-w-sm">
          <BadgeInfo /> Learn More
        </Button>
      </div>
    </li>
  );
};

export default ServiceCard;
