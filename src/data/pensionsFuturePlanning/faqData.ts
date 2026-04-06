import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const PENSIONS_FUTURE_PLANNING_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Pensions & Future Planning FAQs",
  description:
    "Questions on saving for retirement, tax relief on contributions, allowances, and how advice fits with your wider financial plan.",
  items: [
    {
      question: "How do pension tax reliefs work?",
      answer:
        "Relief depends on how contributions are paid (e.g. net pay or relief at source) and your tax rate. Annual and lifetime allowances can limit how much can be saved tax-efficiently, so we check what applies to you.",
    },
    {
      question: "What is the annual allowance?",
      answer:
        "The annual allowance caps tax-relieved pension input in a tax year. A reduced allowance can apply for higher earners or where flexibly accessed pensions have been used. We help you avoid unexpected tax charges.",
    },
    {
      question: "When can I access my pension?",
      answer:
        "Normal minimum pension age rules apply to most schemes, with options such as drawdown or annuities. We outline tax on withdrawals and how timing affects your income plan.",
    },
    {
      question: "Should pensions be my only retirement plan?",
      answer:
        "Pensions are often central, but ISAs, property, and other assets can complement them. We look at diversification, risk, and liquidity alongside your tax position.",
    },
  ],
};
