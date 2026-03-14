import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const VAT_RETURNS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "VAT Returns",
  subheading: "HMRC compliance, made simple.",
  description:
    "Managing VAT correctly is essential for maintaining compliance and financial stability. With accurate records and timely submissions, businesses can avoid penalties, interest, and unnecessary complications. We handle your VAT obligations so your reporting remains organised, compliant, and stress-free.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Person working on financial documents with a calculator and laptop",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our VAT support highly for clarity, accuracy, and dependable service.",
  },
};

