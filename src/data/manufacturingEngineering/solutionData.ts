import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ManufacturingEngineeringSolutionIconKey = BookkeepingSolutionIconKey;

export const MANUFACTURING_ENGINEERING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our approach is designed to address the unique financial needs of manufacturing and engineering firms. From cost accounting to R&D claims, our structured framework ensures you optimise your resources and maximise profitability.",
  steps: [
    {
      number: "01",
      title: "Implement Robust Cost Accounting",
      iconKey: "calculator" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "02",
      title: "Manage Inventory & Stock Control",
      iconKey: "boxes" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "03",
      title: "Maximise R&D Tax Credit Claims",
      iconKey: "flask" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "04",
      title: "Financial Forecasting for Growth",
      iconKey: "bar-chart" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "05",
      title: "Analyse Supply Chain Costs",
      iconKey: "factory" as ManufacturingEngineeringSolutionIconKey,
    },
  ],
} as const;

