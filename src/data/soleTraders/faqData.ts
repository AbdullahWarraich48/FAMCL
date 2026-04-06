import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const SOLE_TRADERS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Sole Trader FAQs",
  description:
    "Answers about Self Assessment, allowable expenses, National Insurance, and record-keeping when you are self-employed.",
  items: [
    {
      question: "How do sole traders pay tax?",
      answer:
        "Profits are taxed through Self Assessment after your personal allowance and any reliefs. You may also pay Class 2 and Class 4 National Insurance depending on profit levels.",
    },
    {
      question: "What expenses can I claim?",
      answer:
        "You can claim costs that are wholly and exclusively for the business, such as travel, software, professional fees, and use of home—subject to sensible apportionment and evidence.",
    },
    {
      question: "Do I need a separate bank account?",
      answer:
        "HMRC does not mandate a separate account for sole traders, but a dedicated business account makes reconciling income and expenses far simpler and reduces errors.",
    },
    {
      question: "When should I register for VAT?",
      answer:
        "Usually when taxable turnover exceeds the VAT registration threshold or you choose to register voluntarily. We monitor your rolling turnover and advise on timing and scheme choice.",
    },
  ],
};
