import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import CisBusinessStructures from "@/Components/Book-Keeping/CisBusinessStructures";
import CisSubcontractorTaxReturn from "@/Components/Book-Keeping/CisSubcontractorTaxReturn";
import CisOurServices from "@/Components/Book-Keeping/CisOurServices";
import CisSections from "@/Components/Book-Keeping/CisSections";
import Contact from "@/Components/Book-Keeping/Contact";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import { CONSTRUCTION_INDUSTRY_SCHEME_HERO_DATA } from "@/data/constructionIndustryScheme/heroData";
import { CIS_WE_ALSO_HELP_ITEMS } from "@/data/constructionIndustryScheme/weAlsoHelpData";
import {
  CIS_FRAMEWORK_SECTION,
  CIS_WHY_CHOOSE_SECTION,
} from "@/data/constructionIndustryScheme/sectionsData";
import { CIS_FAQ_DATA } from "@/data/constructionIndustryScheme/faqData";
import Steps from "@/Components/Book-Keeping/Steps";
import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import CtaExact from "@/Components/Home/Cta";

export const metadata = {
  title: "Construction Industry Scheme (CIS) | FAM Chartered Accountants",
  description:
    "CIS registration, monthly returns, subcontractor verification, and support for contractors and subcontractors.",
};

export default function ConstructionIndustrySchemePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CONSTRUCTION_INDUSTRY_SCHEME_HERO_DATA} />
      <CisSections
        framework={CIS_FRAMEWORK_SECTION}
        whyChoose={CIS_WHY_CHOOSE_SECTION}
        weAlsoHelpItems={CIS_WE_ALSO_HELP_ITEMS}
      />
      <CisBusinessStructures />
      <CisSubcontractorTaxReturn />
      <CisOurServices />
      <Faq data={CIS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />      
      <CtaExact />  
      <FooterSection />
    </main>
  );
}
