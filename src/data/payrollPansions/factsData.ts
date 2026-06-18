import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type PayrollFactsIconKey = BookkeepingFactsIconKey;

export const PAYROLL_PANSIONS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Payroll Compliance in Context",
  description:
    "Payroll accuracy and pension compliance play a critical role in protecting businesses from regulatory penalties and employee disputes.",
  items: [
    {
      stat: "Small Error Penalties",
      description: "Payroll penalties apply even for small errors.",
      source: "HMRC",
      iconKey: "alert-octagon" as PayrollFactsIconKey,
    },
    {
      stat: "Auto-Enrolment",
      description: "Auto-enrolment compliance is legally mandatory.",
      source: "The Pensions Regulator",
      iconKey: "users" as PayrollFactsIconKey,
    },
    {
      stat: "Common SME Issue",
      description: "Payroll compliance failures are a common SME issue.",
      source: "Chartered Institute of Payroll Professionals",
      iconKey: "file-warning" as PayrollFactsIconKey,
    },
  ],
};
