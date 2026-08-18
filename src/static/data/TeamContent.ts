import Olivia from "@/assets/team/olivia.png";
import Phoenix from "@/assets/team/phoenix.png";
import Lana from "@/assets/team/lana.png";
import Demi from "@/assets/team/demi.png";

export interface TeamContentMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamContent {
  title: string;
  members: TeamContentMember[];
}

export const TEAM_CONTENT: TeamContent = {
  title: "Our Team",
  members: [
    {
      id: "member-1",
      name: "Dr. Olivia Rhye",
      role: "Senior Veterinarian",
      description:
        "Leads veterinary care and oversees each pet's health and wellbeing.",
      image: Olivia,
    },
    {
      id: "member-2",
      name: "Phoenix Baker",
      role: "Asst. Veterinarian",
      description:
        "Supports consultations, treatments, and routine preventive care.",
      image: Phoenix,
    },
    {
      id: "member-3",
      name: "Lana Steiner",
      role: "Resident Veterinarian",
      description:
        "Provides compassionate care while supporting daily clinical routines.",
      image: Lana,
    },
    {
      id: "member-4",
      name: "Demi Wilkinson",
      role: "Intern Veterinarian",
      description:
        "Assists the veterinary team with examinations and patient care.",
      image: Demi,
    },
  ],
};
