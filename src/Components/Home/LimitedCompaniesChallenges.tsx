import SectionIntroHeader from "@/Components/SectionIntroHeader";

const LIMITED_COMPANY_CHALLENGES = [
  "Directors unaware of their personal responsibilities",
  "Accounts prepared late or inconsistently",
  "Tax planning done only after profits are realised",
  "HMRC correspondence handled reactively rather than proactively",
  "Poor coordination between payroll, VAT, and company accounts",
] as const;

export default function LimitedCompaniesChallenges() {
  return (
    <section
      className="w-full bg-white py-10 md:py-16 lg:py-20"
      aria-labelledby="limited-company-challenges-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="limited-company-challenges-heading"
            sectionLabel={
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C23A5D] sm:text-sm sm:tracking-[0.2em]">
                Common Director Challenges
              </span>
            }
            labelPillClassName="shrink-0 rounded-lg bg-[#FFE4EC] px-4 py-2"
            labelAriaLabel="Common director challenges"
            heading="Risks Many Limited Companies Face"
            headingBgClassName="bg-white"
            headingBlockMarginTop="mt-6 sm:mt-8"
            headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          />

          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:mt-6 sm:text-[18px] sm:leading-[27.8px]">
            Many companies face financial and compliance issues when proper structures are not
            maintained. These challenges often build up gradually, but can be reduced with clear
            systems and ongoing support.
          </p>
        </div>

        {/* Challenge cards */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-5 sm:mt-12 sm:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {LIMITED_COMPANY_CHALLENGES.slice(0, 3).map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-gradient-to-b from-white/80 to-[#D8EAFF] px-5 py-4 text-center text-[14px] font-medium text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5 sm:text-[15px]"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {LIMITED_COMPANY_CHALLENGES.slice(3).map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-gradient-to-b from-white/80 to-[#D8EAFF] px-5 py-4 text-center text-[14px] font-medium text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5 sm:text-[15px]"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

