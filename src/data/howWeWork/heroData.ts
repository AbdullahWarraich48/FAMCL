import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const HOW_WE_WORK_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Judgement-led advice built on professional responsibility",
  heading: "How We Work",
  subheading: "A structured approach designed to reduce risk.",
  description:
    "FAM Chartered Accountants follows a structured but flexible working model designed to reduce risk rather than maximise throughput. Our approach ensures clients understand their financial position clearly before making decisions.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=1200&q=80",
    alt: "Person reviewing financial paperwork with a calculator and coffee on the desk",
  },

  featureCards: [
    { label: "Judgement-Led Advice" },
    { label: "Structured Processes" },
    { label: "Risk-Focused Approach" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

