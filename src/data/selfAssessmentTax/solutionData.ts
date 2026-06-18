import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type SelfAssessmentSolutionIconKey = BookkeepingSolutionIconKey;

export const SELF_ASSESSMENT_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our approach is simple, structured, and proactive — from reviewing income to managing HMRC correspondence.",
  steps: [
    {
      number: "01",
      title: "Review your income sources",
      iconKey: "search" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify allowances and risks",
      iconKey: "calculator" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "03",
      title: "Prepare the return accurately",
      iconKey: "document-check" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "04",
      title: "Submit on time",
      iconKey: "calendar-clock" as SelfAssessmentSolutionIconKey,
    },
    {
      number: "05",
      title: "Support you with HMRC queries",
      iconKey: "message" as SelfAssessmentSolutionIconKey,
    },
  ],
};
