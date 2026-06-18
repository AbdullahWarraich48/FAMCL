import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ManufacturingEngineeringIconKey = BookkeepingServiceScopeIconKey;

export const MANUFACTURING_ENGINEERING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Financial management and advisory for UK manufacturing and engineering firms, focusing on cost control, R&D tax credits, and inventory management.",
  items: [
    {
      title: "Financial Management & Advisory",
      description:
        "Financial management and advisory for UK manufacturing and engineering firms.",
      iconKey: "bar-chart" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Cost Control",
      description: "Focusing on cost control and per-unit profitability.",
      iconKey: "calculator" as ManufacturingEngineeringIconKey,
    },
    {
      title: "R&D Tax Credits",
      description: "R&D tax credits maximised and correctly documented.",
      iconKey: "flask" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Inventory Management",
      description: "Inventory valuation and stock control systems.",
      iconKey: "boxes" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Growth & Efficiency",
      description:
        "Financial forecasting and supply chain efficiency improvements.",
      iconKey: "factory" as ManufacturingEngineeringIconKey,
    },
  ],
};
