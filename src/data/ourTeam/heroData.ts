import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const OUR_TEAM_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Company",
  heading: "Our Team",
  description:
    "The team at FAM Chartered Accountants is structured around competence and accountability, not hierarchy.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Team members joining hands in a show of unity",
  },

  featureCards: [
    { label: "Professional judgement" },
    { label: "Continuous learning" },
    { label: "Awareness of regulatory change" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

