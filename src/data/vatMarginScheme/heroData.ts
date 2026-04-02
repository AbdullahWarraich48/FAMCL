import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const VAT_MARGIN_SCHEME_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Supporting Limited Companies from Startup to Scale",
  heading: "VAT Margin Scheme",
  subheading: "Second-hand goods, art, antiques, and collectibles.",
  description:
    "The VAT margin scheme lets eligible dealers account for VAT on the margin rather than the full selling price—when the rules apply. We help you identify qualifying sales, keep the right records, and stay compliant so your returns reflect the scheme correctly.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    alt: "Professional reviewing documents and financial records",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "We support dealers and agents who need margin scheme expertise alongside their wider VAT reporting.",
  },
};
