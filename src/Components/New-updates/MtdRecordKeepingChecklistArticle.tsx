export default function MtdRecordKeepingChecklistArticle() {
  return (
    <article
      className="w-full bg-white py-10 md:py-14 lg:py-16"
      aria-labelledby="article-hero-heading"
    >
      <div className="content-padding-x mx-auto max-w-[800px]">
        <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
          From compatible software to consistent categorisation of income and expenses, this
          checklist outlines the practical steps needed to keep digital records that meet HMRC
          requirements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          Software and digital records
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          <li>Use HMRC-recognised compatible software where MTD applies to you.</li>
          <li>Record income and expenses digitally close to the time of the transaction.</li>
          <li>Keep a clear audit trail from bank movements to ledger entries.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          Consistent categorisation
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          Use stable categories for sales, direct costs, and overheads so quarterly summaries are
          reliable. Reconcile categories periodically so errors do not compound across periods.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">
          How we can help
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          We can review your chart of accounts, software setup, and processes so your digital
          records support both MTD reporting and sound management information.
        </p>
      </div>
    </article>
  );
}
