import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CIS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Construction Industry Scheme FAQs",
  description:
    "Questions contractors and subcontractors ask about registration, deductions, gross payment status, and monthly returns.",
  items: [
    {
      question: "Do I need to register for CIS?",
      answer:
        "If you are a contractor paying subcontractors for construction work within the scheme’s definition, you usually must register and make deductions. Subcontractors should register so deductions are taken at the correct rate.",
    },
    {
      question: "What is gross payment status?",
      answer:
        "With gross payment status, no deductions are taken from your payments. It is granted where HMRC is satisfied that compliance and turnover tests are met, and must be renewed on time.",
    },
    {
      question: "When is the CIS return due?",
      answer:
        "Contractors must submit a monthly CIS return to HMRC, typically within 14 days after the end of each tax month, declaring payments and deductions to subcontractors.",
    },
    {
      question: "How do CIS deductions affect my tax?",
      answer:
        "Subcontractors can offset CIS deductions against income tax and National Insurance on their Self Assessment or company tax, subject to rules. We reconcile deductions against your overall tax position.",
    },
  ],
};
