import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ContractorsFreelancersServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Approach",
  heading: "What We Support for Contractors & Freelancers",
  description:
    "Compliance and tax support for individuals working under contracts or freelance arrangements, where regulatory interpretation materially affects outcomes.",
  items: [
    {
      title: "Compliance Support",
      description:
        "Compliance support for individuals working under contracts or freelance arrangements.",
      iconKey: "shield" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Tax Support",
      description:
        "Tax support aligned to current rules and contractual reality.",
      iconKey: "receipt-tax" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Contract & Freelance Work",
      description:
        "For individuals working under contracts or freelance arrangements.",
      iconKey: "document-check" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Regulatory Interpretation",
      description:
        "Where regulatory interpretation materially affects outcomes.",
      iconKey: "scale" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Defensible Outcomes",
      description:
        "Advice grounded in interpretation, not assumption.",
      iconKey: "eye" as ContractorsFreelancersServiceScopeIconKey,
    },
  ],
};
