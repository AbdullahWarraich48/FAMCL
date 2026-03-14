import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const LANDLORDS_FAMILIES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Helping new businesses start on the right foundation",
  heading: "Landlords & Families",
  subheading: "Property and personal tax made clear.",
  description:
    "Managing property income and family finances requires careful tax planning and long-term thinking. We provide structured tax and planning support for landlords and families, helping ensure property income, ownership structures, and reporting obligations are managed clearly and efficiently.",

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

