import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const SOLE_TRADERS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Business Formation",
  heading: "Sole Traders",
  subheading: "Simple support for self-employed work.",
  description:
    "Ongoing tax and compliance support for self-employed individuals operating under UK Sole Trader rules, where simplicity often hides risk.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1200&q=80",
    alt: "Calculator, receipts, and paperwork on a desk representing sole trader finances",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Sole traders rely on our guidance to keep their records accurate, compliant, and ready for HMRC review.",
  },
} as const;
