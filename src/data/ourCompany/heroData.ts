import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const OUR_COMPANY_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Judgement-led advice built on professional responsibility",
  heading: "Our Story",
  subheading: "Built on judgement, shaped by responsibility.",
  description:
    "FAM Chartered Accountants exists to bring clarity where financial complexity creates risk. The firm has grown by focusing on work that withstands scrutiny rather than pursuing visibility or rapid expansion. Our approach prioritises careful judgement, disciplined processes, and responsible decision‑making.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Team of professionals meeting around a table outdoors",
  },

  featureCards: [
    { label: "Judgement-Led Advice" },
    { label: "Disciplined Processes" },
    { label: "Responsible Decision-Making" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

