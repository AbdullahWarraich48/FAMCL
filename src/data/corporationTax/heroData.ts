import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CORPORATION_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "Corporation Tax",
  subheading: "Pay the right tax. Not more.",
  description:
    "We manage your corporation tax so your business stays compliant and efficient. From planning to filing, every step is handled accurately and on time. With proactive tax planning, your obligations remain clear, organised, and stress-free.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Person writing in a notebook with a laptop and calculator on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

