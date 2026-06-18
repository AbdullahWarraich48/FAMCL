import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CAPITAL_GAINS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Capital Gains & Property Tax",
  subheading: "Clear advice when you sell assets or property.",
  description:
    "We calculate Capital Gains Tax on property and asset sales, apply reliefs correctly, and manage reporting deadlines so unexpected tax bills are avoided.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    alt: "Person holding a small house model while using a calculator",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients value our clear communication, accuracy, and dependable support on complex tax matters.",
  },
} as const;
