import Image from "next/image";
import { SplitHeading } from "@/Components/SplitHeading";
import { SECTION_LABEL_PILL, SECTION_LABEL_TEXT } from "@/constants/sectionBackgrounds";

export default function ContractorsFreelancersChooseService() {
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
            <SplitHeading heading="Designed For Scrutiny, Not Assumption" />
          </h2>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            This service is designed for scrutiny. It recognises that contractors
            are often reviewed, not ignored. Support focuses on defensibility, not
            optimisation alone.
          </p>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            Advice is grounded in interpretation, not assumption.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Contractor reviewing and signing documents at a desk"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
