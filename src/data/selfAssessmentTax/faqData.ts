import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const SELF_ASSESSMENT_TAX_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Self-Assessment Tax FAQs",
  description:
    "Common questions about who must file, deadlines, payments on account, and how we help you stay compliant.",
  items: [
    {
      question: "Who needs to complete a Self Assessment tax return?",
      answer:
        "You may need to file if you are self-employed, a company director, have rental income, savings or investment income above thresholds, or owe certain other taxes. We confirm whether you need to register and file.",
    },
    {
      question: "When is the Self Assessment deadline?",
      answer:
        "Online returns are usually due by 31 January following the end of the tax year, with payment of any balancing tax and first payment on account often due on the same date. Paper deadlines are earlier.",
    },
    {
      question: "What are payments on account?",
      answer:
        "If you owe tax above a set limit, HMRC may require advance payments towards next year’s bill. We calculate what you owe, when it is due, and how it affects your cash flow.",
    },
    {
      question: "What records should I keep for Self Assessment?",
      answer:
        "You should keep income and expense evidence, bank statements, invoices, receipts, and details of any reliefs or allowances claimed, usually for several years in case HMRC asks questions.",
    },
  ],
};
