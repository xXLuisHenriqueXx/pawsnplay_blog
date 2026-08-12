import Button from "../ui/Button";

import type { ShopContentFilter } from "@/static/data/ShopContent";
import { cn } from "@/lib/utils";

interface Props {
  items: ShopContentFilter[];
  active: string;
  setActive: (id: string) => void;
}

const Filters = ({ items, active, setActive }: Props) => {
  return (
    <ul className="flex flex-row items-center gap-x-1 w-full max-w-xl mx-auto">
      {items.map(({ id, label }) => (
        <li key={id} className="flex-1">
          <Button
            className={cn(
              "w-full rounded-2xl hover:bg-foreground text-foreground hover:text-background",
              active === id && "bg-foreground text-background",
            )}
            onClick={() => setActive(id)}
          >
            {label}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
