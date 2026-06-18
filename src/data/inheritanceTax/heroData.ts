import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const INHERITANCE_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Inheritance Tax, Retirement Strategy and Estate Planning",
  subheading: "Protect what matters to your family.",
  description:
    "We help structure your affairs to protect your family, review Inheritance Tax exposure, and plan assets for efficient transfer to the next generation.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1000&q=80",
    alt: "Person reviewing financial paperwork with a calculator and notebook on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients value our inheritance and estate planning advice for clear communication, accuracy, and dependable support.",
  },
} as const;
