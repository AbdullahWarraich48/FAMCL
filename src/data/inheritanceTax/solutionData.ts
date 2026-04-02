import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type InheritanceSolutionIconKey = BookkeepingSolutionIconKey;

export const INHERITANCE_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our approach is structured and proactive. We work with you to understand your goals, identify potential risks, and ensure that your estate and retirement strategy are tailored to your family’s needs.",
  steps: [
    {
      number: "01",
      title: "Review Estate Structure",
      iconKey: "search" as InheritanceSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify Tax Exposure",
      iconKey: "calculator" as InheritanceSolutionIconKey,
    },
    {
      number: "03",
      title: "Explain Planning Options",
      iconKey: "message" as InheritanceSolutionIconKey,
    },
    {
      number: "04",
      title: "Coordinate with Professionals",
      iconKey: "network" as InheritanceSolutionIconKey,
    },
    {
      number: "05",
      title: "Keep Plans Under Review",
      iconKey: "calendar-clock" as InheritanceSolutionIconKey,
    },
  ],
};

