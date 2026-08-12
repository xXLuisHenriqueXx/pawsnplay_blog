import Grooming from "@/assets/services/grooming.png";
import Boarding from "@/assets/services/boarding.png";
import Training from "@/assets/services/training.png";
import Veterinary from "@/assets/services/veterinary.png";
import Adoption from "@/assets/services/adoption.png";

export interface ServicesContentItem {
  id: string;
  name: string;
  description: string;
  image: string;
}
interface ServicesContent {
  title: string;
  items: ServicesContentItem[];
}

export const SERVICES_CONTENT: ServicesContent = {
  title: "Services",
  items: [
    {
      id: "service-1",
      name: "Grooming",
      description:
        "Professional baths, brushing, nail trimming, and grooming designed to keep your pet clean, comfortable, and looking their best.",
      image: Grooming,
    },
    {
      id: "service-2",
      name: "Boarding",
      description:
        "A safe and comfortable stay with attentive care, supervised playtime, and plenty of attention while you're away.",
      image: Boarding,
    },
    {
      id: "service-3",
      name: "Training",
      description:
        "Positive reinforcement training that helps build confidence, improve behavior, and strengthen the bond between pets and their families.",
      image: Training,
    },
    {
      id: "service-4",
      name: "Veterinary",
      description:
        "Preventive care, wellness check-ups, vaccinations, and professional guidance to help your pet live a healthier, happier life.",
      image: Veterinary,
    },
    {
      id: "service-5",
      name: "Adoption",
      description:
        "Helping pets find loving homes by connecting them with families ready to provide the care, patience, and companionship they deserve.",
      image: Adoption,
    },
  ],
};
