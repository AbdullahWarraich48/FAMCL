import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type SelfAssessmentIconKey = BookkeepingServiceScopeIconKey;

export const SELF_ASSESSMENT_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "Self-Assessment tax returns require careful attention to detail and timely filing. We handle the entire process to ensure your return is complete and compliant with all regulations.",
  items: [
    {
      title: "Review All Income Sources",
      description:
        "We examine all your sources of income, ensuring nothing is missed.",
      iconKey: "document-check" as SelfAssessmentIconKey,
    },
    {
      title: "Apply Allowances & Reliefs",
      description:
        "We apply the relevant allowances and reliefs to reduce the amount of tax you pay.",
      iconKey: "bar-chart" as SelfAssessmentIconKey,
    },
    {
      title: "Identify Errors Early",
      description:
        "Potential errors and omissions are identified and corrected before submission.",
      iconKey: "eye" as SelfAssessmentIconKey,
    },
    {
      title: "HMRC Correspondence",
      description:
        "We manage all communication with HMRC, removing the hassle for you.",
      iconKey: "shield" as SelfAssessmentIconKey,
    },
    {
      title: "Accurate & Timely Filing",
      description:
        "We ensure your Self-Assessment tax return is filed accurately and on time.",
      iconKey: "trend-up" as SelfAssessmentIconKey,
    },
  ],
};

