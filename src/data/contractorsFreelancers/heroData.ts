import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CONTRACTORS_FREELANCERS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Helping new businesses start on the right foundation",
  heading: "Contractors & Freelancers",
  subheading: "Stay compliant without the stress.",
  description:
    "Contractors and freelancers operate in an environment where tax rules and employment status regulations can change frequently. We provide compliance and tax support designed for individuals working under contracts or freelance arrangements, helping ensure your structure and reporting remain aligned with current regulations.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Contractor reviewing charts and analytics on a laptop",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Independent professionals rely on our support to stay compliant, manage status, and avoid unexpected tax issues.",
  },
} as const;

