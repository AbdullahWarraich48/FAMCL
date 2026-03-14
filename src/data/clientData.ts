export type ClientReview = {
  color: "blue" | "green" | "red";
  text: string;
  name: string;
  role: string;
  avatarUrl?: string;
  rating: number;
};

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    color: "blue",
    rating: 5,
    text: "Professional, responsive, and extremely knowledgeable. Everything was explained clearly and handled efficiently. Highly recommend their services.",
    name: "Sarah M.",
    role: "Small Business Owner",
    avatarUrl: "https://i.pravatar.cc/80?img=5",
  },
  {
    color: "green",
    rating: 5,
    text: "Switching from our previous accountant was seamless. The level of personal attention we receive is exceptional.",
    name: "Sarah M.",
    role: "Small Business Owner",
    avatarUrl: "https://i.pravatar.cc/80?img=12",
  },
  {
    color: "red",
    rating: 5,
    text: "They made tax feel simple and stress-free. The team went above and beyond to ensure I understood every step of the process.",
    name: "Sarah M.",
    role: "Small Business Owner",
    avatarUrl: "https://i.pravatar.cc/80?img=32",
  },
];
