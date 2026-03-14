import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const MANUFACTURING_ENGINEERING_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Financial Advice for UK Industries",
  heading: "Manufacturing &\nEngineering",
  subheading: "Numbers that support growth and efficiency.",
  description:
    "The manufacturing and engineering sectors are driven by efficiency and precision. We offer expert financial management and advisory services, helping you control costs, optimise production, and claim valuable tax reliefs, ensuring long-term growth and operational efficiency.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1581091215367-59ab6f06b8b6?auto=format&fit=crop&w=1400&q=80",
    alt: "Engineering blueprint and manufacturing planning on screen",
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

