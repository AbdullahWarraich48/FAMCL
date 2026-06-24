import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type TaxEnquiriesServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const TAX_ENQUIRIES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "Tax Enquiries and Investigations",
  description:
    "Tax enquiries divert attention and consume valuable time for SME businesses. Our professional tax teams deal with HM Revenue and Customs on your behalf. Enquiries can be triggered for many reasons, including random selection each year, late submissions, or abnormal trends in tax returns.",
  items: [
    {
      title: "HMRC Representation",
      description:
        "We manage correspondence and communications with HMRC so you are not facing enquiries alone.",
      iconKey: "shield" as TaxEnquiriesServiceScopeIconKey,
    },
    {
      title: "Enquiry Management",
      description:
        "Structured support from initial notice through to resolution, with clear updates at every stage.",
      iconKey: "document-check" as TaxEnquiriesServiceScopeIconKey,
    },
    {
      title: "Compliance Support",
      description:
        "Practical advice to address HMRC concerns and reduce the risk of further issues arising.",
      iconKey: "badge-check" as TaxEnquiriesServiceScopeIconKey,
    },
    {
      title: "Record Review",
      description:
        "Thorough review of records and submissions to build a robust response to HMRC.",
      iconKey: "search" as TaxEnquiriesServiceScopeIconKey,
    },
    {
      title: "Peace of Mind",
      description:
        "Confidence that your enquiry is handled professionally while you focus on your business.",
      iconKey: "eye" as TaxEnquiriesServiceScopeIconKey,
    },
  ],
};
