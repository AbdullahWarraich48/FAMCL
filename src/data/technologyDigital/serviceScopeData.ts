import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type TechnologyDigitalIconKey = BookkeepingServiceScopeIconKey;

export const TECHNOLOGY_DIGITAL_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Strategic financial support for the UK's tech and digital sector, from startups to scale-ups, with a focus on R&D, fundraising, and employee share schemes.",
  items: [
    {
      title: "Strategic Financial Support",
      description:
        "Strategic financial support for the UK's tech and digital sector, from startups to scale-ups.",
      iconKey: "bar-chart" as TechnologyDigitalIconKey,
    },
    {
      title: "R&D Focus",
      description: "Focus on R&D tax credits and defensible claims.",
      iconKey: "flask" as TechnologyDigitalIconKey,
    },
    {
      title: "Fundraising Readiness",
      description: "Financial models and reporting for fundraising and investment.",
      iconKey: "trend-up" as TechnologyDigitalIconKey,
    },
    {
      title: "Employee Share Schemes",
      description: "EMI and other employee share option schemes.",
      iconKey: "users" as TechnologyDigitalIconKey,
    },
    {
      title: "Scale-Up Support",
      description:
        "Finance-director-level support as your business scales.",
      iconKey: "target" as TechnologyDigitalIconKey,
    },
  ],
};
