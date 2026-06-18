import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const ACCOUNTS_AND_BOOKKEEPING_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 20 8144 4825",
  phoneHref: "tel:+442081444825",

  bannerText: "For Business",
  heading: "Accounts & Bookkeeping",
  description:
    "We maintain your business records and make you compliant.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    alt: "Hands writing in a notebook with calculator and documents on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisors" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;
