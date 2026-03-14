import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type CareersFactsIconKey = BookkeepingFactsIconKey;

export const CAREERS_FACTS_DATA: FactsData = {
  sectionLabel: "Who We Look For",
  heading: "Professionals Aligned With Our Values",
  description:
    "We seek individuals who share the firm’s commitment to careful professional work and responsible decision-making.",
  items: [
    {
      stat: "Attention to Detail",
      description:
        "Strong analytical thinking and careful review of financial and regulatory information, with a preference for thoughtful problem-solving rather than routine task completion.",
      source: "FAM Chartered Accountants",
      iconKey: "trend" as CareersFactsIconKey,
    },
    {
      stat: "Comfort With Responsibility",
      description:
        "Confidence in handling work that carries professional and regulatory consequences, supported by a disciplined and organised approach.",
      source: "FAM Chartered Accountants",
      iconKey: "clock" as CareersFactsIconKey,
    },
    {
      stat: "Respect for Regulatory Standards",
      description:
        "An understanding that compliance and accuracy are fundamental to professional work, with a commitment to maintaining high standards.",
      source: "FAM Chartered Accountants",
      iconKey: "users" as CareersFactsIconKey,
    },
  ],
};

