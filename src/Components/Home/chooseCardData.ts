import type { ChooseCardItem } from "./ChooseCard";

const chooseFirmCards: ChooseCardItem[] = [
  {
    id: "local-focus",
    title: "Local Business Focus",
    description:
      "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
    buttonLabel: "Learn More",
    buttonHref: "/about",
    iconKey: "users",
    iconBg: "bg-[#1E63B3]",
    cardBg: "bg-[#f0f7ff]",
    titleClass: "text-[#12254b]",
    buttonBg: "bg-white/60",
    buttonBorder: "border-[#1E63B3]",
    buttonText: "text-[#1E63B3]",
    buttonHover: "hover:bg-[#1E63B3]/10",
  },
  {
    id: "meet-us",
    title: "Come and Meet Us",
    description:
      "We believe strong relationships matter. Meet our consultants in person, speak with us online, or discuss your requirements over the phone whatever suits you best.",
    buttonLabel: "Contact Us",
    buttonHref: "#contact",
    iconKey: "headset",
    iconBg: "bg-[#16a34a]",
    cardBg: "bg-[#f0fdf4]",
    titleClass: "text-[#12254b]",
    buttonBg: "bg-white/60",
    buttonBorder: "border-[#16a34a]",
    buttonText: "text-[#16a34a]",
    buttonHover: "hover:bg-[#16a34a]/10",
  },
  {
    id: "switching",
    title: "Switching is Simple",
    description:
      "Moving to a new accountant doesn't have to be stressful. Our team makes the transition simple, organised and stress-free, with no hidden fees and a fixed-fee support package.",
    buttonLabel: "Learn More",
    buttonHref: "/switching-accounts",
    iconKey: "refreshCw",
    iconBg: "bg-red-600",
    cardBg: "bg-[#fff1f2]",
    titleClass: "text-[#12254b]",
    buttonBg: "bg-white/60",
    buttonBorder: "border-red-600",
    buttonText: "text-red-600",
    buttonHover: "hover:bg-red-50",
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
    imageSrc: "/images/blog__freeagent-logo-og 1.png",
    imageAlt: "FreeAgent accounting software logo",
    cardBg: "bg-white",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover:
      "hover:border-[#1E63B3] hover:bg-[#1E63B3] hover:text-white",
  },
  {
    id: "quickbooks",
    title: "QuickBooks",
    description:
      "Simple, powerful accounting software giving you full control of your accounts 24/7.",
    buttonLabel: "Learn More",
    buttonHref: "/Agents/quick-books",
    imageSrc: "/images/Container (3).png",
    imageAlt: "QuickBooks accounting software logo",
    cardBg: "bg-white",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover:
      "hover:border-[#1E63B3] hover:bg-[#1E63B3] hover:text-white",
  },
  {
    id: "iris",
    title: "IRIS",
    description:
      "Accounting and tax software for professionals and firms.",
    buttonLabel: "Learn More",
    buttonHref: "/Agents/iris",
    imageSrc: "/images/iris-software-group 1.png",
    imageAlt: "IRIS accounting software logo",
    cardBg: "bg-white",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover:
      "hover:border-[#1E63B3] hover:bg-[#1E63B3] hover:text-white",
  },
  {
    id: "payroll-manager",
    title: "Payroll Manager",
    description:
      "Cloud payroll software to manage pay runs, pensions, and HMRC submissions with confidence.",
    buttonLabel: "Learn More",
    buttonHref: "/payroll-pansions",
    imageSrc: "/images/payroll-manager.jpg",
    imageAlt: "Payroll Manager software logo",
    cardBg: "bg-white",
    buttonBorder: "border-blue-300",
    buttonText: "text-blue-800",
    buttonHover:
      "hover:border-[#1E63B3] hover:bg-[#1E63B3] hover:text-white",
  },
];

export const CHOOSE_FIRM_SECTION = {
  sectionTitle: "Choose an Accounting Firm That Works for You",
  sectionTitleBefore: "Choose an Accounting Firm ",
  sectionTitleHighlight: "That Works for You",
  sectionDescription:
    "Managing a business comes with enough pressure your accounting shouldn't add to it. Our team takes care of your tax, bookkeeping, accounting, and payroll, so you can focus on growing with confidence. If your current accountant isn't meeting expectations, moving to us is straightforward and stress-free.",
  cards: chooseFirmCards,
};

export const CLOUD_SOFTWARE_SECTION = {
  sectionTitle: "Cloud accounting software to support your business.",
  sectionTitleBefore: "Cloud accounting software to ",
  sectionTitleHighlight: "support your business.",
  sectionDescription:
    "We use trusted, easy-to-use cloud accounting tools that help you manage your finances efficiently and stay in control anytime, anywhere.",
  cards: cloudSoftwareCards,
};
