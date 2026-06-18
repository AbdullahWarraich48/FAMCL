import ChooseCard from "@/Components/Home/ChooseCard";
import { CHOOSE_FIRM_SECTION } from "@/Components/Home/chooseCardData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

type AccountingFirmProps = {
  sectionClassName?: string;
};

export default function AccountingFirm({
  sectionClassName = SECTION_BG.white,
}: AccountingFirmProps) {
  return (
    <ChooseCard
      sectionTitle={CHOOSE_FIRM_SECTION.sectionTitle}
      sectionTitleBefore={CHOOSE_FIRM_SECTION.sectionTitleBefore}
      sectionTitleHighlight={CHOOSE_FIRM_SECTION.sectionTitleHighlight}
      sectionDescription={CHOOSE_FIRM_SECTION.sectionDescription}
      cards={CHOOSE_FIRM_SECTION.cards}
      sectionId="accounting-firm-heading"
      sectionClassName={sectionClassName}
    />
  );
}
