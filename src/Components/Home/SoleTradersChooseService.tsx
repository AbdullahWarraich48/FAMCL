import Image from "next/image";
import { SplitHeading } from "@/Components/SplitHeading";
import { SECTION_LABEL_PILL, SECTION_LABEL_TEXT } from "@/constants/sectionBackgrounds";

export default function SoleTradersChooseService() {
  return (
    <section className="w-full bg-[#cbdcff]">
      <div className="content-padding-x mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-2 lg:py-12">
        <div className="max-w-[560px]">
          <span
            className={`inline-block ${SECTION_LABEL_PILL} ${SECTION_LABEL_TEXT}`}
          >
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[1.75rem] font-semibold leading-[1.12] sm:text-[2rem] md:text-[34px] lg:text-[42px]">
            <SplitHeading heading="Designed For Sole Traders Operating Without Margin For Error" />
          </h2>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            This service is designed for Sole Traders who often operate alone,
            without margin for error. Support focuses on predictability, not
            reminders. The approach balances tax efficiency with compliance
            safety.
          </p>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            It removes guesswork and replaces it with structure.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Independent professionals collaborating in a meeting"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
