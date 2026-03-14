import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type StartBusinessTrustMatrixIconKey = BookkeepingServiceScopeIconKey;

export const START_BUSINESS_TRUST_MATRIX_DATA: ServiceScopeData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises responsibility, accuracy, and transparency throughout every engagement.",
  items: [
    {
      title: "Accuracy Enforced",
      description:
        "Financial reporting and documentation must remain precise and reliable at every stage.",
      iconKey: "document-check" as StartBusinessTrustMatrixIconKey,
    },
    {
      title: "Accountability Retained",
      description:
        "Responsibility remains clearly defined so actions, decisions, and outcomes are always owned.",
      iconKey: "users" as StartBusinessTrustMatrixIconKey,
    },
    {
      title: "Compliance Mandatory",
      description:
        "All statutory obligations are addressed proactively rather than reactively.",
      iconKey: "badge-check" as StartBusinessTrustMatrixIconKey,
    },
    {
      title: "Process Controlled",
      description:
        "Structured systems and documented workflows reduce risk and maintain consistency.",
      iconKey: "boxes" as StartBusinessTrustMatrixIconKey,
    },
    {
      title: "Judgement Applied",
      description:
        "Professional expertise guides every key financial and regulatory decision.",
      iconKey: "calculator" as StartBusinessTrustMatrixIconKey,
    },
    {
      title: "Transparent Service",
      description:
        "Clients always understand their financial position, obligations, and next steps.",
      iconKey: "eye" as StartBusinessTrustMatrixIconKey,
    },
  ],
};

