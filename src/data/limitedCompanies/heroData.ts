import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const LIMITED_COMPANIES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Business Formation",
  heading: "Limited Companies",
  subheading: "Structure, clarity, and room to grow.",
  description:
    "Accounting, tax, and compliance support for UK limited companies, with emphasis on director responsibility, statutory obligations, and risk control.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Team of professionals collaborating around a laptop in a meeting room",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Limited company directors rely on our advice to keep their businesses compliant, efficient, and ready for growth.",
  },
} as const;
