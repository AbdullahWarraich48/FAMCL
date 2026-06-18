import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type SelfAssessmentFactsIconKey = BookkeepingFactsIconKey;

export const SELF_ASSESSMENT_TAX_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Self-Assessment in Context",
  description:
    "Filing a tax return correctly is essential to avoid penalties and unnecessary scrutiny.",
  items: [
    {
      stat: "12 Million Filers",
      description:
        "Over 12 million people file Self-Assessment returns annually.",
      source: "HMRC",
      iconKey: "users" as SelfAssessmentFactsIconKey,
    },
    {
      stat: "Immediate Penalties",
      description: "Penalties apply immediately for late submissions.",
      source: "HMRC",
      iconKey: "alert-octagon" as SelfAssessmentFactsIconKey,
    },
    {
      stat: "Enquiry Triggers",
      description:
        "HMRC enquiries often begin due to inconsistencies, not fraud.",
      source: "HMRC",
      iconKey: "file-warning" as SelfAssessmentFactsIconKey,
    },
  ],
};
