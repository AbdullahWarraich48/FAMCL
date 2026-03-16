import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PENSIONS_FUTURE_PLANNING_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Practical Tax Support for Individuals and Families",
  heading: "Pensions & Future Planning",
  subheading: "Plan today for peace of mind tomorrow.",
  description:
    "Planning for retirement is essential for long-term financial security. We help you understand your pension position and develop a strategy that aligns with your long-term goals. With clear, tax-efficient options, we help you secure a comfortable future.",

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
};

