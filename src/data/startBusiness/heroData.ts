import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const START_BUSINESS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Business Formation",
  heading: "Starting a Business",
  subheading:
    "Support for individuals establishing a business in the UK with Secretarial services",
  description:
    "Focused on preventing early-stage structural, tax, and compliance errors that commonly affect sustainability — covering both statutory requirements and operational readiness.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern office building viewed from below",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisors" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Founders rely on our advice to set up their businesses with clarity, compliance, and confidence from day one.",
  },
} as const;
