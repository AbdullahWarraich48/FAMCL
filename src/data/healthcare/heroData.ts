import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const HEALTHCARE_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Healthcare",
  subheading: "Reliable advice for patient-focused organisations.",
  description:
    "Healthcare providers operate in a highly regulated environment where financial accuracy and compliance are essential. We provide specialist accounting and advisory support for GP practices, dental surgeries, clinics, and care homes, ensuring financial operations run smoothly while you focus on patient care.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=1400&q=80",
    alt: "Healthcare professional checking a patient's blood pressure",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisors" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "The clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;

