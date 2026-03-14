export const SWITCHING_ACCOUNTS_HERO_DATA = {
  phoneNumber: "020 1234 5678",
  phoneHref: "tel:02012345678",

  bannerText: "Switching Accountants",
  heading: "Switching Accountants",
  subheading: "Changing your accountant can be straightforward.",
  description:
    "If you are considering moving to a new accountant, the process is usually much simpler than many people expect. At FAM Chartered Accountants, we aim to make the transition smooth, organised and stress-free.",

  primaryCta: { label: "Get Started Today", href: "#get-started" },
  secondaryCta: { labelPrefix: "Call", usePhoneNumber: true },

  image: {
    src: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1000&q=80",
    alt: "Person planning strategy on a chess board representing business decisions",
  },

  featureCards: [
    { label: "Smooth Handovers" },
    { label: "Proactive Communication" },
    { label: "Fixed-Fee Support" },
  ],

  trustedBar: {
    title: "Trusted by businesses switching accountants",
    description:
      "Clients rate our team highly for making the move to us organised, timely and hassle-free.",
  },
} as const;

