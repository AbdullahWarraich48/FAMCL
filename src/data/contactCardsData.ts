export const CONTACT_CARDS_SECTION = {
  titleBefore: "How Can ",
  titleHighlight: "We Help",
  titleAfter: " You?",
  description:
    "Get started with our professional accounting services in three simple ways",
};

export type ContactCardTheme = {
  panelBg: string;
  titleColor: string;
  buttonBorder: string;
  buttonText: string;
  buttonHoverBg: string;
};

export const CONTACT_CARDS = [
  {
    id: "consultation",
    imageSrc: "/assets/images/contact-consultation.png",
    imageAlt: "Office telephone on a desk",
    title: "Free Initial Consultation",
    description:
      "Call us today to arrange a free consultation & receive clear guidance tailored to your financial needs.",
    buttonLabel: "Book a Call",
    buttonHref: "#contact",
    theme: {
      panelBg: "bg-[#f0f7ff]",
      titleColor: "text-[#12254b]",
      buttonBorder: "border-[#1E63B3]",
      buttonText: "text-[#1E63B3]",
      buttonHoverBg: "hover:bg-[#1E63B3]/10",
    },
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
    theme: {
      panelBg: "bg-[#f0fdf4]",
      titleColor: "text-[#12254b]",
      buttonBorder: "border-[#16a34a]",
      buttonText: "text-[#16a34a]",
      buttonHoverBg: "hover:bg-[#16a34a]/10",
    },
  },
  {
    id: "office",
    imageSrc: "/assets/images/contact-office.png",
    imageAlt: "Modern office interior with plants and seating",
    title: "Visit Office",
    description:
      "Meet us in person at our registered office or arrange a face-to-face consultation.",
    buttonLabel: "Contact Us",
    buttonHref: "/Company/contact-us",
    theme: {
      panelBg: "bg-[#fff1f2]",
      titleColor: "text-[#12254b]",
      buttonBorder: "border-red-600",
      buttonText: "text-red-600",
      buttonHoverBg: "hover:bg-red-50",
    },
  },
] as const;
