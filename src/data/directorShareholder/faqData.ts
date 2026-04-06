import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const DIRECTOR_SHAREHOLDER_ADVICE_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Director & Shareholder Advisory FAQs",
  description:
    "Questions on remuneration, dividends, compliance, and how directors and shareholders can plan effectively.",
  items: [
    {
      question: "Salary versus dividends: what is best?",
      answer:
        "There is no single answer—employers’ NIC, corporation tax, personal tax bands, and cash needs all matter. We model combinations that suit your company’s profits and your household income.",
    },
    {
      question: "What is a director’s loan account?",
      answer:
        "It records money you owe to or are owed by the company. Overdrawn loans can trigger tax charges and reporting rules if not cleared in time, so we monitor balances and timing.",
    },
    {
      question: "What duties do directors have?",
      answer:
        "Directors must act in the company’s interests, keep proper accounting records, file statutory returns, and comply with tax and employment law. We help you understand how this applies day to day.",
    },
    {
      question: "Can shareholders agree different rights or dividends?",
      answer:
        "Share classes and shareholders’ agreements can set different voting rights and dividend entitlements. Tax and company law must align with any arrangement—we help document and review proposals.",
    },
  ],
};
