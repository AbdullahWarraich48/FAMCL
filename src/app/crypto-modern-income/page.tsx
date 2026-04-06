import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import { CRYPTO_MODERN_INCOME_HERO_DATA } from "@/data/cryptoModernIncome/heroData";
import { CRYPTO_MODERN_INCOME_SERVICE_SCOPE_DATA } from "@/data/cryptoModernIncome/serviceScopeData";
import { CRYPTO_MODERN_INCOME_WHY_MATTERS_DATA } from "@/data/cryptoModernIncome/whyMattersData";
import { CRYPTO_MODERN_INCOME_FACTS_DATA } from "@/data/cryptoModernIncome/factsData";
import { CRYPTO_MODERN_INCOME_SOLUTION_DATA } from "@/data/cryptoModernIncome/solutionData";
import { CRYPTO_MODERN_INCOME_FAQ_DATA } from "@/data/cryptoModernIncome/faqData";

export const metadata = {
  title: "Crypto & Modern Income | FAM Chartered Accountants",
  description:
    "Up-to-date tax advice on cryptocurrency, side income, and digital earnings so your new income streams remain compliant and clearly reported.",
};

export default function CryptoModernIncomePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CRYPTO_MODERN_INCOME_HERO_DATA} />
      <ServiceScope data={CRYPTO_MODERN_INCOME_SERVICE_SCOPE_DATA} />
      <WhyMatters data={CRYPTO_MODERN_INCOME_WHY_MATTERS_DATA} />
      <Facts data={CRYPTO_MODERN_INCOME_FACTS_DATA} />
      <Solution data={CRYPTO_MODERN_INCOME_SOLUTION_DATA} />
      <Faq data={CRYPTO_MODERN_INCOME_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
