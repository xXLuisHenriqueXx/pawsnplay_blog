import Button from "../ui/Button";

import type { NavbarLink } from "../../static/data/NavbarLinks";

interface Props {
  items: NavbarLink[];
}

const DesktopLinks = ({ items }: Props) => {
  return (
    <ul className="hidden md:flex flex-row items-center gap-0.5 p-2 bg-foreground/75 backdrop-blur-lg rounded-full">
      {items.map(({ id, text, action }) => (
        <li key={id}>
          <Button className="hover:text-info" variant="ghost" onClick={action}>
            {text}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default DesktopLinks;
