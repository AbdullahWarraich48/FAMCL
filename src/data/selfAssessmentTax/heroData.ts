import type { ServiceHeroData } from "@/Components/Book-Keeping/Herosection";

export const SELF_ASSESSMENT_TAX_HERO_DATA: ServiceHeroData = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Proactive Tax Support for Individuals and Families",
  heading: "Self-Assessment Tax",
  subheading: "Your personal tax return, done properly.",
  description:
    "Managing your personal tax return can feel overwhelming, but we simplify the process. From reviewing all income sources to applying the right allowances and reliefs, we make sure your Self-Assessment tax return is submitted accurately and on time.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Hands writing in a notebook with calculator and documents on a desk",
  },

  featureCards: [
    { label: "Trusted Nationwide" },
    { label: "Experienced Advisers" },
    { label: "Fixed-Fee Pricing" },
  ],

  trustedBar: {
    title: "Trusted by businesses nationwide",
    description:
      "Clients recognise our service for excellent, responsive support and clear communication on all tax matters.",
  },
};

