import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CAREERS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Careers FAQs",
  description:
    "Typical questions from applicants about roles, applications, and working at the firm.",
  items: [
    {
      question: "How do I apply for a role?",
      answer:
        "Send your CV and a short covering note through our contact channels or the route specified in any active listing. We confirm receipt and next steps where there is a match.",
    },
    {
      question: "What backgrounds do you hire?",
      answer:
        "We look for strong technical skills, professional judgement, and integrity—often from practice, industry, or blended backgrounds—with relevant UK tax and accounting knowledge.",
    },
    {
      question: "Do you support professional qualifications?",
      answer:
        "Where appropriate we support study and exams alongside structured on-the-job experience, subject to role and performance expectations.",
    },
    {
      question: "Is remote or hybrid working available?",
      answer:
        "Arrangements depend on role, client needs, and regulatory considerations. We discuss flexibility at interview where relevant.",
    },
  ],
};
