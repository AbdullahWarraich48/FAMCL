export default function CorporationTaxAssociatedArticle() {
  return (
    <article
      className="w-full bg-white py-10 md:py-14 lg:py-16"
      aria-labelledby="article-hero-heading"
    >
      <div className="content-padding-x mx-auto max-w-[800px]">
        <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
          A reminder of how the new associated company rules interact with the small profits rate and
          main rate. Understanding how connected businesses are grouped is essential for accurate tax
          calculations.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          What counts as an associated company?
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Companies can be associated through control—typically where one company controls another,
          two companies are under common control, or a group structure exists. The rules are detailed,
          and misclassification can change rate limits and relief.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          Impact on rate bands
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Associated companies share the profit thresholds that determine which rate applies and how
          marginal relief is calculated. Getting the count right is therefore central to your
          corporation tax computation.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          How we can help
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          We can map your group and ownership structure, confirm associated company treatment, and
          ensure filings reflect the correct rates and reliefs.
        </p>
      </div>
    </article>
  );
}
