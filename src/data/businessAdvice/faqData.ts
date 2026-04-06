import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const BUSINESS_ADVICE_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Business Advice FAQs",
  description:
    "Typical questions about growth planning, performance, cash flow, and how advisory support works alongside compliance.",
  items: [
    {
      question: "What kind of business advice do you provide?",
      answer:
        "We help with profitability, cash flow, forecasting, pricing, and operational decisions, always grounded in your numbers and compliance obligations.",
    },
    {
      question: "How often should we review forecasts?",
      answer:
        "Many businesses benefit from quarterly reviews, with more frequent updates during growth or uncertainty. We agree a rhythm that matches your decisions and funding needs.",
    },
    {
      question: "Can you help if we want to raise funding or invest?",
      answer:
        "We can prepare management information, projections, and scenario analysis so you can present a clear picture to lenders or investors.",
    },
    {
      question: "Is advice separate from year-end compliance?",
      answer:
        "Yes. Advisory work focuses on forward-looking decisions and performance, while compliance covers filings and statutory requirements. They work best when linked to the same reliable data.",
    },
  ],
};
