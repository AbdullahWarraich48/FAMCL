import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const TECHNOLOGY_DIGITAL_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Technology & Digital FAQs",
  description:
    "Typical questions on R&D, funding rounds, share schemes, and international SaaS revenue for tech businesses.",
  items: [
    {
      question: "How do EMI share options work?",
      answer:
        "Enterprise Management Incentives can offer tax-advantaged options to employees if qualifying conditions are met. We help with valuations, scheme rules, and HMRC notifications.",
    },
    {
      question: "What tax issues arise from overseas customers?",
      answer:
        "VAT, place of supply, and permanent establishment rules can affect digital services sold abroad. We map your sales model to the right treatment and evidence.",
    },
    {
      question: "How is R&D assessed for software companies?",
      answer:
        "HMRC looks for systematic R&D resolving technical uncertainty—not routine development. We document projects and costs so claims are defensible.",
    },
    {
      question: "What should investors see in our financials?",
      answer:
        "Clear revenue recognition, burn rate, runway, and cap table support due diligence. We help present metrics consistently across funding rounds.",
    },
  ],
};
