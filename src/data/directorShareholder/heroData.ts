import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const DIRECTOR_SHAREHOLDER_HERO_DATA: ServiceHeroData = {
  phoneNumber: "+44 730 123 3962",
  phoneHref: "tel:+447301233962",

  bannerText: "For You",
  heading: "Director & Shareholder Advisory",
  subheading: "Navigating your duties with confidence.",
  description:
    "We provide clear, practical advice on legal duties, tax responsibilities, and financial obligations for company directors and shareholders.",

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
} as const;
