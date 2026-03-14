import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CRYPTO_MODERN_INCOME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Practical Tax Support for Individuals and Families",
  heading: "Crypto & Modern Income",
  subheading: "Simple tax advice for new income streams.",
  description:
    "Cryptocurrency and digital income are rapidly evolving areas of taxation. We provide expert, up-to-date guidance to ensure your crypto transactions and digital income are reported accurately and in line with UK tax laws, keeping you protected from future tax issues.",

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
};

