import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CONSTRUCTION_PROPERTY_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Construction &\nProperty",
  subheading: "Practical advice for complex projects.",
  description:
    "The construction and property sectors require specialised financial management. We provide tailored accounting and tax services that address compliance, project profitability, and the complexities of CIS regulations, ensuring your projects run smoothly from start to finish.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=1400&q=80",
    alt: "Construction workers on a job site",
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

