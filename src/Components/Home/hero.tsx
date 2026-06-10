"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND_DISPLAY_NAME } from "@/constants/siteAssets";
import {
  HOME_HERO_SLIDE_INTERVAL_MS,
  HOME_HERO_SLIDES,
  type HomeHeroSlide,
} from "@/data/homeHeroSlides";

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="text-white"
    aria-hidden
  >
    <path
      d="M8 3v2M16 3v2M4 7h16M6 11h4M6 15h4M14 11h4M14 15h4M6 21h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const HeroCtaButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#12254b] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#184B83]"
  >
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
      <CalendarIcon />
    </span>
    {label}
  </Link>
);

function OriginalHeroCard({ slide }: { slide: HomeHeroSlide }) {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white/70 p-6 shadow-2xl shadow-neutral-900/15 ring-1 ring-white/40 backdrop-blur-xl sm:p-10">
      <p className="text-sm text-slate-600">{BRAND_DISPLAY_NAME}</p>

      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
        Local expertise <br />
        that goes beyond <br />
        accounting &amp; tax
      </h1>

      <p className="mt-4 max-w-md leading-relaxed text-slate-600">
        {slide.line1}
      </p>

      <HeroCtaButton href={slide.ctaHref} label={slide.ctaLabel} />
    </div>
  );
}

function OverlayHeroContent({ slide }: { slide: HomeHeroSlide }) {
  const description = [slide.line1, slide.line2].filter(Boolean).join(" ");

  return (
    <div className="mx-auto w-full max-w-[min(100%,72rem)] px-12 text-center sm:px-16 md:px-20 lg:px-24">
      <h1 className="mx-auto max-w-4xl text-[clamp(1.25rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        {slide.heading.split("\n").map((line, index, lines) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h1>

      {description ? (
        <p className="mx-auto mt-5 max-w-3xl text-[clamp(0.875rem,1.8vw,1.25rem)] font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:mt-6">
          {description}
        </p>
      ) : null}
    </div>
  );
}

const heroNavButtonClass =
  "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-none bg-[#12254b]/90 text-white shadow-lg transition hover:bg-[#12254b] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:h-12 sm:w-12";

export default function LandingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HOME_HERO_SLIDES[activeIndex];
  const isCardSlide = slide.variant === "card";

  const goToPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length
    );

  const goToNext = () =>
    setActiveIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, HOME_HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="w-full bg-white" aria-label="Home hero">
      <div className="relative z-10 min-h-screen w-full">
        <div className="absolute inset-0 overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          {HOME_HERO_SLIDES.map((item, index) => {
            const cardBackground = item.variant === "card";

            return (
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
                <div
                  className={`absolute inset-0 ${
                    cardBackground ? "bg-black/10" : "bg-black/55"
                  }`}
                />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={goToPrev}
          className={`${heroNavButtonClass} left-3 sm:left-6 lg:left-10`}
          aria-label="Previous hero slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className={`${heroNavButtonClass} right-3 sm:right-6 lg:right-10`}
          aria-label="Next hero slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
        </button>

        <div
          className={`content-padding-x relative mx-auto flex min-h-screen w-full max-w-6xl items-center py-14 sm:py-20 ${
            isCardSlide ? "justify-center lg:justify-start" : "justify-center"
          }`}
        >
          <div
            key={slide.id}
            className="w-full -translate-y-8 sm:-translate-y-10 md:-translate-y-12"
            aria-live="polite"
          >
            {isCardSlide ? (
              <OriginalHeroCard slide={slide} />
            ) : (
              <OverlayHeroContent slide={slide} />
            )}
          </div>

          <div
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-10"
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
                    ? `w-8 ${isCardSlide && index === activeIndex ? "bg-[#12254b]" : "bg-white"}`
                    : `w-2.5 ${isCardSlide ? "bg-[#12254b]/40 hover:bg-[#12254b]/60" : "bg-white/50 hover:bg-white/70"}`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
