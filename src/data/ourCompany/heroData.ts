import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const OUR_COMPANY_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Company",
  heading: "Our Story",
  subheading: "Built on judgement, shaped by responsibility.",
  description:
    "FAM Chartered Accountants exists to bring clarity where financial complexity creates risk. The firm has grown by doing work that holds up under scrutiny, not by chasing visibility.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Team of professionals meeting around a table outdoors",
  },

  featureCards: [
    { label: "Accuracy before speed" },
    { label: "Judgement before optimisation" },
    { label: "Responsibility before convenience" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

