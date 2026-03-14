import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CapitalGainsServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CAPITAL_GAINS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "Managing CGT requires careful attention to detail, especially with property and asset disposals. We ensure you comply with HMRC regulations, apply the correct reliefs, and file your reports on time.",
  items: [
    {
      title: "CGT Calculation on Property Sales",
      description:
        "We accurately calculate Capital Gains Tax on residential and investment property sales, ensuring you only pay what’s due.",
      iconKey: "document-check" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Allowance and Relief Applications",
      description:
        "We apply all relevant allowances and reliefs so your CGT liability is minimised.",
      iconKey: "bar-chart" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Making Tax Digital (MTD) Compliance",
      description:
        "For businesses that meet the reporting threshold, we ensure your CGT-related income is reported under Making Tax Digital regulations.",
      iconKey: "shield" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Timely Report Submission",
      description:
        "We manage reporting deadlines for CGT and file your returns on time, avoiding penalties.",
      iconKey: "eye" as CapitalGainsServiceScopeIconKey,
    },
    {
      title: "Future Tax Planning",
      description:
        "We review your position and provide proactive advice on future tax planning to protect your proceeds.",
      iconKey: "trend-up" as CapitalGainsServiceScopeIconKey,
    },
  ],
};

