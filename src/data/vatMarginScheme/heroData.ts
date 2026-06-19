import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const VAT_MARGIN_SCHEME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "VAT Margin Scheme",
  description:
    "Second-hand car sellers, mobile and IT equipment traders are a main part of our client base. The VAT margin scheme allows second-hand car sellers to pay VAT only on the profit margin rather than the whole price. Due to high turnover, cashflow often faces challenges from VAT payments and financial costs, with credit lines commonly used by car sellers.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional reviewing invoices and financial records at a desk",
  },

  featureCards: [
    { label: "Second-hand vehicles" },
    { label: "Margin scheme records" },
    { label: "Compliant VAT returns" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "We support second-hand goods dealers who need margin scheme expertise alongside their wider VAT reporting.",
  },
};
