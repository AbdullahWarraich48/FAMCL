import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const FAQS_PAGE_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "General Questions About Our Services",
  description:
    "Our approach is structured and practical. We focus on clarity first, then consistency. Clear answers to common questions.",
  categories: [
    {
      categoryTitle: "FAM Chartered Accountants Services",
      items: [
        {
          question: "What services do you offer?",
          answer:
            "We provide accounting, tax, and business advisory support for individuals and organisations. That typically includes annual accounts, corporation tax and self-assessment, VAT, payroll, bookkeeping, management reporting, and tailored advice on structure, compliance, and planning—aligned to what you need.",
        },
        {
          question: "How do I get started with your services?",
          answer:
            "Contact us for an initial conversation about your situation and goals. We agree scope, timelines, and how we will work together (documents, meetings, and reporting). Once engaged, we onboard you with a clear checklist so nothing important is missed.",
        },
        {
          question: "Do you offer advice for individuals as well as businesses?",
          answer:
            "Yes. We advise sole traders, directors, landlords, contractors, and private clients on tax returns, property income, pensions and retirement planning, inheritance and estate considerations, and other personal tax matters alongside company-focused work.",
        },
      ],
    },
    {
      categoryTitle: "Tax & Compliance",
      items: [
        {
          question: "What is Making Tax Digital (MTD) and do I need to comply?",
          answer:
            "MTD is HMRC’s programme for keeping digital records and using compatible software to submit certain taxes. Requirements depend on your tax and business type (for example VAT MTD rules and future income tax self-assessment MTD). We tell you what applies to you and help you stay compliant.",
        },
        {
          question: "How can I make sure I'm compliant with VAT rules?",
          answer:
            "Use correct VAT treatment on sales and purchases, keep adequate records, submit returns on time through MTD where required, and reconcile regularly. We can review your registrations, schemes, invoices, and filings so errors are caught before they become problems.",
        },
        {
          question: "What happens if I miss a tax deadline?",
          answer:
            "Late filing and late payment can trigger penalties and interest. If you have missed a deadline, act quickly: bring records up to date, file as soon as possible, and pay or arrange a time-to-pay plan if needed. We can help you correct filings and minimise further exposure.",
        },
      ],
    },
    {
      categoryTitle: "Business Advice",
      items: [
        {
          question: "How can you help my business grow?",
          answer:
            "We combine financial clarity with practical advice: management accounts, cash-flow forecasting, margin and pricing reviews, funding and investment decisions, and tax-efficient profit extraction. Growth is easier when decisions are backed by numbers you trust.",
        },
        {
          question: "How do I choose the right business structure?",
          answer:
            "The right structure balances liability, tax, administration, and your plans (e.g. sole trader, partnership, or limited company). We compare options using your expected profits, risk, and long-term goals—not generic rules of thumb.",
        },
        {
          question: "What should I do if my business is facing cash-flow problems?",
          answer:
            "Map inflows and outflows, prioritise statutory payments, speak to creditors early, and review costs and pricing. We help you build a short-term cash plan, model scenarios, and explore options such as financing or restructuring before problems escalate.",
        },
      ],
    },
    {
      categoryTitle: "Self-Assessment Tax Returns",
      items: [
        {
          question: "What is a self-assessment tax return and do I need to file one?",
          answer:
            "Self-assessment is how many individuals report income and gains to HMRC and pay any tax due. You may need to file if you are self-employed, a company director, have untaxed income, or meet other HMRC criteria. We confirm whether you must register and what to include.",
        },
        {
          question: "How can I avoid overpaying tax on my self-assessment?",
          answer:
            "Claim all allowable expenses and reliefs you are entitled to, use correct allowances, and align payments on account with actual income. We review your return for missed deductions and planning opportunities so you pay the right amount—not more.",
        },
        {
          question: "What documents do I need to file my self-assessment tax return?",
          answer:
            "Typically: P60/P45, bank statements, invoices and receipts, rental records, dividend vouchers, pension contributions, student loan details, and any other income or gains documentation. We give you a tailored list so gathering records is straightforward.",
        },
      ],
    },
    {
      categoryTitle: "Business Structuring",
      items: [
        {
          question: "What is the most tax-efficient structure for my business?",
          answer:
            "There is no single answer: it depends on profit level, how you take money out, risk, and future plans. We model take-home outcomes and compliance costs across structures (e.g. sole trader vs limited company) so you can choose with confidence.",
        },
        {
          question: "Should I register my business as a limited company?",
          answer:
            "A limited company can offer limited liability and certain tax planning options, but it also brings filing duties and governance. We weigh pros and cons for your specific figures and appetite for administration before you decide.",
        },
        {
          question: "Can I change my business structure later on?",
          answer:
            "Yes, many businesses move between sole trader, partnership, and limited company as they grow. Transfers have tax and legal implications (e.g. incorporation, asset transfers). We plan the change to be orderly and as efficient as the rules allow.",
        },
      ],
    },
  ],
};
