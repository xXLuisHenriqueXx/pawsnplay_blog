import { Fragment } from "react/jsx-runtime";

import Separator from "../ui/Separator";

import type { BlogContentArticle } from "@/static/data/BlogContent";

interface Props {
  items: BlogContentArticle[];
}

const ArticleList = ({ items }: Props) => {
  return (
    <ul className="flex flex-1 flex-col gap-y-4">
      {items.map(({ id, title, text }, index) => (
        <Fragment key={id}>
          <li className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-foreground-secondary indent-8">{text}</p>
          </li>

          {index !== items.length - 1 && (
            <li role="presentation" aria-hidden="true" className="list-none">
              <Separator />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default ArticleList;
