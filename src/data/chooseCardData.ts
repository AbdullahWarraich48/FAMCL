import type { ChooseCardItem } from "@/Components/Home/ChooseCard";

const chooseFirmCards: ChooseCardItem[] = [
  {
    id: "local-focus",
    title: "Local Business Focus",
    description:
      "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
    buttonLabel: "Learn More",
    buttonHref: "/about",
    iconKey: "users",
    iconBg: "bg-blue-600",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover: "hover:bg-blue-50 hover:border-blue-400",
  },
  {
    id: "meet-us",
    title: "Come and Meet Us",
    description:
      "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
    buttonLabel: "Contact Us",
    buttonHref: "#contact",
    iconKey: "headset",
    iconBg: "bg-green-600",
    buttonBorder: "border-green-300",
    buttonText: "text-green-800",
    buttonHover: "hover:bg-green-50 hover:border-green-400",
  },
  {
    id: "switching",
    title: "Switching is Simple",
    description:
      "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
    buttonLabel: "Learn More",
    buttonHref: "/switching-accounts",
    iconKey: "refreshCw",
    iconBg: "bg-red-600",
    buttonBorder: "border-red-300",
    buttonText: "text-red-800",
    buttonHover: "hover:bg-red-50 hover:border-red-400",
  },
];

const cloudSoftwareCards: ChooseCardItem[] = [
  {
    id: "freeagent",
    title: "FreeAgent",
    description:
      "Cloud accounting for freelancers and small businesses.",
    buttonLabel: "Learn More",
    buttonHref: "/Agents/free-agent-cloud-accounts",
    imageSrc:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=240&h=80&fit=contain",
    imageAlt: "FreeAgent",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover: "hover:bg-blue-50 hover:border-blue-400",
  },
  {
    id: "quickbooks",
    title: "QuickBooks",
    description:
      "Simple, powerful accounting software giving you full control of your accounts 24/7.",
    buttonLabel: "Learn More",
    buttonHref: "/Agents/quick-books",
    imageSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=240&h=80&fit=contain",
    imageAlt: "QuickBooks",
    buttonBorder: "border-green-400",
    buttonText: "text-green-800",
    buttonHover: "hover:bg-green-50 hover:border-green-500",
  },
  {
    id: "iris",
    title: "IRIS",
    description:
      "Accounting and tax software for professionals and firms.",
    buttonLabel: "Learn More",
    buttonHref: "/Agents/iris",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=80&fit=contain",
    imageAlt: "IRIS",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover: "hover:bg-blue-50 hover:border-blue-400",
  },
];

export const CHOOSE_FIRM_SECTION = {
  sectionTitle: "Choose an Accounting Firm That Works for You",
  sectionDescription:
    "Managing a business comes with enough pressure your accounting shouldn't add to it. Our team takes care of your tax, bookkeeping, accounting, and payroll, so you can focus on growing with confidence. If your current accountant isn't meeting expectations, moving to us is straightforward and stress-free.",
  cards: chooseFirmCards,
};

export const CLOUD_SOFTWARE_SECTION = {
  sectionTitle: "Cloud accounting software to support your business.",
  sectionDescription:
    "We use trusted, easy-to-use cloud accounting tools that help you manage your finances efficiently and stay in control anytime, anywhere.",
  cards: cloudSoftwareCards,
};
