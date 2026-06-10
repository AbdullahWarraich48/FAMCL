import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CONSTRUCTION_INDUSTRY_SCHEME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "Specialist Support for Construction Businesses",
  heading: "Construction Industry Scheme (CIS)",
  subheading: "Specialist support for contractors and subcontractors",
  description:
    "We specialise in managing CIS affairs efficiently for our clients, providing seamless services for both contractors and subcontractors while saving time and reducing stress. The Construction Industry Scheme outlines specific tax regulations for subcontractors in the construction industry and explains how contractors must handle payments.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: " Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Workspace with financial documents, pen, and charts",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognizing our clear communication, accuracy, and dependable support.",
  },
};
