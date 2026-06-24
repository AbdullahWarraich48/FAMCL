export type OutsourceServiceItem = {
  title: string;
  description: string;
};

export const OUTSOURCE_PAGE_DATA = {
  tagLabel: "Resources",
  title: "Outsource",
  description:
    "Comprehensive accounts department services so you can focus on running and growing your business.",
  introParagraphs: [
    "Increasing financial reporting requirements place added pressure on directors and business owners, reducing the time available to focus on managing and growing their core business. We provide comprehensive accounts department services which allow business owners to focus on running and growing their business.",
    "Our outsourcing team provides flexible, tailored solutions designed around each client's specific needs, whether through ongoing support, short-term assistance, or a fully integrated service. By drawing on expertise across accounting, tax, VAT, and audit, we deliver efficient, reliable solutions that provide peace of mind.",
  ],
  servicesHeading: "Our Outsource Services includes:",
  services: [
    {
      title: "Bookkeeping and filing",
      description:
        "Accurate recording of day-to-day transactions, bank reconciliations, and organised filing so your records stay up to date and compliant.",
    },
    {
      title: "Budgeting",
      description:
        "Practical budgets aligned to your business goals, helping you plan spending, control costs, and track performance throughout the year.",
    },
    {
      title: "Cash flow forecasting and monitoring",
      description:
        "Regular cash flow forecasts and monitoring so you can anticipate shortages, manage working capital, and make informed financial decisions.",
    },
    {
      title: "Management accounts and reporting",
      description:
        "Clear monthly or quarterly management reports with meaningful insight into profitability, trends, and areas that need attention.",
    },
    {
      title: "Payroll and Workplace Pension",
      description:
        "Reliable payroll processing, PAYE submissions, and auto-enrolment support to keep your team paid correctly and on time.",
    },
    {
      title: "Purchase ledger management",
      description:
        "Supplier invoice processing, payment scheduling, and creditor control to maintain accurate balances and strong supplier relationships.",
    },
    {
      title: "Sales ledger management",
      description:
        "Customer invoicing, credit control, and debtor follow-up to improve cash collection and keep your sales records up to date.",
    },
    {
      title: "VAT returns",
      description:
        "Preparation and submission of VAT returns with careful review of transactions to support compliance and reduce the risk of errors.",
    },
  ] satisfies OutsourceServiceItem[],
} as const;
