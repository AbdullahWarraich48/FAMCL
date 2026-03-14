import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type SelfAssessmentWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const SELF_ASSESSMENT_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Accurate Tax Returns",
  description:
    "Incorrect or late tax returns can result in automatic penalties and unnecessary stress. With our proactive approach, you ensure your tax position is clear, and you avoid costly mistakes.",
  items: [
    {
      title: "Avoid Penalties",
      description:
        "Late or incorrect returns trigger penalties immediately, and we ensure that doesn’t happen.",
      iconKey: "alert-triangle" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Make Tax Digital Compliance",
      description:
        "From April 2026, HMRC will require quarterly reports under Making Tax Digital for self-employed individuals and property income.",
      iconKey: "check-square" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Reduce HMRC Inquiries",
      description:
        "Inconsistent filings often lead to HMRC inquiries. Our accurate filings reduce this risk.",
      iconKey: "shield" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Prevent Overpayment",
      description:
        "Many individuals overpay taxes due to missed allowances. We ensure you claim everything you’re entitled to.",
      iconKey: "activity" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Alleviate Tax Stress",
      description:
        "We handle everything, removing the anxiety of last-minute tax filings and complex paperwork.",
      iconKey: "circle-dollar" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Clarity in Your Finances",
      description:
        "We make your tax position clear, helping you regain confidence in your financial matters.",
      iconKey: "zap" as SelfAssessmentWhyMattersIconKey,
    },
  ],
};

