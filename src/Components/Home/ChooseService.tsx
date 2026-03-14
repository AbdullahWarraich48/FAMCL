// app/components/WhyChooseService.tsx
import Image from "next/image";

export default function WhyChooseService() {
  return (
    <section className="w-full bg-[#edf1f6]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-8 py-10 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-12">
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
            Designed For Founders Who Value Clarity From The Beginning
          </h2>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            This service is built for individuals who want to establish their
            business correctly from the start. Early decisions about structure,
            compliance, and financial discipline often determine how easily a
            business can grow and adapt.
          </p>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            Our approach focuses on clarity, proportional compliance, and
            structured financial control, ensuring founders avoid unnecessary
            complications and build a business on a stable foundation.
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