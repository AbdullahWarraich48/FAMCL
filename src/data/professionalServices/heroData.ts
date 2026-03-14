import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PROFESSIONAL_SERVICES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Professional\nServices",
  subheading: "Clear finances for client-driven work.",
  description:
    "Professional service firms rely on their expertise to drive success. We provide financial and operational guidance to ensure your firm’s profitability remains strong, focusing on time tracking, project costing, partner accounting, and tax efficiency.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional services team in a meeting",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisors" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "The clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;

