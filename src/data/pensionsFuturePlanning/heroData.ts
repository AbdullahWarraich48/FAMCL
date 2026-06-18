import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PENSIONS_FUTURE_PLANNING_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Pensions & Future Planning",
  subheading: "Plan today for peace of mind tomorrow.",
  description:
    "We help you understand and plan your pension position, with tax-efficient contributions and clear options so your future income becomes clearer.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    alt: "Older person reviewing financial documents at a table with a pen and notebook",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients value our retirement and pension planning advice for clarity, empathy, and dependable long-term guidance.",
  },
} as const;
