import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const LIMITED_COMPANIES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Helping new businesses start on the right foundation",
  heading: "Limited Companies",
  subheading: "Structure, clarity, and room to grow.",
  description:
    "Operating a limited company brings greater opportunity but also greater responsibility. Directors must manage statutory obligations, tax planning, and regulatory compliance carefully. We provide structured accounting, tax, and compliance support to help limited companies operate confidently while protecting both the business and its directors.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Team of professionals collaborating around a laptop in a meeting room",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Limited company directors rely on our advice to keep their businesses compliant, efficient, and ready for growth.",
  },
} as const;

