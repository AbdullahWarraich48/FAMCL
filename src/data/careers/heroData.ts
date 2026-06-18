import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CAREERS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Company",
  heading: "Careers",
  description:
    "FAM Chartered Accountants looks for professionals who value judgement over volume.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    alt: "Business professionals shaking hands at a meeting table",
  },

  featureCards: [
    { label: "Attention to detail" },
    { label: "Comfort with responsibility" },
    { label: "Respect for regulatory standards" },
    { label: "Prefers solving complex problems" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients value the consistency, care, and professional judgement our people bring to every engagement.",
  },
} as const;

