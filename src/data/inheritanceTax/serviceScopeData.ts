import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type InheritanceServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const INHERITANCE_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "Estate planning and Inheritance Tax management ensure that your assets are efficiently transferred to the next generation while reducing unnecessary tax exposure. We provide clear, strategic advice to help you manage these complex areas with confidence.",
  items: [
    {
      title: "Review Estate Structure",
      description:
        "We review your current estate structure to identify areas that may need adjustment to reduce tax exposure.",
      iconKey: "network" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Identify Tax Exposure",
      description:
        "We identify potential Inheritance Tax liabilities and create strategies to minimise them.",
      iconKey: "badge-percent" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Explain Planning Options",
      description:
        "We explain various estate planning options, such as trusts, gifts, and tax-efficient strategies.",
      iconKey: "message-square" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Coordinate with Professionals",
      description:
        "If needed, we collaborate with legal and financial professionals to ensure your plan is comprehensive.",
      iconKey: "users" as InheritanceServiceScopeIconKey,
    },
    {
      title: "Keep Plans Under Review",
      description:
        "We monitor and update your estate and retirement plans as your circumstances evolve.",
      iconKey: "calendar-clock" as InheritanceServiceScopeIconKey,
    },
  ],
};

