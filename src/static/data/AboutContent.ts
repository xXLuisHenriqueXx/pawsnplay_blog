import Cats from "@/assets/about/cats_about.png";

interface AboutContent {
  title: string;
  paragraphs: string[];
  image: string;
}

export const ABOUT_CONTENT: AboutContent = {
  title: "About Us",
  paragraphs: [
    "At Paws n' Play, we believe pets are more than companions — they're part of the family. That's why we created a place where pet parents can find trusted care, quality products, and a team that genuinely loves animals. From the moment you walk through our doors, our goal is to make both you and your pet feel welcomed, comfortable, and cared for.",
    "We started with a simple idea: taking care of a pet should feel less like a chore and more like an opportunity to give them the happy, healthy life they deserve. Over time, that idea grew into a complete pet care destination, bringing together the services, products, and expertise pet parents need throughout every stage of their companion's life.",
    "From professional grooming and veterinary care to training, boarding, and carefully selected pet essentials, we bring everyday pet care together in one convenient place. Whether your dog needs a fresh groom, your cat needs a wellness check, or you're looking for the right food or toy, our team is here to help you make confident choices for your pet.",
    "We know that every pet has their own personality, habits, and needs. That's why we believe great pet care should never be one-size-fits-all. Our team takes the time to understand each animal we care for, creating a calm and welcoming environment where pets can feel safe, comfortable, and genuinely cared for.",
    "Above all, Paws n' Play is about the bond between pets and the people who love them. We're committed to building lasting relationships with our customers, providing dependable care, honest guidance, and a little extra attention whenever it's needed. Because when your pet is happy, healthy, and well cared for, the whole family feels the difference.",
  ],
  image: Cats,
};
