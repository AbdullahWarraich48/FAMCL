import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CAREERS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Judgement-led advice built on professional responsibility",
  heading: "Careers",
  subheading: "For professionals who value judgement over volume.",
  description:
    "FAM Chartered Accountants looks for professionals who prioritise careful judgement, professional responsibility, and disciplined work rather than volume alone. Our environment is suited to individuals who value accuracy, accountability, and thoughtful problem-solving.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    alt: "Business professionals shaking hands at a meeting table",
  },

  featureCards: [
    { label: "Professional Responsibility" },
    { label: "Judgement Over Volume" },
    { label: "Collaborative Culture" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients value the consistency, care, and professional judgement our people bring to every engagement.",
  },
} as const;

