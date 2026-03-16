"use client";

export default function AgentCta() {
  return (
    <section
      className="w-full bg-white pb-12 pt-4 md:pb-16 md:pt-6 lg:pb-20 lg:pt-8"
      aria-labelledby="agent-cta-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[720px] rounded-3xl bg-[#175dab] px-6 py-8 text-white shadow-[0_18px_40px_rgba(15,23,42,0.25)] md:px-10 md:py-10">
          <h2
            id="agent-cta-heading"
            className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
          >
            Need help setting up FreeAgent for your business?
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-100/90 sm:text-base">
            Our team can help you implement the right accounting tools and ensure your records
            remain accurate and compliant.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#175dab] shadow-sm transition-colors hover:bg-slate-100 sm:text-base"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

