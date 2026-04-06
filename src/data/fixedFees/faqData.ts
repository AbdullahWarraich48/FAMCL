import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const FIXED_FEES_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Fixed Fees FAQs",
  description:
    "Questions about how pricing works, what is included, and when fees might change.",
  items: [
    {
      question: "What does the fixed fee include?",
      answer:
        "Fees are agreed against a defined scope—for example bookkeeping frequency, payroll runs, or annual accounts. Anything outside that scope is discussed before extra work begins.",
    },
    {
      question: "Can fees change during the year?",
      answer:
        "If your business grows materially or you need additional services, we review scope and agree any adjustment upfront so you are never surprised.",
    },
    {
      question: "Do you charge by the hour for everything?",
      answer:
        "Core compliance work is usually on fixed or packaged fees. Ad-hoc advisory or project work may be quoted separately depending on complexity and time.",
    },
    {
      question: "How do I pay?",
      answer:
        "We agree payment terms at engagement—often monthly or annually by standing order or invoice. Details are set out in our letter of engagement.",
    },
  ],
};
