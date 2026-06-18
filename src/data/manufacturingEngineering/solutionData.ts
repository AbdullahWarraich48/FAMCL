import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ManufacturingEngineeringSolutionIconKey = BookkeepingSolutionIconKey;

export const MANUFACTURING_ENGINEERING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured framework addresses the unique financial needs of manufacturing and engineering firms.",
  steps: [
    {
      number: "01",
      title:
        "Implement robust cost accounting to analyse per-unit profitability",
      iconKey: "calculator" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "02",
      title: "Manage inventory valuation and stock control systems",
      iconKey: "boxes" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "03",
      title: "Maximise and correctly document R&D tax credit claims",
      iconKey: "flask" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "04",
      title:
        "Provide financial forecasting for capital expenditure and growth",
      iconKey: "bar-chart" as ManufacturingEngineeringSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Analyse supply chain costs and advise on efficiency improvements",
      iconKey: "factory" as ManufacturingEngineeringSolutionIconKey,
    },
  ],
};
