import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CorporationTaxIconKey = BookkeepingServiceScopeIconKey;

export const CORPORATION_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "We manage your business tax obligations under UK Law. This includes calculation, planning, and filing. Tax is planned ahead, not rushed at deadlines. Allowances and reliefs are identified early. Your structure is reviewed for efficiency. HMRC communication is handled professionally. You stay compliant without fear.",
  items: [
    {
      title: "Calculation, Planning & Filing",
      description:
        "We manage your business tax obligations under UK Law. This includes calculation, planning, and filing.",
      iconKey: "calculator" as CorporationTaxIconKey,
    },
    {
      title: "Planned Ahead of Deadlines",
      description: "Tax is planned ahead, not rushed at deadlines.",
      iconKey: "calendar-clock" as CorporationTaxIconKey,
    },
    {
      title: "Allowances & Reliefs",
      description: "Allowances and reliefs are identified early.",
      iconKey: "badge-percent" as CorporationTaxIconKey,
    },
    {
      title: "Structure Review",
      description: "Your structure is reviewed for efficiency.",
      iconKey: "network" as CorporationTaxIconKey,
    },
    {
      title: "HMRC Communication",
      description:
        "HMRC communication is handled professionally. You stay compliant without fear.",
      iconKey: "message-square" as CorporationTaxIconKey,
    },
  ],
};
