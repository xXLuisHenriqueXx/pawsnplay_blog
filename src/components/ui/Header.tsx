import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

const Header = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-x-2 h-12 text-foreground",
        className,
      )}
    >
      <PawPrint className="size-8 fill-foreground" />
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  );
};

export default Header;
