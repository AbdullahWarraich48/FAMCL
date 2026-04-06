import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CONTACT_US_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Contact FAQs",
  description:
    "Quick answers before you get in touch—response times, what to prepare, and how we handle enquiries.",
  items: [
    {
      question: "How quickly will you respond?",
      answer:
        "We aim to acknowledge enquiries promptly during business hours. Complex matters may need a short initial call to scope the question before full advice.",
    },
    {
      question: "What should I include in my message?",
      answer:
        "A brief description of your situation, whether you are a business or individual, and any urgent deadlines (for example a filing date) helps us route you to the right person.",
    },
    {
      question: "Can I book a consultation?",
      answer:
        "Yes. Tell us your preferred times and whether you need a video or phone call. We confirm availability and any information to send beforehand.",
    },
    {
      question: "Is the first conversation confidential?",
      answer:
        "Yes. We treat enquiries professionally and in line with our confidentiality and data protection obligations, whether or not you become a client.",
    },
  ],
};
