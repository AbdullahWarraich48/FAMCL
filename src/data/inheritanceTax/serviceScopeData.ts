import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type InheritanceServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const INHERITANCE_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We help structure your affairs to protect your family. Inheritance Tax exposure is reviewed. Assets are planned for efficient transfer. Future risks are identified early. Peace of mind replaces uncertainty. Develop Retirement Strategy tax efficient exit for selling or smooth handing over to next generation.",
  items: [
    {
      title: "Structure Your Affairs",
      description: "We help structure your affairs to protect your family.",
      iconKey: "shield" as InheritanceServiceScopeIconKey,
    },
    {
      title: "IHT Exposure Review",
      description: "Inheritance Tax exposure is reviewed.",
      iconKey: "search" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Efficient Asset Transfer",
      description: "Assets are planned for efficient transfer.",
      iconKey: "network" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Early Risk Identification",
      description:
        "Future risks are identified early. Peace of mind replaces uncertainty.",
      iconKey: "eye" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Retirement Strategy",
      description:
        "Develop Retirement Strategy tax efficient exit for selling or smooth handing over to next generation.",
      iconKey: "calendar-clock" as InheritanceServiceScopeIconKey,
    },
  ],
};
