import Image from "next/image";
import { SplitHeading } from "@/Components/SplitHeading";

export default function LimitedCompaniesChooseService() {
  return (
    <section className="w-full bg-[#cbdcff]">
      <div className="content-padding-x mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-2 lg:py-12">
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[1.75rem] font-semibold leading-[1.12] sm:text-[2rem] md:text-[34px] lg:text-[42px]">
            <SplitHeading heading="Designed For Responsibility, Not Convenience" />
          </h2>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            This service is designed for responsibility, not convenience. It
            recognises that directors are accountable personally, not
            abstractly. Support is structured to protect both the company and
            its officers.
          </p>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            Decisions are reviewed for consequence, not speed.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
            alt="Directors celebrating a successful business decision in an office"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
