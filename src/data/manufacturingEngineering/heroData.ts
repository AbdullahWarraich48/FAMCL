import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const MANUFACTURING_ENGINEERING_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Industries",
  heading: "Manufacturing & Engineering",
  subheading: "Numbers that support growth and efficiency.",
  description:
    "Financial management and advisory for UK manufacturing and engineering firms, focusing on cost control, R&D tax credits, and inventory management.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1549563316-5384a923453e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Engineering blueprint and manufacturing planning on screen",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;
