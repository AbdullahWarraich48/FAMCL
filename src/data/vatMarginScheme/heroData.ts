import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const VAT_MARGIN_SCHEME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Specialist Guidance for Second-Hand Goods Businesses",
  heading: "VAT Margin Scheme",
  subheading: "VAT calculated on profit, not full selling price",
  description:
    "Second-hand car sellers, mobile phone traders, and IT equipment businesses form a significant part of our client base. The VAT margin scheme allows businesses to pay VAT only on the profit margin instead of the full selling price. Due to high turnover, VAT payments can create cashflow pressure, especially when businesses rely on credit lines.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional reviewing invoices and financial records at a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "We support second-hand goods dealers who need margin scheme expertise alongside their wider VAT reporting.",
  },
};
