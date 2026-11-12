import Section from "../ui/Section";
import UserActions from "./UserActions";

import { HERO_CONTENT } from "@/static/data/HeroContent";

const Hero = () => {
  const { title, description, buttons } = HERO_CONTENT;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Section
      id="hero"
      aria-label="Hero"
      className="relative items-center justify-center gap-y-8 min-h-dvh overflow-hidden"
    >
      <img
        src={`${baseUrl}hero/background_homepage.webp`}
        srcSet={`${baseUrl}hero/background_homepage-mobile.webp 768w, ${baseUrl}hero/background_homepage.webp 1456w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        width={1456}
        height={816}
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover -z-2"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-foreground/75 to-foreground -z-1"
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
