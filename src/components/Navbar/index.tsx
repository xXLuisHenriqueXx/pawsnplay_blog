import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Modal from "./Modal";
import DesktopLinks from "./DesktopLinks";

import { NAVBAR_LINKS } from "../../static/data/NavbarLinks";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 p-2 z-99">
      <nav className="flex flex-row items-center justify-between">
        <Button
          className="bg-foreground/75 backdrop-blur-lg"
          variant="ghost"
          aria-label="Paws n' Play - Back to top"
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Logo />
        </Button>

        <DesktopLinks items={NAVBAR_LINKS} />

        <Button
          className="md:hidden"
          variant="secondary"
          size="icon"
          onClick={() => setShowModal(!showModal)}
          aria-label={showModal ? "Close menu" : "Open menu"}
          aria-expanded={showModal}
          aria-controls="mobile-menu"
        >
          <div
            className={cn(
              "transition-transform duration-200 ease-in-out motion-reduce:transition-none",
              showModal ? "rotate-90" : "rotate-0",
            )}
          >
            {showModal ? <X /> : <Menu />}
          </div>
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          items={NAVBAR_LINKS}
        />

        <span className="hidden md:block w-12"></span>
      </nav>
    </header>
  );
};

export default Navbar;
