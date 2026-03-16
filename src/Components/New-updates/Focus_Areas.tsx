"use client";

export default function FocusAreas() {
  return (
    <section
      className="w-full bg-white py-12 md:py-16 lg:py-20"
      aria-labelledby="focus-areas-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 md:gap-14">
          {/* Left column – Areas of focus */}
          <div>
            <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
              Areas of Focus
            </span>

            <h2
              id="focus-areas-heading"
              className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Topics Covered in Our Updates
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              Our updates focus on developments that affect the financial responsibilities of
              businesses and individuals operating within the UK regulatory environment.
            </p>

            <ul className="mt-4 space-y-1.5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <li>Tax legislation and HMRC guidance</li>
              <li>Corporation Tax and business compliance</li>
              <li>Self-Assessment and personal tax reporting</li>
              <li>Making Tax Digital and digital reporting frameworks</li>
              <li>Payroll and pension compliance</li>
              <li>Property taxation and capital gains reporting</li>
              <li>Cryptocurrency and emerging digital income streams</li>
              <li>
                Financial planning considerations for businesses and individuals
              </li>
            </ul>
          </div>

          {/* Right column – Why it matters */}
          <div>
            <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
              Why It Matters
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why Staying Informed Matters
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              Financial regulations rarely change in isolation. Even small adjustments to reporting
              rules or tax thresholds can influence cash flow planning, compliance obligations, and
              long-term financial decisions.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              Staying informed allows businesses and individuals to:
            </p>

            <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <li>Avoid unnecessary penalties or compliance risks</li>
              <li>
                Prepare for regulatory changes before deadlines arrive
              </li>
              <li>Understand how new tax rules affect financial decisions</li>
              <li>
                Maintain confidence when planning future investments or business growth
              </li>
            </ul>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              The goal of this section is not simply to report news, but to translate regulatory
              developments into clear, practical understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

