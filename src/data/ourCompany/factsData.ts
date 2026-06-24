import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type OurCompanyFactsIconKey = BookkeepingFactsIconKey;

export const OUR_COMPANY_FACTS_DATA: FactsData = {
  sectionLabel: "Core Principles",
  heading: "Our Services Based on Three Core Principles",
  description:
    "We ensure to provide quality service with great care of compliance, which creates value as convenience and growth for our clients.",
  cardStyle: "principles",
  items: [
    {
      stat: "Quality Service",
      description:
        "Professional accounting and advisory delivered with accuracy, clarity, and consistent attention to detail.",
      iconKey: "badge-percent" as OurCompanyFactsIconKey,
    },
    {
      stat: "Care of Compliance",
      description:
        "Regulatory obligations handled carefully and proactively, keeping your records accurate and fully compliant.",
      iconKey: "file-warning" as OurCompanyFactsIconKey,
    },
    {
      stat: "Convenience & Growth",
      description:
        "Practical, accessible support that saves you time and helps your business grow with confidence.",
      iconKey: "trend" as OurCompanyFactsIconKey,
    },
  ],
};
