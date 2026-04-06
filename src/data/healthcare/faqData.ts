import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const HEALTHCARE_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Healthcare FAQs",
  description:
    "Answers for practices and providers on payroll, VAT, partial exemption, and governance around healthcare income.",
  items: [
    {
      question: "Does VAT apply to medical services?",
      answer:
        "Many medical and dental services are exempt from VAT, which affects recovery of input tax. Where mixed supplies exist, partial exemption calculations may be needed—we apply the right rules.",
    },
    {
      question: "How do we handle NHS versus private income?",
      answer:
        "We separate income streams and associated costs so reporting, tax, and benchmarking stay clear for both management and statutory accounts.",
    },
    {
      question: "What payroll issues are common in healthcare?",
      answer:
        "Sessional workers, locums, and pension schemes such as NHSPS can complicate PAYE. We set up payroll and reporting so deductions and contributions are correct.",
    },
    {
      question: "How can we improve practice profitability?",
      answer:
        "We review fee structures, capacity, and overheads against benchmarks so you can see where margin and cash can improve without compromising compliance.",
    },
  ],
};
