import { PawPrint } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-x-1 text-background">
      <PawPrint className="size-4 fill-background" />
      <h1 className="font-bold">Paws n' Play</h1>
    </div>
  );
};

export default Logo;
