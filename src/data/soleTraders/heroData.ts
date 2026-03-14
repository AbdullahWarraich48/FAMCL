import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const SOLE_TRADERS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Helping new businesses start on the right foundation",
  heading: "Sole Traders",
  subheading: "Simple support for self‑employed work.",
  description:
    "Operating as a Sole Trader is often seen as simple, but small mistakes in record‑keeping, tax planning, or compliance can create unnecessary risks. We provide structured and tax‑compliant guidance for self‑employed individuals, helping you maintain clear financial records and stay fully compliant with HMRC requirements.",

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

