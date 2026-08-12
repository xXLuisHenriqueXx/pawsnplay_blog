import Header from "../ui/Header";
import Section from "../ui/Section";

import { ABOUT_CONTENT } from "@/static/data/AboutContent";

const About = () => {
  const { title, paragraphs, image } = ABOUT_CONTENT;

  return (
    <Section id="about" className="max-w-7xl mx-auto">
      <Header title={title} />

      <div className="flex flex-row gap-x-4 items-center">
        <article className="flex flex-1 flex-col gap-y-2 text-foreground-secondary">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="indent-8">
              {paragraph}
            </p>
          ))}
        </article>

        <img
          className="hidden xl:block flex-1 max-w-xl object-cover -z-1"
          src={image}
          alt="About"
        />
      </div>
    </Section>
  );
};

export default About;
