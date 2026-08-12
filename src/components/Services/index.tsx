import Section from "../ui/Section";
import Header from "../ui/Header";
import ServiceCard from "./ServiceCard";

import { SERVICES_CONTENT } from "@/static/data/ServicesContent";

const Services = () => {
  const { title, items } = SERVICES_CONTENT;

  return (
    <Section id="services" className="max-w-7xl mx-auto">
      <Header title={title} />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <ServiceCard
              key={item.id}
              className={
                isLast
                  ? "col-span-2 aspect-2/1 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:aspect-1/2"
                  : ""
              }
              data={item}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
