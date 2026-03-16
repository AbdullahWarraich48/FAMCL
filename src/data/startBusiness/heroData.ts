import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const START_BUSINESS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Helping new businesses start on the right foundation",
  heading: "Starting a Business",
  subheading: "Support for individuals establishing a business in the UK.",
  description:
    "Starting a business involves more than registering a company. Early decisions about structure, compliance, and financial management shape the long-term sustainability of your business. We provide structured support to help founders establish their business correctly from day one and avoid common mistakes that can create risk later.",

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

