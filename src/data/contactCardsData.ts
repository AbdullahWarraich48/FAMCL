export const CONTACT_CARDS_SECTION = {
  title: "How Can We Help You?",
  description: "Get started with our professional accounting services in three simple ways",
};

export const CONTACT_CARDS = [
  {
    id: "consultation",
    imageSrc: "/assets/images/contact-consultation.png",
    imageAlt: "Office telephone on a desk",
    title: "Free Initial Consultation",
    description:
      "Call us today to arrange a free consultation and receive clear guidance tailored to your financial needs.",
    buttonLabel: "Book a Call",
    buttonHref: "#contact",
  },
  {
    id: "online",
    imageSrc: "/assets/images/contact-online.png",
    imageAlt: "Person having an online meeting on a laptop",
    title: "Meet Online",
    description:
      "Book a convenient online meeting with an experienced financial consultant, wherever you are in the UK.",
    buttonLabel: "Schedule Online",
    buttonHref: "#contact",
  },
  {
    id: "office",
    imageSrc: "/assets/images/contact-office.png",
    imageAlt: "Modern office interior with plants and seating",
    title: "Visit a Local Office",
    description:
      "Meet us in person at our registered office or arrange a face-to-face consultation at a convenient location.",
    buttonLabel: "Find Location",
    buttonHref: "#contact",
  },
] as const;
