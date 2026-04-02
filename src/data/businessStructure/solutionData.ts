import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type BusinessStructureSolutionIconKey = BookkeepingSolutionIconKey;

export const BUSINESS_STRUCTURE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our approach is structured to guide you through the process of selecting the right legal and tax structure for your business. From the initial assessment to ongoing support, we ensure your business is set up correctly for long-term success.",
  steps: [
    {
      number: "01",
      title: "Assess Your Business Model",
      iconKey: "search" as BusinessStructureSolutionIconKey,
    },
    {
      number: "02",
      title: "Explain Structure Options",
      iconKey: "message" as BusinessStructureSolutionIconKey,
    },
    {
      number: "03",
      title: "Model Tax Implications",
      iconKey: "calculator" as BusinessStructureSolutionIconKey,
    },
    {
      number: "04",
      title: "Assist with Formation & Registration",
      iconKey: "document-check" as BusinessStructureSolutionIconKey,
    },
    {
      number: "05",
      title: "Provide Ongoing Support",
      iconKey: "message" as BusinessStructureSolutionIconKey,
    },
  ],
};

