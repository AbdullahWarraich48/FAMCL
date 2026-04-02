"use client";

export type WeAlsoHelpUnderstandProps = {
  /** Section heading, centred above the list */
  heading?: string;
  /** Bullet lines (left-aligned under the heading) */
  items: readonly string[];
  /** Extra classes applied to the outer section */
  className?: string;
  /** Background class for the outer section (keeps layout consistent across pages) */
  backgroundClassName?: string;
  sectionId?: string;
};

export const WeAlsoHelpUnderstand = ({
  heading = "We also help you understand:",
  items,
  className = "",
  backgroundClassName = "bg-white",
  sectionId = "we-also-help-heading",
}: WeAlsoHelpUnderstandProps) => {
  if (items.length === 0) return null;

  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-20 ${backgroundClassName} ${className}`.trim()}
      aria-labelledby={sectionId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div
          className="mx-auto max-w-[800px] rounded-3xl border border-slate-100/80 bg-gradient-to-b from-slate-50/90 via-white to-[#E8F2FC] px-6 py-10 shadow-[0_18px_45px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04)] md:px-10 md:py-12"
        >
          <h2
            id={sectionId}
            className="text-center text-lg font-bold text-slate-900 md:text-xl"
          >
            {heading}
          </h2>

          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {items.map((text, index) => (
              <li key={index} className="flex gap-3.5">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#175dab]"
                  aria-hidden
                />
                <span className="text-[15px] leading-relaxed text-slate-700 md:text-base md:leading-7">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeAlsoHelpUnderstand;
