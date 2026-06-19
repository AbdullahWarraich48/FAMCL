import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CONSTRUCTION_INDUSTRY_SCHEME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "Construction Industry Scheme (CIS)",
  description:
    "We specialise in managing CIS affairs efficiently for our clients and providing seamless services for both contractors and subcontractors, saving time and stress. The Construction Industry Scheme outlines specific tax regulations for subcontractors in construction, detailing how contractors must handle payments.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Workspace with financial documents, pen, and charts",
  },

  featureCards: [
    { label: "Contractors" },
    { label: "Subcontractors" },
    { label: "Monthly CIS returns" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service as excellent, recognising our clear communication, accuracy, and dependable support.",
  },
};
