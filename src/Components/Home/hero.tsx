"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HOME_HERO_SLIDE_INTERVAL_MS,
  HOME_HERO_SLIDES,
  type HomeHeroSlide,
} from "@/data/homeHeroSlides";

function OverlayHeroContent({ slide }: { slide: HomeHeroSlide }) {
  const description = [slide.line1, slide.line2].filter(Boolean).join(" ");

  return (
    <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-8">
      <h1 className="mx-auto text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        {slide.heading.split("\n").map((line, index, lines) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h1>

      {description ? (
        <p className="mx-auto mt-5 max-w-3xl text-[clamp(0.9rem,1.8vw,1.125rem)] font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:mt-6">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function LandingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HOME_HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, HOME_HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="w-full bg-white" aria-label="Home hero">
      <div className="relative z-10 min-h-[min(75vh,680px)] w-full">
        <div className="absolute inset-0 overflow-hidden">
          {HOME_HERO_SLIDES.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={item.backgroundImageSrc}
                alt={item.backgroundImageAlt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>

        <div className="content-padding-x relative mx-auto flex min-h-[min(75vh,680px)] w-full max-w-6xl items-center justify-center py-16 sm:py-20">
          <div key={slide.id} className="w-full" aria-live="polite">
            <OverlayHeroContent slide={slide} />
          </div>

          <div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-12"
            role="tablist"
            aria-label="Hero slides"
          >
            {HOME_HERO_SLIDES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show slide ${index + 1}: ${item.heading}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full shadow-sm transition-all ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
