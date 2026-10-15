import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Modal from "./Modal";
import DesktopLinks from "./DesktopLinks";

import { NAVBAR_LINKS } from "../../static/data/NavbarLinks";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 p-2 z-99">
      <nav className="flex flex-row items-center justify-between">
        <Button
          className="bg-foreground/75 backdrop-blur-lg"
          variant="ghost"
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
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={showModal ? "open" : "closed"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {showModal ? <X /> : <Menu />}
            </motion.div>
          </AnimatePresence>
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
