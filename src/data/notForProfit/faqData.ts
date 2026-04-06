import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const NOT_FOR_PROFIT_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Not-for-Profit FAQs",
  description:
    "Questions charities and social enterprises often ask about trustees, funding, Gift Aid, and reporting to regulators.",
  items: [
    {
      question: "What is the difference between restricted and unrestricted funds?",
      answer:
        "Restricted funds can only be spent for purposes donors or funders specified. Unrestricted funds support general activities. We tag income and expenditure so reports stay accurate.",
    },
    {
      question: "How does Gift Aid work?",
      answer:
        "Eligible charities can reclaim basic rate tax on qualifying donations if donors make valid declarations. There are rules on benefits and donor records—we help you stay compliant.",
    },
    {
      question: "What must we file with the Charity Commission or OSCR?",
      answer:
        "Requirements depend on income and structure. Annual returns, accounts, and trustee reports must meet statutory formats and deadlines—we align your pack with regulator expectations.",
    },
    {
      question: "Do charities pay corporation tax?",
      answer:
        "Charitable companies may receive exemptions for charitable activities, but trading or non-charitable income can be taxable. We review activities and elections such as small trading exemptions.",
    },
  ],
};
