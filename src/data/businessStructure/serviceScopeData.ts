import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type BusinessStructureIconKey = BookkeepingServiceScopeIconKey;

export const BUSINESS_STRUCTURE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "Selecting the right legal and tax structure for your business is the first step toward achieving growth and minimising risks. We help you choose the optimal structure, from sole trader to limited company, ensuring it aligns with your business strategy and goals.",
  items: [
    {
      title: "Choosing the Right Structure",
      description:
        "We guide you through the decision-making process, whether you need a sole trader, partnership, LLP, or limited company structure.",
      iconKey: "document-check" as BusinessStructureIconKey,
    },
    {
      title: "Risk & Liability Management",
      description:
        "We assess how each structure reduces or shares risk and aligns with your business’s risk profile.",
      iconKey: "shield" as BusinessStructureIconKey,
    },
    {
      title: "Tax Efficiency Planning",
      description:
        "Our experts assess tax implications and ensure your business structure is optimised for the most tax-efficient strategy.",
      iconKey: "bar-chart" as BusinessStructureIconKey,
    },
    {
      title: "Investment & Funding Preparation",
      description:
        "We help you choose a structure that supports investment readiness and appeals to potential lenders or investors.",
      iconKey: "trend-up" as BusinessStructureIconKey,
    },
    {
      title: "Company Formation & Registration",
      description:
        "We handle the entire company formation and registration process, ensuring compliance with UK law.",
      iconKey: "eye" as BusinessStructureIconKey,
    },
  ],
};

