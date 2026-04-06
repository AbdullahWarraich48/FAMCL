import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const VAT_MARGIN_SCHEME_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "VAT Margin Scheme FAQs",
  description:
    "Questions dealers and traders often ask about eligibility, record-keeping, and how margin VAT differs from standard VAT.",
  items: [
    {
      question: "Who can use the VAT margin scheme?",
      answer:
        "Eligible businesses selling certain second-hand goods, works of art, antiques, or collectors’ items may use the scheme where HMRC conditions are met. Not every sale qualifies, so eligibility must be checked for each supply chain.",
    },
    {
      question: "How is VAT calculated under the margin scheme?",
      answer:
        "Broadly, VAT is calculated on the margin (the difference between your purchase and selling price), not on the full selling price, subject to scheme rules and record-keeping.",
    },
    {
      question: "What records do I need to keep?",
      answer:
        "You must keep evidence of purchases and sales, stock books or equivalent records, and invoices that meet HMRC’s margin scheme requirements so your VAT return can be supported if asked.",
    },
    {
      question: "Can I claim input VAT on purchases in the same way as normal VAT?",
      answer:
        "Margin scheme rules restrict how VAT is accounted for. If VAT is charged separately in a way that excludes margin scheme treatment, you generally cannot reclaim it like standard input tax. We review your invoices to apply the correct treatment.",
    },
  ],
};
