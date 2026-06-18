import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const SELF_ASSESSMENT_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Self-Assessment Tax",
  subheading: "Your personal tax return, done properly.",
  description:
    "We prepare and submit your Self-Assessment tax return accurately and on time, with all income reviewed and allowances applied correctly.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Hands writing in a notebook with calculator and documents on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients recognise our service for excellent, responsive support and clear communication on all tax matters.",
  },
} as const;
