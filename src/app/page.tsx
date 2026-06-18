import HeroSection from "../Components/Home/hero";
import FooterSection from "../Components/footer";
import ContactCards from "@/Components/Home/ContactCards";
import ChooseCard from "@/Components/Home/ChooseCard";
import Carasoul from "@/Components/Home/Carasoul";
import AccountingSol from "@/Components/Home/AccountingSol";
import {
  CHOOSE_FIRM_SECTION,
  CLOUD_SOFTWARE_SECTION,
} from "@/Components/Home/chooseCardData";
import Client from "@/Components/Home/Client";
import Cta from "@/Components/Home/Cta";
import TaxCta from "@/Components/Home/TaxCta";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

/** Alternating section backgrounds: odd = white, even = #cbdcff */

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 1 — white */}
      <TaxCta />

      {/* 2 — #cbdcff */}
      <ContactCards />

      {/* 3 — white */}
      <Carasoul sectionClassName={SECTION_BG.white} />

      {/* 4 — #cbdcff */}
      <AccountingSol sectionClassName={SECTION_BG.alt} />

      {/* 5 — white */}
      <ChooseCard
        sectionTitle={CHOOSE_FIRM_SECTION.sectionTitle}
        sectionTitleBefore={CHOOSE_FIRM_SECTION.sectionTitleBefore}
        sectionTitleHighlight={CHOOSE_FIRM_SECTION.sectionTitleHighlight}
        sectionDescription={CHOOSE_FIRM_SECTION.sectionDescription}
        cards={CHOOSE_FIRM_SECTION.cards}
        sectionId="choose-firm-heading"
        sectionClassName={SECTION_BG.white}
      />

      {/* 6 — #cbdcff */}
      <ChooseCard
        sectionTitle={CLOUD_SOFTWARE_SECTION.sectionTitle}
        sectionTitleBefore={CLOUD_SOFTWARE_SECTION.sectionTitleBefore}
        sectionTitleHighlight={CLOUD_SOFTWARE_SECTION.sectionTitleHighlight}
        sectionDescription={CLOUD_SOFTWARE_SECTION.sectionDescription}
        cards={CLOUD_SOFTWARE_SECTION.cards}
        sectionId="cloud-software-heading"
        sectionClassName={SECTION_BG.alt}
        largeText
      />

      {/* 7 — white */}
      <Client />

      <Cta />
      <FooterSection />
    </>
  );
}
