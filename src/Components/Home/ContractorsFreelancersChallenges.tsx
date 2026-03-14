const CONTRACTOR_CHALLENGES = [
  "Confusion around IR35 and employment status rules",
  "Business structures chosen for simplicity rather than compliance",
  "Inconsistent reporting of income",
  "Unexpected tax adjustments following HMRC review",
  "Limited visibility of long-term tax exposure",
] as const;

export default function ContractorsFreelancersChallenges() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
            <div
              className="shrink-0 rounded-lg bg-[#FFE4EC] px-4 py-2"
              role="status"
              aria-label="Common contractor challenges"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C23A5D]">
                Common Contractor Challenges
              </span>
            </div>
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
          </div>

          <h2 className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]">
            Risks Many Contractors Face
          </h2>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            Contractors and freelancers often encounter issues when compliance decisions are based on
            convenience rather than the latest regulatory interpretation. These risks can build up
            quietly over time, but can be managed with the right structure and advice.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CONTRACTOR_CHALLENGES.slice(0, 3).map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-gradient-to-b from-white/80 to-[#D8EAFF] px-6 py-5 text-center text-[15px] font-medium text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONTRACTOR_CHALLENGES.slice(3).map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-gradient-to-b from-white/80 to-[#D8EAFF] px-6 py-5 text-center text-[15px] font-medium text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]"
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

