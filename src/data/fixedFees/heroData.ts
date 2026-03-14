import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const FIXED_FEES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Judgement-led advice built on professional responsibility",
  heading: "Fixed Fees",
  subheading: "Clear pricing agreed in advance.",
  description:
    "Our fees are agreed in advance and linked to the scope of work and responsibility involved, not the outcome of the engagement. This approach ensures transparency and allows clients to make decisions without uncertainty around cost.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    alt: "Person handling multiple banknotes above a payment terminal",
  },

  featureCards: [
    { label: "Transparent Pricing" },
    { label: "Agreed in Advance" },
    { label: "No Surprise Bills" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients rely on our fixed-fee approach to plan confidently, knowing their accountancy costs are clear from the outset.",
  },
} as const;

