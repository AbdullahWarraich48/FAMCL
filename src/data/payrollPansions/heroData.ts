import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PAYROLL_PANSIONS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "Payroll & Pensions",
  subheading: "Your people paid properly.",
  description:
    "Managing payroll and pension obligations requires accuracy, consistency, and compliance with strict UK regulations. From salary payments to pension contributions, every detail must be handled correctly. We manage your payroll systems so employees are paid on time and your business remains fully compliant.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Person working on payroll and pension documents with a laptop and calculator",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our payroll and pensions support highly for accuracy, reliability, and clear communication.",
  },
};

