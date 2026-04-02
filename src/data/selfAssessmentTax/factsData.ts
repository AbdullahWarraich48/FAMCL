import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type SelfAssessmentFactsIconKey = BookkeepingFactsIconKey;

export const SELF_ASSESSMENT_TAX_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Self-Assessment in the UK",
  description:
    "Filing a tax return correctly is essential to avoid penalties and unnecessary scrutiny. Here’s why it matters:",
  items: [
    {
      stat: "12 Million Filers",
      description:
        "Over 12 million people file Self-Assessment tax returns annually in the UK.",
      source: "HMRC",
      iconKey: "users" as SelfAssessmentFactsIconKey,
    },
    {
      stat: "Penalties for Late Filings",
      description:
        "Penalties are applied immediately for late submissions, even if they are unintentional.",
      source: "HMRC",
      iconKey: "alert-octagon" as SelfAssessmentFactsIconKey,
    },
    {
      stat: "HMRC Inquiries",
      description:
        "HMRC inquiries often begin due to inconsistencies in tax filings, not fraud.",
      source: "HMRC",
      iconKey: "file-warning" as SelfAssessmentFactsIconKey,
    },
  ],
};

