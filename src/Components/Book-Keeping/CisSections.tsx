"use client";

import SectionIntroHeader from "@/Components/SectionIntroHeader";
import WeAlsoHelpUnderstand from "@/Components/Book-Keeping/WeAlsoHelpUnderstand";
import type { CisCenteredSection } from "@/data/constructionIndustryScheme/sectionsData";

type CisCenteredSectionBlockProps = {
  section: CisCenteredSection;
  sectionId: string;
};

const CisCenteredSectionBlock = ({
  section,
  sectionId,
}: CisCenteredSectionBlockProps) => {
  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-20 ${section.backgroundClassName}`.trim()}
      aria-labelledby={sectionId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl">
          <SectionIntroHeader
            headingId={sectionId}
            heading={section.heading}
            headingBgClassName={section.backgroundClassName}
            headingBlockMarginTop="mt-0"
            headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          />

          <p className="mt-3 text-center text-[15px] font-medium leading-relaxed text-slate-500 sm:text-base">
            {section.subheading}
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[27.8px]">
            {section.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export type CisSectionsProps = {
  framework: CisCenteredSection;
  whyChoose: CisCenteredSection;
  weAlsoHelpItems: readonly string[];
};

export default function CisSections({
  framework,
  whyChoose,
  weAlsoHelpItems,
}: CisSectionsProps) {
  return (
    <>
      <CisCenteredSectionBlock section={framework} sectionId="cis-framework" />

      <CisCenteredSectionBlock section={whyChoose} sectionId="cis-why-choose" />

      <WeAlsoHelpUnderstand
        items={weAlsoHelpItems}
        backgroundClassName={whyChoose.backgroundClassName}
        className="pt-0"
      />
    </>
  );
}

