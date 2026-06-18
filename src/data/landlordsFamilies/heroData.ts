import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const LANDLORDS_FAMILIES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Business Formation",
  heading: "Landlords & Families",
  subheading: "Property and personal tax made clear.",
  description:
    "Tax and planning support for individuals with property income and family financial arrangements, where long-term impact outweighs short-term decisions.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    alt: "Family couple sitting together on a sofa reviewing household finances",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Landlords and families rely on our support to manage property income, stay compliant, and plan with confidence.",
  },
} as const;
