import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const PAYROLL_PENSIONS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Payroll & Pensions FAQs",
  description:
    "Answers on PAYE, auto-enrolment, pension contributions, and staying compliant with HMRC and The Pensions Regulator.",
  items: [
    {
      question: "What are my auto-enrolment duties?",
      answer:
        "If you employ staff who meet eligibility criteria, you must assess workers, enrol qualifying employees into a pension scheme, contribute at least minimum levels, and complete declarations. Duties continue while you employ people.",
    },
    {
      question: "How often do I run payroll and report to HMRC?",
      answer:
        "Most employers run payroll monthly or weekly and report through RTI on or before each payday. We set a schedule that matches your pay dates and filing obligations.",
    },
    {
      question: "Can you handle statutory pay and benefits?",
      answer:
        "Yes. We can include sick pay, maternity or paternity pay, and taxable benefits in payroll calculations where they apply, and advise on reporting requirements.",
    },
    {
      question: "What if I get a pension compliance notice?",
      answer:
        "We help you understand the issue, correct processes, and communicate with your pension provider or regulator where needed to get back on track.",
    },
  ],
};
