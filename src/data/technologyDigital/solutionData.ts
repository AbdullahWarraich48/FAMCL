import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type TechnologyDigitalSolutionIconKey = BookkeepingSolutionIconKey;

export const TECHNOLOGY_DIGITAL_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach helps technology companies build a strong financial foundation while preparing for growth and investment.",
  steps: [
    {
      number: "01",
      title:
        "Prepare robust financial models for forecasting and investment readiness",
      iconKey: "calculator" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "02",
      title: "Structure and administer EMI and other employee share option schemes",
      iconKey: "badge-check" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "03",
      title:
        "Manage complex revenue recognition for SaaS and project-based models",
      iconKey: "document-check" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure R&D tax credit claims are maximised and defensible",
      iconKey: "flask" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Provide outsourced finance-director-level support for scaling businesses",
      iconKey: "target" as TechnologyDigitalSolutionIconKey,
    },
  ],
};
