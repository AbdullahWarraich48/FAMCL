import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const MANUFACTURING_ENGINEERING_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Manufacturing & Engineering FAQs",
  description:
    "Answers on stock, capital equipment, R&D relief, and managing margins in production-heavy businesses.",
  items: [
    {
      question: "How should we value stock and WIP?",
      answer:
        "Stock is usually valued at the lower of cost and net realisable value, with consistent methods year to year. Work-in-progress may need stage costing—we align your policy with accounting standards.",
    },
    {
      question: "Can we claim capital allowances on machinery?",
      answer:
        "Yes, on qualifying plant and machinery, often with accelerated relief such as the annual investment allowance subject to limits and rules. We maximise claims your business is entitled to.",
    },
    {
      question: "What is R&D tax relief for manufacturers?",
      answer:
        "If you seek an advance in science or technology and face technical uncertainty, you may qualify for SME or RDEC relief. We map qualifying projects and costs to HMRC definitions.",
    },
    {
      question: "How do we improve gross margin visibility?",
      answer:
        "We tie bills of materials, labour, and overheads to products or lines so you can see true margin and spot pricing or efficiency issues early.",
    },
  ],
};
