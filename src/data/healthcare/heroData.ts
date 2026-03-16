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
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

