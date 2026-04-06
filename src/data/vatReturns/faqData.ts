import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const VAT_RETURNS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "VAT Returns FAQs",
  description:
    "Answers about VAT registration, filing deadlines, Making Tax Digital, and how we keep your returns accurate.",
  items: [
    {
      question: "When are VAT returns due?",
      answer:
        "Typically every quarter, with the deadline usually one month and seven days after the period ends. Your exact dates depend on your VAT stagger and whether you use monthly or annual accounting.",
    },
    {
      question: "Do I need MTD-compatible software?",
      answer:
        "If you are VAT-registered, HMRC generally requires digital records and MTD-compatible software for submissions. We help you stay compliant with the right setup.",
    },
    {
      question: "What happens if I miss a filing or payment deadline?",
      answer:
        "HMRC may charge surcharges, penalties, or interest. We monitor deadlines, reconcile your figures in advance, and help you plan payments to reduce that risk.",
    },
    {
      question: "Can you handle partial exemption or special schemes?",
      answer:
        "Yes, where your business uses schemes such as the flat rate, cash accounting, or partial exemption, we apply the correct rules in your records and on the return.",
    },
  ],
};
