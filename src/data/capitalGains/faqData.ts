import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CAPITAL_GAINS_PROPERTY_TAX_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Capital Gains & Property Tax FAQs",
  description:
    "Answers on when gains arise on property and other assets, reliefs, reporting, and how planning can reduce unnecessary tax.",
  items: [
    {
      question: "When might I pay capital gains tax on property?",
      answer:
        "You may have a gain when you sell or transfer a property that is not fully covered by Private Residence Relief, such as a second home, rental property, or part of a main home used for business. The calculation depends on your circumstances and any available reliefs.",
    },
    {
      question: "What is the annual exempt amount?",
      answer:
        "Individuals have an annual CGT exempt amount that reduces taxable gains. The level can change with Budget rules, so we apply the correct figure for your tax year.",
    },
    {
      question: "Do I need to report a property sale to HMRC quickly?",
      answer:
        "UK residential property disposals often have a reporting and payment window within a short period after completion. We help you meet the rules and avoid late penalties.",
    },
    {
      question: "Can transfers between spouses save tax?",
      answer:
        "Transfers between spouses or civil partners are often on a no-gain-no-loss basis for CGT, which can help with planning—but other taxes and legal steps matter too. We review the full picture.",
    },
  ],
};
