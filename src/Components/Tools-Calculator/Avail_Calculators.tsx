"use client";

export default function AvailableCalculators() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="available-calculators-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px]">
        <h2
          id="available-calculators-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Available Calculators
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          <div>
            <p className="font-semibold text-slate-900">Income Tax Calculator</p>
            <p>
              Estimate your personal income tax based on salary or self-employment income under
              current UK tax bands.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Corporation Tax Calculator</p>
            <p>
              Estimate how much Corporation Tax a limited company may pay based on projected
              profits.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">VAT Calculator</p>
            <p>
              Quickly calculate VAT inclusive or exclusive amounts when preparing invoices or
              reviewing business transactions.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Salary vs Dividend Calculator</p>
            <p>
              Compare different profit extraction strategies for company directors by analysing
              salary and dividend combinations.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Capital Gains Tax Calculator</p>
            <p>
              Estimate potential tax liabilities when selling property or other chargeable assets.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Self-Assessment Tax Estimator</p>
            <p>
              Calculate an approximate Self-Assessment liability based on a mix of income sources
              and allowable expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

