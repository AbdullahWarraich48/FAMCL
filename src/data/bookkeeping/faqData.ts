export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategoryBlock = {
  categoryTitle: string;
  items: FaqItem[];
};

export type FaqSectionData = {
  sectionLabel: string;
  heading: string;
  description: string;
  /** Flat list (legacy / service pages). */
  items?: FaqItem[];
  /** Grouped list (FAQs page). If present, takes precedence over `items`. */
  categories?: FaqCategoryBlock[];
};

export const BOOKKEEPING_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Corporation Tax FAQs",
  description:
    "Answers to common questions about corporation tax, filing, and how we support limited companies.",
  items: [
    {
      question: "What is corporation tax and who pays it?",
      answer:
        "Corporation tax is paid by UK limited companies and certain organisations on their taxable profits. It applies after allowable expenses and reliefs are deducted from income.",
    },
    {
      question: "When are corporation tax payments due?",
      answer:
        "Payment deadlines depend on your company’s profits and accounting period. We calculate what you owe and when it is due so you can plan cash flow and avoid penalties.",
    },
    {
      question: "How can an accountant help with corporation tax?",
      answer:
        "We prepare accurate returns, identify reliefs and allowances, align filings with your accounts, and advise on timing and structure so you stay compliant and tax-efficient.",
    },
  ],
};
