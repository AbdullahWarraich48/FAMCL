import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type HowWeWorkFactsIconKey = BookkeepingFactsIconKey;

export const HOW_WE_WORK_FACTS_DATA: FactsData = {
  sectionLabel: "Our Working Model",
  heading: "A Clear Process That Supports Informed Decisions",
  description:
    "Our working model follows a disciplined framework that ensures clarity throughout every engagement.",
  items: [
    {
      stat: "Understand the Full Context",
      description:
        "We begin by reviewing the complete financial and regulatory situation before action is taken.",
      source: "FAM Chartered Accountants",
      iconKey: "chart-pie" as HowWeWorkFactsIconKey,
    },
    {
      stat: "Identify Exposure and Uncertainty",
      description:
        "Potential risks and areas of uncertainty are identified early, so they can be addressed with judgement rather than urgency.",
      source: "FAM Chartered Accountants",
      iconKey: "alert-octagon" as HowWeWorkFactsIconKey,
    },
    {
      stat: "Apply Regulation Consistently",
      description:
        "Compliance rules are applied carefully and consistently, supporting reliable outcomes over the long term.",
      source: "FAM Chartered Accountants",
      iconKey: "building" as HowWeWorkFactsIconKey,
    },
  ],
};

