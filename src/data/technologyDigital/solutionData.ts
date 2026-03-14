import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type TechnologyDigitalSolutionIconKey = BookkeepingSolutionIconKey;

export const TECHNOLOGY_DIGITAL_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured approach helps technology companies build a strong financial foundation while preparing for growth and investment.",
  steps: [
    {
      number: "01",
      title: "Prepare Financial Models",
      iconKey: "calculator" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "02",
      title: "Structure Employee Share Schemes",
      iconKey: "badge-check" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "03",
      title: "Manage Revenue Recognition",
      iconKey: "document-check" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "04",
      title: "Maximise R&D Tax Credits",
      iconKey: "flask" as TechnologyDigitalSolutionIconKey,
    },
    {
      number: "05",
      title: "Provide Strategic Finance Support",
      iconKey: "target" as TechnologyDigitalSolutionIconKey,
    },
  ],
} as const;

