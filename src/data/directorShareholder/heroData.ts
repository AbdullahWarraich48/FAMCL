import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const DIRECTOR_SHAREHOLDER_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Practical Tax Support for Individuals and Families",
  heading: "Director & Shareholder Advisory",
  subheading: "Navigating your duties with confidence.",
  description:
    "Being a director or shareholder comes with significant responsibilities. We provide clear, practical advice on your legal, tax, and financial duties. From profit extraction to handling director loans, our advisory service ensures you comply with UK company law and protect your personal assets.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    alt: "Person reviewing financial paperwork with a notebook and calculator on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients trust our director and shareholder advice for clear communication, accuracy, and long-term support.",
  },
};

