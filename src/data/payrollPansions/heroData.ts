import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const PAYROLL_PANSIONS_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For Business",
  heading: "Payroll & Pensions",
  subheading: "Your people paid properly.",
  description:
    "We manage payroll, PAYE, and workplace pensions so employees are paid accurately and your business stays compliant with HMRC and regulators.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    alt: "Person working on payroll and pension documents with a laptop and calculator",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Our clients consistently rate our payroll and pensions support highly for accuracy, reliability, and clear communication.",
  },
} as const;
