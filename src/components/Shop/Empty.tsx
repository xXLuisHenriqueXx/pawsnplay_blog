import { Ban } from "lucide-react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 w-full h-120 border-2 border-dashed border-foreground-secondary/25 rounded-4xl text-foreground-secondary">
      <Ban className="size-8" />
      <p>No products found</p>
    </div>
  );
};

export default Empty;
