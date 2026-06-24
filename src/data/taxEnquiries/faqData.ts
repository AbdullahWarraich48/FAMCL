import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const TAX_ENQUIRIES_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Tax Enquiries FAQs",
  description:
    "Common questions about HMRC enquiries and how our team supports you through the process.",
  items: [
    {
      question: "Why might HMRC open a tax enquiry?",
      answer:
        "Enquiries can arise from random selection, late submissions, inconsistencies in returns, or unusual trends compared with previous years. HMRC may also enquire into specific areas such as VAT, PAYE, or property income.",
    },
    {
      question: "Will I have to deal with HMRC directly?",
      answer:
        "We act on your behalf throughout the enquiry, handling correspondence, preparing responses, and keeping you informed so you can focus on your business.",
    },
    {
      question: "What types of tax enquiry do you support?",
      answer:
        "We support enquiries relating to self employment, capital gains, property income, VAT returns, late VAT registration, PAYE, CIS, and corporation tax.",
    },
    {
      question: "How long can a tax enquiry take?",
      answer:
        "Timescales vary depending on the scope of the enquiry and the records involved. We work to respond promptly and keep the process moving efficiently.",
    },
  ],
};
