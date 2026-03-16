"use client";

export default function QuickBooksIntroduction() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="quickbooks-introduction-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px] space-y-10">
        {/* Introduction */}
        <div>
          <h2
            id="quickbooks-introduction-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Introduction
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            QuickBooks is one of the most widely used cloud accounting platforms for small and
            growing businesses. The software provides powerful tools for managing finances, tracking
            expenses, generating invoices, and monitoring overall business performance.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            With secure cloud access and automated workflows, QuickBooks helps businesses keep
            their financial records accurate, up to date, and easy to review at any time from
            desktop or mobile devices.
          </p>
        </div>

        {/* Key features */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Key Features
          </h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">Automated Expense Tracking</span> –
              Automatically categorise and track expenses to simplify bookkeeping.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Invoice Management</span> – Create and
              send customisable invoices and manage outstanding balances efficiently.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Financial Reporting</span> – Generate
              built-in reports that provide clear insights into profit, expenses, and cashflow.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Bank Integration</span> – Connect
              business bank accounts to automatically import financial transactions.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Cloud-Based Access</span> – Access
              financial information securely from anywhere using desktop or mobile devices.
            </li>
          </ul>
        </div>

        {/* Why businesses use QuickBooks */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Why Businesses Use QuickBooks
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            QuickBooks combines powerful accounting functionality with a user-friendly interface,
            making it suitable for many small and medium-sized businesses.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Benefits include:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Improved visibility of business performance</li>
            <li>Faster, more accurate bookkeeping</li>
            <li>Streamlined invoicing and payment tracking</li>
            <li>Time savings compared with manual record-keeping</li>
          </ul>
        </div>

        {/* How we support QuickBooks users */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            How We Support QuickBooks Users
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            We help clients implement QuickBooks in a way that supports both effective bookkeeping
            and accurate financial reporting.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Our involvement typically includes:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Initial QuickBooks setup and chart of accounts design</li>
            <li>Training on daily tasks such as invoicing, expenses, and bank reconciliation</li>
            <li>Advice on using dashboards and reports for cashflow and tax planning</li>
            <li>
              Ongoing support to ensure QuickBooks remains aligned with your wider accounting
              processes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

