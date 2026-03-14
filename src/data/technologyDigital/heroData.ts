import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const TECHNOLOGY_DIGITAL_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Technology &\nDigital",
  subheading: "Support for fast-moving businesses.",
  description:
    "The technology sector moves quickly, and financial clarity is essential for sustainable growth. We provide strategic financial support for tech startups and scale-ups, helping businesses manage R&D incentives, funding rounds, and employee share schemes while maintaining strong financial discipline.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    alt: "Digital network and technology visualization",
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

