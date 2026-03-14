import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type PayrollFactsIconKey = BookkeepingFactsIconKey;

export const PAYROLL_PANSIONS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Payroll Compliance in the UK",
  description:
    "Payroll accuracy and pension compliance play a critical role in protecting businesses from regulatory penalties and employee disputes.",
  items: [
    {
      stat: "Payroll Penalties for Errors",
      description:
        "Payroll penalties can apply even when errors are small or administrative.",
      source: "HMRC",
      iconKey: "trend" as PayrollFactsIconKey,
    },
    {
      stat: "Mandatory Pension Compliance",
      description:
        "Workplace pensions are a legal requirement for most eligible employees.",
      source: "The Pensions Regulator",
      iconKey: "file-warning" as PayrollFactsIconKey,
    },
    {
      stat: "Common SME Compliance Issue",
      description:
        "Payroll compliance failures remain a common challenge for small and medium sized businesses.",
      source: "Chartered Institute of Payroll Professionals",
      iconKey: "building" as PayrollFactsIconKey,
    },
  ],
};

