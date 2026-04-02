export default function CorporationTaxTieredArticle() {
  return (
    <article
      className="w-full bg-white py-10 md:py-14 lg:py-16"
      aria-labelledby="article-hero-heading"
    >
      <div className="content-padding-x mx-auto max-w-[800px]">
        <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Recent changes to Corporation Tax thresholds have introduced a tiered system where tax rates
          depend on company profit levels. Businesses must now assess whether marginal relief applies
          and consider the implications for future tax planning.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          Tiered rates and marginal relief
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Profits are no longer taxed at a single flat rate for all companies. The small profits rate
          and main rate interact with thresholds that depend on your accounting period and, where
          relevant, the number of associated companies.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          What to review
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          <li>Forecast taxable profits and how they sit against rate bands.</li>
          <li>Check whether marginal relief applies and how it affects the effective rate.</li>
          <li>Align dividends and remuneration decisions with the company&apos;s tax position.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          How we can help
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          We can model your corporation tax liability, explain marginal relief in plain terms, and
          help you plan ahead. Contact us for advice tailored to your company.
        </p>
      </div>
    </article>
  );
}
