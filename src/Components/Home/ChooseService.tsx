import Image from "next/image";
import { SplitHeading } from "@/Components/SplitHeading";

export default function WhyChooseService() {
  return (
    <section className="w-full bg-[#cbdcff]">
      <div className="content-padding-x mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-2 lg:py-12">
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[1.75rem] font-semibold leading-[1.12] sm:text-[2rem] md:text-[34px] lg:text-[42px]">
            <SplitHeading heading="Built For Founders Who Want To Avoid Correcting Mistakes Later" />
          </h2>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            This service is built for founders who want to avoid correcting
            mistakes later. It recognises that early decisions quietly shape
            long-term outcomes. The approach focuses on clarity, proportional
            compliance, and control from day one.
          </p>

          <p className="mt-8 text-base leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
            Support is structured to reduce rework, not accelerate registration.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Founders in a meeting discussing plans around a laptop"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
