import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type SelfAssessmentIconKey = BookkeepingServiceScopeIconKey;

export const SELF_ASSESSMENT_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We prepare and submit your Self-Assessment tax return accurately and on time. All sources of income are reviewed, not just the obvious ones. Allowances and reliefs are applied correctly. Errors and omissions are identified early. HMRC correspondence is handled for you. Deadlines stop being stressful. Your tax position becomes clear, not confusing.",
  items: [
    {
      title: "Accurate Preparation & Filing",
      description:
        "We prepare and submit your Self-Assessment tax return accurately and on time.",
      iconKey: "document-check" as SelfAssessmentIconKey,
    },
    {
      title: "All Income Reviewed",
      description:
        "All sources of income are reviewed, not just the obvious ones.",
      iconKey: "search" as SelfAssessmentIconKey,
    },
    {
      title: "Allowances & Reliefs",
      description: "Allowances and reliefs are applied correctly.",
      iconKey: "badge-percent" as SelfAssessmentIconKey,
    },
    {
      title: "Early Error Detection",
      description: "Errors and omissions are identified early.",
      iconKey: "eye" as SelfAssessmentIconKey,
    },
    {
      title: "HMRC & Clear Position",
      description:
        "HMRC correspondence is handled for you. Deadlines stop being stressful. Your tax position becomes clear, not confusing.",
      iconKey: "message-square" as SelfAssessmentIconKey,
    },
  ],
};
