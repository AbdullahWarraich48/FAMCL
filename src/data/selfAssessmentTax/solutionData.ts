import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type SelfAssessmentSolutionIconKey = BookkeepingSolutionIconKey;

export const SELF_ASSESSMENT_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our approach is simple, structured, and proactive. From understanding your income sources to managing all HMRC correspondence, we make sure your Self-Assessment tax return is submitted correctly and on time.",
  steps: [
    {
      number: "01",
      title: "Review Your Income Sources",
      iconKey: "search" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify Allowances & Risks",
      iconKey: "cogs" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "03",
      title: "Prepare the Return Accurately",
      iconKey: "message" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "04",
      title: "Submit On Time",
      iconKey: "bar-chart" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "05",
      title: "Support with HMRC Queries",
      iconKey: "heart-check" as SelfAssessmentSolutionIconKey,
    },
  ],
};

