import { useRef } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import useDismiss from "../../hooks/useDismiss";
import type { NavbarLink } from "../../static/data/NavbarLinks";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: NavbarLink[];
}

const Modal = ({ isOpen, onClose, items }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useDismiss({ ref, enabled: isOpen, onDismiss: onClose });

  return (
    <nav
      id="mobile-menu"
      ref={ref}
      className={cn(
        "absolute top-18 right-4 z-99 transition-all duration-300 ease-in-out",
        {
          "opacity-100 translate-y-0": isOpen,
          "opacity-0 -translate-y-2 pointer-events-none": !isOpen,
        },
      )}
      aria-label="Navegação mobile"
    >
      <Card className="rounded-4xl">
        <ul className="flex flex-col gap-2">
          {items.map(({ id, text, action }) => (
            <li key={id}>
              <Button
                className="w-full px-16 text-info"
                variant="ghost"
                onClick={() => {
                  action();
                  onClose();
                }}
              >
                {text}
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </nav>
  );
};

export default Modal;
