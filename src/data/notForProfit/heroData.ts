import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const NOT_FOR_PROFIT_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Not-for-Profit",
  subheading: "Financial governance for organisations with a mission.",
  description:
    "Charities and not-for-profit organisations operate under strict governance and reporting requirements. We provide specialist accounting, regulation, and compliance support to help organisations maintain transparency, protect donor trust, and meet regulatory obligations.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80",
    alt: "Group of happy children smiling outdoors",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisors" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by charities and non-profits",
    description:
      "Clients consistently rate our support highly for clarity, compliance, and understanding of the not-for-profit sector.",
  },
} as const;

