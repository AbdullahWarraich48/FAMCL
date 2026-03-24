export type BookkeepingAccountingFirmIconKey = "users" | "headset" | "refresh";

export const BOOKKEEPING_ACCOUNTING_FIRM_DATA = {
  heading: "Choose an Accounting Firm That Works for You",
  description:
    "Managing a business comes with enough pressure your accounting shouldn't add to it. Our team takes care of your tax, bookkeeping, accounting, and payroll, so you can focus on growing with confidence. If your current accountant isn't meeting expectations, moving to us is straightforward and stress-free.",
  cards: [
    {
      title: "Local Business Focus",
      description:
        "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
      iconKey: "users",
      cta: { label: "Learn More", href: "/about" },
    },
    {
      title: "Come and Meet Us",
      description:
        "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
      iconKey: "headset",
      cta: { label: "Learn More", href: "/Company/contact-us#contact" },
    },
    {
      title: "Switching is Simple",
      description:
        "We specialise in supporting UK-based businesses and individuals. Our advisors understand local regulations & provide practical, personalised advice you can rely on.",
      iconKey: "refresh",
      cta: { label: "Learn More", href: "/switching-accounts" },
    },
  ],
} as const;

