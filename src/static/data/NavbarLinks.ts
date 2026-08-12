export interface NavbarLink {
  id: string;
  text: string;
  action: () => void;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    id: "shop",
    text: "Shop",
    action: () =>
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "services",
    text: "Services",
    action: () =>
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "about",
    text: "About Us",
    action: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "blog",
    text: "Blog",
    action: () =>
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "team",
    text: "Our Team",
    action: () =>
      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" }),
  },
];
