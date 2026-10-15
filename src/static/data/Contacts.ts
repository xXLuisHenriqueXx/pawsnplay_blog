import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface Contact {
  id: string;
  name: string;
  description: string;
  value: string;
  icon: LucideIcon;
}

export const CONTACTS = [
  {
    id: "contact-1",
    name: "Email",
    description: "Our friendly team is here to help.",
    value: "hello@pawsnplay.com",
    icon: Mail,
  },
  {
    id: "contact-2",
    name: "Live chat",
    description: "Our friendly team is here to help.",
    value: "Start new chat",
    icon: MessageCircle,
  },
  {
    id: "contact-3",
    name: "Office",
    description: "Come say hello at our office HQ.",
    value: "123, Yaya Abatan st, Ogba Lagos.",
    icon: MapPin,
  },
  {
    id: "contact-4",
    name: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    value: "+234 901234 384",
    icon: Phone,
  },
];
