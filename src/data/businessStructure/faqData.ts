import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const BUSINESS_STRUCTURE_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Business Structuring FAQs",
  description:
    "Questions on choosing or changing structure, tax implications, and what to consider before you incorporate or restructure.",
  items: [
    {
      question: "Should I operate as a sole trader or limited company?",
      answer:
        "It depends on profit level, risk, perception, tax efficiency, and admin. We compare liability, extraction of profits, and reporting duties so you can decide with clarity.",
    },
    {
      question: "What is involved in incorporating an existing business?",
      answer:
        "Typically you transfer assets and trade into a new company, deal with goodwill and tax elections, and set up payroll, VAT, and company secretarial duties. We coordinate with you on timing and documentation.",
    },
    {
      question: "Can I change structure later?",
      answer:
        "Often yes, but there can be tax, VAT, and legal steps. We outline exit charges, stamp duties where relevant, and the right order of changes to avoid unnecessary cost.",
    },
    {
      question: "How does structure affect how I take money out?",
      answer:
        "Sole traders are taxed on business profits; companies pay corporation tax and you extract profits via salary and/or dividends. We model the combined effect for your situation.",
    },
  ],
};
