import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const ACCOUNTS_AND_BOOKKEEPING_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Accounts & Bookkeeping FAQs",
  description:
    "Common questions about how we keep your records accurate, compliant, and useful for decisions and year-end reporting.",
  items: [
    {
      question: "What is the difference between bookkeeping and management accounts?",
      answer:
        "Bookkeeping is the day-to-day recording of income and expenses. Management accounts build on that data to give you periodic insight into performance, margins, and cash flow so you can steer the business.",
    },
    {
      question: "How often should bookkeeping be updated?",
      answer:
        "It depends on your size and complexity. Many clients use weekly or monthly updates so VAT, payroll, and decisions are based on current figures, not outdated balances.",
    },
    {
      question: "Will you align my books with my year-end accounts?",
      answer:
        "Yes. We structure your bookkeeping so it feeds cleanly into statutory accounts and tax filings, reducing adjustments and surprises at the year end.",
    },
    {
      question: "Can you work with my existing software?",
      answer:
        "In most cases, yes. We support common cloud accounting tools and can agree a process that fits how you already operate.",
    },
  ],
};
