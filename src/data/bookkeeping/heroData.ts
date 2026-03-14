export const BOOKKEEPING_HERO_DATA = {
  phoneNumber: "035 1234 5670",
  phoneHref: "tel:03512345670",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "Accounts & Bookkeeping",
  description:
    "We maintain accurate, structured financial records that keep your business compliant and fully informed. From day-to-day bookkeeping to year-end reporting, we ensure your numbers are organised, transparent, and ready to support confident decision-making.",

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
      "The clients consistently rate our service with excellent feedback for accuracy and support.",
  },
} as const;

