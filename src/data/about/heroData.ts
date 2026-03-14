export const ABOUT_HERO_DATA = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "About FAM",
  heading: "About Us",
  subheading: "Professional guidance built on clarity and responsibility.",
  description:
    "FAM Chartered Accountants was established to provide clear financial guidance where complexity creates uncertainty. We support businesses, individuals, and families with accounting, tax, and advisory services designed to help them understand their financial position and make informed decisions.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Friendly team of professionals working together at a laptop",
  },

  featureCards: [
    { label: "Trusted Local Advisors" },
    { label: "Clarity On Complex Issues" },
    { label: "Support For Businesses & Individuals" },
  ],

  trustedBar: {
    title: "Trusted by businesses and individuals nationwide",
    description:
      "Clients rely on our structured approach, clear explanations, and responsible advice to make confident financial decisions.",
  },
} as const;

