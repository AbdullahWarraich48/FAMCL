import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const LIMITED_COMPANIES_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Limited Company FAQs",
  description:
    "Questions on director duties, corporation tax, payroll, dividends, and filings specific to private limited companies.",
  items: [
    {
      question: "What must a limited company file each year?",
      answer:
        "Typically statutory accounts, a confirmation statement, and a corporation tax return, with corporation tax paid by the due date. Directors are responsible for accuracy and timeliness.",
    },
    {
      question: "How do directors take money out of the company?",
      answer:
        "Usually through salary, dividends, or director’s loan account movements. Each route has different tax and NIC consequences—we model what fits your profits and cash flow.",
    },
    {
      question: "What is the difference between accounting profit and taxable profit?",
      answer:
        "Accounts follow accounting standards; corporation tax applies specific add-backs and deductions. We align both so your return matches your books and HMRC rules.",
    },
    {
      question: "Do we need a company secretary?",
      answer:
        "Private companies are not required to appoint a secretary, but someone must still maintain registers and meet filing duties. We can support those tasks alongside your accountant.",
    },
  ],
};
