import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ContractorsFreelancersServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Support for Contractors & Freelancers",
  description:
    "Contract work often sits between employment and business activity, making compliance more complex. Our service provides structured support to ensure your working arrangements remain clear, defensible, and compliant.",
  items: [
    {
      title: "Contract & Working Arrangement Review",
      description:
        "We analyse your working arrangements and contractual terms to determine the correct tax treatment.",
      iconKey: "document-check" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "IR35 & Status Guidance",
      description:
        "We assess employment status rules and help align your working arrangements with current IR35 guidance.",
      iconKey: "shield" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Tax Exposure Assessment",
      description:
        "We evaluate potential tax risks under current legislation to ensure you minimise unexpected liabilities.",
      iconKey: "receipt-tax" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Structure Setup & Compliance",
      description:
        "We establish an appropriate operating structure that supports both compliance and financial clarity.",
      iconKey: "boxes" as ContractorsFreelancersServiceScopeIconKey,
    },
    {
      title: "Ongoing Regulatory Monitoring",
      description:
        "We monitor regulatory changes affecting contractors and freelancers to ensure your structure remains compliant.",
      iconKey: "eye" as ContractorsFreelancersServiceScopeIconKey,
    },
  ],
};

