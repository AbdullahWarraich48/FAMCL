import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ManufacturingEngineeringIconKey = BookkeepingServiceScopeIconKey;

export const MANUFACTURING_ENGINEERING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "We provide tailored financial management solutions for UK manufacturing and engineering firms, focusing on cost control, R&D tax credits, inventory management, and other critical areas that impact your bottom line.",
  items: [
    {
      title: "Cost Control & Profitability",
      description:
        "We help you implement robust cost accounting systems to track per-unit profitability and manage costs effectively.",
      iconKey: "calculator" as ManufacturingEngineeringIconKey,
    },
    {
      title: "R&D Tax Credit Claims",
      description:
        "We guide you in claiming R&D tax credits, maximising available reliefs and ensuring compliance with HMRC regulations.",
      iconKey: "flask" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Inventory Management",
      description:
        "We assist in managing inventory valuation and stock control systems to reduce waste and optimise operations.",
      iconKey: "boxes" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Financial Forecasting for Growth",
      description:
        "We provide financial forecasting to help plan for capital expenditure and future growth.",
      iconKey: "trend-up" as ManufacturingEngineeringIconKey,
    },
    {
      title: "Supply Chain Cost Optimisation",
      description:
        "We analyse supply chain costs and provide strategic advice on improving efficiency.",
      iconKey: "factory" as ManufacturingEngineeringIconKey,
    },
  ],
} as const;

