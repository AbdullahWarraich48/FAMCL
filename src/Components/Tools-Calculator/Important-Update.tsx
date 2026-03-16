"use client";

export default function ImportantNote() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12 lg:py-14"
      aria-labelledby="important-note-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1280px]">
        <h2
          id="important-note-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Important Note
        </h2>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          The calculators provided on this website are designed to offer general estimates based on
          current UK tax thresholds and publicly available guidance. Results should be treated as
          indicative rather than definitive.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Tax calculations can vary depending on individual circumstances, income structure,
          reliefs, and regulatory changes. For accurate tax planning or compliance advice,
          professional guidance should always be considered.
        </p>
      </div>
    </section>
  );
}

