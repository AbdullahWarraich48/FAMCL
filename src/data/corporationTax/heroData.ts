import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const CORPORATION_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "Corporation Tax",
  subheading: "Pay the right tax. Not more.",
  description:
    "We manage your business tax obligations under UK law — from calculation and planning to filing — so you stay compliant without fear.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://cdn.create.vista.com/api/media/small/620421516/stock-photo-top-view-documents-important-date-april-filing-declaration-concept-important",
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
