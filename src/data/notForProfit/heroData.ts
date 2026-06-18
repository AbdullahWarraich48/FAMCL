import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const NOT_FOR_PROFIT_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Industries",
  heading: "Not-for-Profit",
  subheading: "Financial governance for organisations with a mission.",
  description:
    "Financial reporting, governance, and assurance services for charities and not-for-profit organisations, ensuring compliance with Charity Commission regulations and SORP.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80",
    alt: "Group of happy children smiling outdoors",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by charities and non-profits",
    description:
      "Clients consistently rate our support highly for clarity, compliance, and understanding of the not-for-profit sector.",
  },
} as const;
