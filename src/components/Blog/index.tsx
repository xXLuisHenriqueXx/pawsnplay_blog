import Button from "../ui/Button";
import Header from "../ui/Header";
import Section from "../ui/Section";
import ArticleList from "./ArticleList";

import { BLOG_CONTENT } from "@/static/data/BlogContent";

const Blog = () => {
  const { title, articles, image } = BLOG_CONTENT;
  return (
    <Section id="blog" className="items-center bg-foreground/5">
      <div className="flex flex-col gap-y-4 max-w-7xl">
        <div className="flex flex-row gap-x-4 items-center justify-between">
          <Header title={title} />

          <Button
            className="px-16 border-foreground text-foreground hover:bg-foreground hover:text-background"
            variant="outline"
          >
            See All
          </Button>
        </div>

        <div className="flex flex-row gap-x-4 items-center">
          <img
            className="hidden xl:block flex-1 max-w-xl object-cover"
            src={image}
            alt="Blog"
          />

          <ArticleList items={articles} />
        </div>
      </div>
    </Section>
  );
};

export default Blog;
