import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const LANDLORDS_FAMILIES_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Landlords & Families FAQs",
  description:
    "Typical questions on property income, joint ownership, family tax planning, and keeping rental records compliant.",
  items: [
    {
      question: "How is rental income taxed?",
      answer:
        "Rental profit is usually taxed as property income after allowable expenses, through Self Assessment or, for companies, corporation tax. Mortgage interest relief rules differ for individuals versus companies.",
    },
    {
      question: "What expenses can landlords claim?",
      answer:
        "Common claims include agent fees, repairs, insurance, and finance costs within current rules. Capital improvements are generally not deductible as revenue expenses—we classify costs correctly.",
    },
    {
      question: "Should property be held personally or in a company?",
      answer:
        "It depends on tax rates, stamp duty, mortgage availability, and long-term plans. We compare scenarios so you understand SDLT, CGT, and ongoing tax before you decide.",
    },
    {
      question: "How can families plan together tax-efficiently?",
      answer:
        "We look at ownership structures, allowances, pensions, and gifting strategies alongside property and income so decisions suit the whole household.",
    },
  ],
};
