import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const INHERITANCE_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Practical Tax Support for Individuals and Families",
  heading: "Inheritance Tax, Retirement Strategy, & Estate Planning",
  subheading: "Protect what matters to your family.",
  description:
    "We review your estate structure, manage Inheritance Tax exposure, and provide clear planning options to secure your legacy for the future. Our advice ensures your wishes are documented, tax-efficient, and aligned with your long-term family goals.",

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
};

