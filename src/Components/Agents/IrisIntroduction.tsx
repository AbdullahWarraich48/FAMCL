"use client";

export default function IrisIntroduction() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="iris-introduction-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px] space-y-10">
        {/* Introduction */}
        <div>
          <h2
            id="iris-introduction-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Introduction
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            IRIS is a professional accounting and tax software platform widely used by accountants,
            financial professionals, and firms across the United Kingdom. The system provides
            comprehensive tools for managing accounts, tax returns, payroll, and financial
            reporting.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            With its extensive feature set and specialist focus on compliance, IRIS is particularly
            valued by professional firms and businesses that require robust financial management
            systems.
          </p>
        </div>

        {/* Key features */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Key Features
          </h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">Comprehensive Tax Compliance Tools</span>{" "}
              – Prepare and submit tax returns for individuals and businesses within a secure
              system.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Accounts Production</span> – Produce
              statutory accounts and financial statements aligned with UK accounting standards.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Payroll Management</span> – Process
              payroll and maintain compliance with PAYE and pension reporting requirements.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Client Data Management</span> – Organise
              client records and data efficiently within a centralised system.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Regulatory Reporting</span> – Support
              accurate reporting to HMRC and other regulatory bodies.
            </li>
          </ul>
        </div>

        {/* Why businesses use IRIS */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Why Businesses and Firms Use IRIS
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            IRIS provides a comprehensive accounting environment that is designed to handle complex
            financial reporting and compliance requirements.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Benefits include:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Integrated compliance and practice management tools</li>
            <li>Confidence that filings and submissions meet regulatory standards</li>
            <li>Improved efficiency across accounting and tax workflows</li>
            <li>Scalability for growing firms and complex client portfolios</li>
          </ul>
        </div>

        {/* How we use IRIS to support clients */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            How We Use IRIS to Support Clients
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            We utilise IRIS to manage client financial records, tax calculations, and compliance
            reporting accurately and efficiently.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            Our work with IRIS typically covers:
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            <li>Preparation and submission of statutory accounts and tax returns</li>
            <li>Ongoing management of payroll and pension reporting</li>
            <li>
              Coordinating IRIS reporting with wider advisory support, including tax planning and
              compliance reviews
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

