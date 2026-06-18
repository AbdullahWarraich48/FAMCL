import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CRYPTO_MODERN_INCOME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Crypto & Modern Income",
  subheading: "Simple tax advice for new income streams.",
  description:
    "We provide tax guidance for cryptocurrency and digital income, with transactions reviewed accurately and reporting handled correctly as rules evolve.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    alt: "Person writing in a notebook next to a laptop and calculator on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients rate our crypto and digital income support highly for clarity, accuracy, and practical guidance.",
  },
} as const;
