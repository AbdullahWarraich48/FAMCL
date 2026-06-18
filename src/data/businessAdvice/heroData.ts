import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const BUSINESS_ADVICE_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "Business Advice",
  subheading: "Clear guidance when decisions matter.",
  description:
    "We provide practical financial advice for real decisions — growth, restructuring, retirement strategy, and risk management — based on numbers, not opinions.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    alt: "Advisor reviewing financial reports and making notes with a laptop and calculator",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients rely on our advisory support for clear communication, practical insight, and dependable strategic guidance.",
  },
} as const;
