import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const FIXED_FEES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Company",
  heading: "Fixed Fees",
  description:
    "Fees are agreed in advance and linked to scope and responsibility, not outcomes.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    alt: "Person handling multiple banknotes above a payment terminal",
  },

  featureCards: [
    { label: "Clear expectations" },
    { label: "Proper time allocation" },
    { label: "Objective advice" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients rely on our fixed-fee approach to plan confidently, knowing their accountancy costs are clear from the outset.",
  },
} as const;

