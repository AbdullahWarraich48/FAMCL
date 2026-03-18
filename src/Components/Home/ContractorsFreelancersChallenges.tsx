const CONTRACTOR_CHALLENGES = [
  "Confusion around IR35 and employment status rules",
  "Business structures chosen for simplicity rather than compliance",
  "Inconsistent reporting of income",
  "Unexpected tax adjustments following HMRC review",
  "Limited visibility of long-term tax exposure",
] as const;

export default function ContractorsFreelancersChallenges() {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-3 sm:gap-4">
            <span
              className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block"
              aria-hidden
            />
            <div
              className="shrink-0 rounded-lg bg-[#FFE4EC] px-4 py-2"
              role="status"
              aria-label="Common contractor challenges"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C23A5D] sm:text-sm sm:tracking-[0.2em]">
                Common Contractor Challenges
              </span>
            </div>
            <span
              className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block"
              aria-hidden
            />
          </div>

          <h2 className="mt-6 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:mt-8 sm:text-4xl lg:text-[44px]">
            Risks Many Contractors Face
          </h2>

          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:mt-6 sm:text-[18px] sm:leading-[27.8px]">
            Contractors and freelancers often encounter issues when compliance decisions are based on
            convenience rather than the latest regulatory interpretation. These risks can build up
            quietly over time, but can be managed with the right structure and advice.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-5 sm:mt-12 sm:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {CONTRACTOR_CHALLENGES.slice(0, 3).map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-gradient-to-b from-white/80 to-[#D8EAFF] px-5 py-4 text-center text-[14px] font-medium text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5 sm:text-[15px]"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {CONTRACTOR_CHALLENGES.slice(3).map((text) => (
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

