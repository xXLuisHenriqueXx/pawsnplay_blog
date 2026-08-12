import Button from "../ui/Button";

import type { HeroContentButton } from "@/static/data/HeroContent";

interface Props {
  items: HeroContentButton[];
}

const UserActions = ({ items }: Props) => {
  return (
    <div className="flex flex-row items-center gap-x-2 w-full max-w-2xl">
      {items.map(({ id, label, icon: Icon, variant, action }) => (
        <Button key={id} className="flex-1" variant={variant} onClick={action}>
          <Icon /> {label}
        </Button>
      ))}
    </div>
  );
};

export default UserActions;
