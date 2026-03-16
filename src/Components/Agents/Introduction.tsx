"use client";

export default function AgentIntroduction() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="agent-introduction-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px] space-y-10">
        {/* Introduction */}
        <div>
          <h2
            id="agent-introduction-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Introduction
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            FreeAgent is a cloud accounting platform designed primarily for freelancers,
            contractors, and small business owners. The software simplifies everyday financial
            tasks such as invoicing, expense tracking, and tax preparation, helping users maintain
            clear and organised financial records.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            With its intuitive interface and automated tools, FreeAgent enables businesses and
            individuals to manage their finances without unnecessary complexity. The platform also
            supports UK tax rules and deadlines and helps users stay compliant with HMRC
            reporting frameworks.
          </p>
        </div>

        {/* Key features */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Key Features
          </h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">Simple Invoicing</span> – Create and
              send professional invoices quickly while tracking when they are viewed or paid.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Expense Tracking</span> – Record
              business expenses easily and categorise receipts to maintain accurate financial
              records.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Real-Time Financial Overview</span> –
              Monitor income, tax forecasts, and profit in real-time to understand the overall
              health of your business.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Integrated Tax Support</span> – Track
              Self-Assessment and VAT obligations throughout the year, making it easier to submit
              returns on time.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Mobile Accessibility</span> – Access
              financial data, raise invoices, and manage business finances from mobile devices or
              desktop systems.
            </li>
          </ul>
        </div>

        {/* Why businesses use FreeAgent */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Why Businesses Use FreeAgent
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            FreeAgent is particularly popular among freelancers and small businesses because it
            combines simplicity with powerful financial management tools.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Business owners benefit from:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Clear and streamlined financial records</li>
            <li>Less time spent managing day-to-day bookkeeping</li>
            <li>Improved visibility over tax liabilities and deadlines</li>
            <li>Tools designed with freelancers and small business professionals in mind</li>
          </ul>
        </div>

        {/* How we support users */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            How We Support FreeAgent Users
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            We assist clients in implementing and managing FreeAgent so that the system supports
            both bookkeeping accuracy and wider financial planning.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Our support typically includes:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Software setup and initial configuration</li>
            <li>Training on key features such as invoicing, expenses, and bank reconciliation</li>
            <li>Ongoing advice on how to use reports for cashflow and tax planning</li>
            <li>Integrating FreeAgent usage into your wider accounting and compliance processes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

