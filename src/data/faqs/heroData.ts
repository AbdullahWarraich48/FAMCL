import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const FAQS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Clear Answers To Your Common Questions",
  heading: "FAQs",
  subheading: "Quick, straightforward answers about our services and tax support.",
  description:
    "Our Frequently Asked Questions (FAQs) section is designed to help you find quick, straightforward answers to your most common questions about our services, tax matters, and business compliance.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Handshake between two professionals in a meeting room",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Clear Explanations" },
    { label: "Helpful Support" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
} as const;

