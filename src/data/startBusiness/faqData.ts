import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const START_BUSINESS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Starting a Business FAQs",
  description:
    "Common questions for new business owners about structure, registration, tax, and what to put in place from day one.",
  items: [
    {
      question: "Should I trade as a sole trader or form a company?",
      answer:
        "It depends on liability, tax, admin, and how you plan to take profits. We compare sole trader versus limited company options using your expected income and risk profile.",
    },
    {
      question: "What do I need to register with HMRC?",
      answer:
        "You may need to register for Self Assessment, VAT, PAYE, or CIS depending on your activities. We map which registrations apply and when so you avoid late penalties.",
    },
    {
      question: "How soon should I set up bookkeeping?",
      answer:
        "From your first sale or expense. Clean records from the start make VAT, tax, and funding conversations much easier than reconstructing history later.",
    },
    {
      question: "Can you help with company formation and secretarial tasks?",
      answer:
        "Yes. We can coordinate incorporation, filings, and ongoing compliance tasks alongside your accounting so statutory obligations stay on track.",
    },
  ],
};
