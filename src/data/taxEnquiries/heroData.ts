import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const TAX_ENQUIRIES_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Tax Enquiries and Investigations",
  subheading: "Expert support when HMRC opens an enquiry.",
  description:
    "Our professional tax teams deal with HM Revenue and Customs on your behalf, so you can stay focused on running your business.",

  primaryCta: { label: "Get Started Today", href: "#contact" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    alt: "Professional reviewing tax documents at a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients value our clear communication, accuracy, and dependable support when dealing with HMRC enquiries.",
  },
} as const;
