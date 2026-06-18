import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const TECHNOLOGY_DIGITAL_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Industries",
  heading: "Technology & Digital",
  subheading: "Support for fast-moving businesses.",
  description:
    "Strategic financial support for the UK's tech and digital sector, from startups to scale-ups, with a focus on R&D, fundraising, and employee share schemes.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    alt: "Digital network and technology visualization",
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
