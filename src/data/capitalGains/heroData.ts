import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CAPITAL_GAINS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Practical Tax Support for Individuals and Families",
  heading: "Capital Gains & Property Tax",
  subheading: "Clear advice when you sell assets or property.",
  description:
    "Selling property or assets can result in unexpected tax bills if not managed properly. We calculate your Capital Gains Tax (CGT) on property and asset sales, ensuring allowances, reliefs, and deadlines are handled correctly. Our approach helps you avoid surprises and manage your responsibilities with confidence.",

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
};

