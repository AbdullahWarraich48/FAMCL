import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CORPORATION_TAX_PAGE_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Corporation Tax FAQs",
  description:
    "Common questions on corporation tax rates, payment timings, and how planning ties in with your accounts and dividends.",
  items: [
    {
      question: "When is corporation tax payable?",
      answer:
        "Payment deadlines depend on your company’s profits and accounting period. For many companies, tax is due nine months and one day after the accounting period end, but larger profits can trigger earlier quarterly instalments.",
    },
    {
      question: "What is marginal relief for corporation tax?",
      answer:
        "Marginal relief can apply when profits fall between the lower and upper limits for the small profits rate. We calculate whether relief applies and how it affects your effective rate.",
    },
    {
      question: "How does corporation tax interact with dividends?",
      answer:
        "Dividends are paid from post-tax profits. We help you understand distributable reserves, timing, and how salary versus dividend choices affect the company’s tax position.",
    },
    {
      question: "Can you help with R&D or other reliefs?",
      answer:
        "Where your company qualifies for reliefs such as R&D tax credits or capital allowances, we identify opportunities and ensure claims align with your corporation tax computation.",
    },
  ],
};
