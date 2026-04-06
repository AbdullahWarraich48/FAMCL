import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CONSTRUCTION_PROPERTY_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Construction & Property FAQs",
  description:
    "Common questions for contractors, developers, and property businesses on CIS, VAT, and project accounting.",
  items: [
    {
      question: "How does CIS affect contractors and subcontractors?",
      answer:
        "Contractors usually deduct CIS from payments to subcontractors and report monthly. Subcontractors offset deductions against their tax. We keep registrations, verifications, and returns aligned.",
    },
    {
      question: "When does VAT apply to construction services?",
      answer:
        "Domestic reverse charge and reduced-rate or zero-rate rules can apply depending on the type of work and customer. We classify supplies correctly so your invoices and returns match HMRC guidance.",
    },
    {
      question: "How should I track profit on projects?",
      answer:
        "Use job or project costing so you can see estimated versus actual costs, stage payments, and retention. That supports both management decisions and year-end accounts.",
    },
    {
      question: "What records should I keep for property disposals?",
      answer:
        "Keep purchase contracts, improvement costs, SDLT returns, and disposal details to support capital gains or corporation tax calculations when you sell or transfer property.",
    },
  ],
};
