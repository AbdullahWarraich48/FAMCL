import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CONTRACTORS_FREELANCERS_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Contractors & Freelancers FAQs",
  description:
    "Answers on IR35, agency rules, expenses, and how to keep freelance income reporting clear and defensible.",
  items: [
    {
      question: "What is IR35 and does it apply to me?",
      answer:
        "IR35 targets relationships that look like employment for tax purposes. Rules differ for public and private sector, and status depends on how you work—not only your contract wording.",
    },
    {
      question: "Can I claim expenses as a contractor?",
      answer:
        "Yes, for costs wholly and exclusively for your trade, such as equipment, travel to temporary workplaces, and professional subscriptions, subject to specific rules and evidence.",
    },
    {
      question: "Should I use a limited company or umbrella?",
      answer:
        "It depends on contract terms, IR35 status, rates, and admin appetite. We explain the tax and compliance trade-offs so you can choose with open eyes.",
    },
    {
      question: "How do I stay compliant with changing rules?",
      answer:
        "We keep your contracts, working practices, and accounts aligned with current guidance, and help you respond proportionately if HMRC asks questions.",
    },
  ],
};
