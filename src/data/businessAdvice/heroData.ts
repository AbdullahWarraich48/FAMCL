import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const BUSINESS_ADVICE_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "Business Advice",
  subheading: "Clear guidance when decisions matter.",
  description:
    "When critical business decisions arise, clear financial advice is key. We offer practical, data-driven insights for business growth, restructuring, retirement strategy, and risk management. Every recommendation is based on facts, not opinions, ensuring you understand the consequences before acting.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
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
};

