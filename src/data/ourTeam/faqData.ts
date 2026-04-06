import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const OUR_TEAM_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Our Team FAQs",
  description:
    "Common questions about who looks after your work, qualifications, and how responsibilities are managed.",
  items: [
    {
      question: "Who will handle my account?",
      answer:
        "You will have a clear point of contact and a team structured so technical work is done by appropriately qualified people, with oversight where complexity requires it.",
    },
    {
      question: "What qualifications does your team hold?",
      answer:
        "Our professionals hold relevant UK accountancy and tax qualifications and maintain continuing professional development in line with professional standards.",
    },
    {
      question: "Will my work get passed between many people?",
      answer:
        "We aim for continuity. Where specialists are involved—for example tax or payroll—you still have a coherent lead so nothing falls between roles.",
    },
    {
      question: "Can I speak to someone senior if needed?",
      answer:
        "Yes. For sensitive or high-stakes matters, we escalate to experienced advisers so you get an appropriate level of review.",
    },
  ],
};
