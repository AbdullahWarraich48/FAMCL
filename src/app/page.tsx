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
import Contact from "@/Components/Book-Keeping/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="relative z-20 w-full bg-transparent py-10 sm:py-14">
        <div className="content-padding-x mx-auto max-w-[1400px] mt-10">
          <TaxCta />
        </div>
      </section>
      <ContactCards />
      <Carasoul />
      <AccountingSol />
      <ChooseCard
        sectionTitle={CHOOSE_FIRM_SECTION.sectionTitle}
        sectionDescription={CHOOSE_FIRM_SECTION.sectionDescription}
        cards={CHOOSE_FIRM_SECTION.cards}
        sectionId="choose-firm-heading"
      />
      <ChooseCard
        sectionTitle={CLOUD_SOFTWARE_SECTION.sectionTitle}
        sectionDescription={CLOUD_SOFTWARE_SECTION.sectionDescription}
        cards={CLOUD_SOFTWARE_SECTION.cards}
        sectionId="cloud-software-heading"
      />
      <Client />
      <Cta />
      <Contact />
      <FooterSection />
    </>
  );
}
