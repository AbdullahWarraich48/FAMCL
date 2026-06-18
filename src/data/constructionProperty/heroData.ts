import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CONSTRUCTION_PROPERTY_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Industries",
  heading: "Construction & Property",
  subheading: "Practical advice for complex projects.",
  description:
    "Specialised accounting and tax services for the UK construction and property sectors, addressing CIS, project profitability, and regulatory compliance.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=1400&q=80",
    alt: "Construction workers on a job site",
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
