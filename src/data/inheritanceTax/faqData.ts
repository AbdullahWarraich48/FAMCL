import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const INHERITANCE_TAX_ESTATE_PLANNING_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Inheritance Tax & Estate Planning FAQs",
  description:
    "Overview questions on IHT thresholds, gifts, trusts, and how planning can protect your family’s future.",
  items: [
    {
      question: "What is the nil-rate band?",
      answer:
        "The nil-rate band is the amount of your estate that can pass at 0% IHT, subject to rules. An additional residence nil-rate band may apply when passing a home to direct descendants, subject to conditions.",
    },
    {
      question: "Do gifts reduce inheritance tax?",
      answer:
        "Some gifts fall out of your estate after seven years; others use exemptions each year. Gifts with reservation of benefit or into certain trusts have special rules. We map what counts and when.",
    },
    {
      question: "Should I use a will and lasting powers of attorney?",
      answer:
        "A will directs who inherits; LPAs appoint people to manage decisions if you lose capacity. Both are central to estate planning and should align with your tax and family structure.",
    },
    {
      question: "How does estate planning interact with retirement?",
      answer:
        "We coordinate pensions, property, and business interests so you can enjoy retirement while structuring wealth for the next generation in a tax-aware way.",
    },
  ],
};
