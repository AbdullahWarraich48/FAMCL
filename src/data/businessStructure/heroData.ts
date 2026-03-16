import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const BUSINESS_STRUCTURE_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "Business Structuring",
  subheading: "Building a foundation for growth.",
  description:
    "Choosing the right business structure is crucial for long-term success. Whether you are just starting, scaling, or planning an exit, we provide expert advice to ensure your business setup aligns with your goals, tax obligations, and risk tolerance.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    alt: "Business owners reviewing their company structure and plans with an adviser",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients value our structuring advice for clarity, tax efficiency, and practical guidance at every stage of growth.",
  },
};

