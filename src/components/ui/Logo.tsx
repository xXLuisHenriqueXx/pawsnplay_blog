import { PawPrint } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-x-1 text-background">
      <PawPrint className="size-4 fill-background" aria-hidden="true" />
      <span className="font-bold text-base">Paws n' Play</span>
    </div>
  );
};

export default Logo;
