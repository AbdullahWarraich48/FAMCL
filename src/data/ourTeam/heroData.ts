import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const OUR_TEAM_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Judgement-led advice built on professional responsibility",
  heading: "Our Team",
  subheading: "Built on competence and accountability.",
  description:
    "The team at FAM Chartered Accountants is structured around competence and accountability rather than hierarchy. Each engagement is handled by professionals who understand UK tax and compliance frameworks and how regulatory rules apply in practice.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Team members joining hands in a show of unity",
  },

  featureCards: [
    { label: "Experienced Professionals" },
    { label: "Clear Accountability" },
    { label: "Regulatory Expertise" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

