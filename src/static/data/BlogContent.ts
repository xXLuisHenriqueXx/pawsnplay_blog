import Video from "@/assets/about/about_video.png";

export interface BlogContentArticle {
  id: string;
  title: string;
  text: string;
}
interface BlogContent {
  title: string;
  articles: BlogContentArticle[];
  image: string;
}

export const BLOG_CONTENT: BlogContent = {
  title: "From Our Blog",
  articles: [
    {
      id: "article-1",
      title: "How to Keep Your Pet Comfortable During Grooming",
      text: "Grooming is more than keeping your pet looking their best. Regular baths, brushing, nail care, and coat maintenance can support their overall comfort and wellbeing. In this guide, we share simple ways to make grooming a calmer and more positive experience for your pet.",
    },
    {
      id: "article-2",
      title: "5 Simple Ways to Keep Your Pet Active at Home",
      text: "Keeping pets active doesn't always require a long walk or a big backyard. Interactive toys, short training sessions, hide-and-seek games, and daily play can provide both physical exercise and mental stimulation. Discover easy activities you can introduce into your pet's routine.",
    },
    {
      id: "article-3",
      title: "Building a Healthier Routine for Your Pet",
      text: "A healthy pet routine starts with consistency. Balanced nutrition, regular exercise, preventive veterinary care, grooming, and plenty of quality time can make a meaningful difference over the years. Learn how small habits can help support your companion's long-term wellbeing.",
    },
    {
      id: "article-4",
      title: "Understanding Your Pet's Body Language",
      text: "Pets communicate constantly through their posture, expressions, movements, and behavior. Learning to recognize these signals can help you understand when your pet feels relaxed, excited, uncomfortable, or overwhelmed, allowing you to respond to their needs with greater confidence.",
    },
  ],
  image: Video,
};
