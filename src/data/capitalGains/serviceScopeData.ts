import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CapitalGainsServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CAPITAL_GAINS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We calculate Capital Gains Tax on property and asset sales. Residential and investment properties are handled correctly. Allowable costs and reliefs are applied properly. Reporting deadlines are managed for you. Reporting income under Making Tax Digital – MTD if come under its reporting threshold. Your position is reviewed before HMRC submission. Unexpected tax bills are avoided.",
  items: [
    {
      title: "CGT Calculation",
      description:
        "We calculate Capital Gains Tax on property and asset sales.",
      iconKey: "calculator" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Residential & Investment Property",
      description:
        "Residential and investment properties are handled correctly.",
      iconKey: "network" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Costs & Reliefs",
      description: "Allowable costs and reliefs are applied properly.",
      iconKey: "badge-percent" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Deadlines & MTD Reporting",
      description:
        "Reporting deadlines are managed for you. Reporting income under Making Tax Digital – MTD if come under its reporting threshold.",
      iconKey: "calendar-clock" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Pre-Submission Review",
      description:
        "Your position is reviewed before HMRC submission. Unexpected tax bills are avoided.",
      iconKey: "document-check" as CapitalGainsServiceScopeIconKey,
    },
  ],
};
