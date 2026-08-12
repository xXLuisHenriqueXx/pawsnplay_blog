import Section from "../ui/Section";
import UserActions from "./UserActions";

import { HERO_CONTENT } from "@/static/data/HeroContent";

const Hero = () => {
  const { title, description, buttons } = HERO_CONTENT;

  return (
    <Section
      id="hero"
      className="items-center justify-center gap-y-8 min-h-dvh bg-hero bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-foreground/75 to-foreground"
        aria-hidden
      ></div>

      <article className="flex flex-col gap-y-2 w-full max-w-2xl text-background text-center z-1">
        <h1 className="text-4xl lg:text-5xl font-extrabold">{title}</h1>
        <p className="text-background/75">{description}</p>
      </article>

      <UserActions items={buttons} />
    </Section>
  );
};

export default Hero;
