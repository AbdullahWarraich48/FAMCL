import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const PROFESSIONAL_SERVICES_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Professional Services FAQs",
  description:
    "Questions firms often ask about WIP, partner profit shares, PI cover, and tax across partnerships and companies.",
  items: [
    {
      question: "How do we account for work in progress?",
      answer:
        "WIP reflects unbilled time and costs at the period end. Methods vary by firm—we help you apply a consistent basis that matches your engagement terms and audit expectations.",
    },
    {
      question: "LLP versus limited company: what changes for tax?",
      answer:
        "Partners are taxed on their profit share through Self Assessment; companies pay corporation tax and extract profits via salary and dividends. We model the combined effect for your structure.",
    },
    {
      question: "Are professional indemnity premiums allowable?",
      answer:
        "Premiums that relate wholly and exclusively to the trade are generally deductible, subject to normal expense rules. We ensure classification in your accounts and tax computations.",
    },
    {
      question: "How do we plan partner drawings and cash tax?",
      answer:
        "We align monthly drawings with expected profits, tax payments, and firm cash so partners avoid surprises at the year end.",
    },
  ],
};
