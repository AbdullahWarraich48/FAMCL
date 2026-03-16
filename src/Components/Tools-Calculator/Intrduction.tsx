"use client";

export default function ToolsIntroduction() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="tools-introduction-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px]">
        <h2
          id="tools-introduction-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Introduction
        </h2>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Financial decisions often begin with understanding the numbers. Whether estimating tax
          liabilities, comparing salary structures, or planning business expenses, simple
          calculations can provide valuable insight before decisions are made.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Our Tools &amp; Calculators section provides a selection of practical financial
          calculators designed to help individuals and businesses understand potential tax
          outcomes, cashflow implications, and future financial responsibilities.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          These tools are based on current UK tax guidance and are intended to provide rough
          estimates. While they do not replace professional advice, they can help users better
          prepare for conversations with an accountant or financial adviser.
        </p>
      </div>
    </section>
  );
}

