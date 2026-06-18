import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const BUSINESS_STRUCTURE_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "Business Structuring",
  subheading: "Building a foundation for growth.",
  description:
    "We provide expert advice on choosing and implementing the right legal and tax structure — whether you are starting up, scaling, or planning an exit.",

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
} as const;
