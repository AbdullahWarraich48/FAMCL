import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PROFESSIONAL_SERVICES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Industries",
  heading: "Professional Services",
  subheading: "Clear finances for client-driven work.",
  description:
    "Financial and operational guidance for professional service firms, including law, consultancy, and architecture, focusing on profitability, time tracking, and partner accounting.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional services team in a meeting",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;
