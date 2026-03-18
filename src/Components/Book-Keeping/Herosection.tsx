"use client";

import Image from "next/image";
import Link from "next/link";
import { BOOKKEEPING_HERO_DATA } from "@/data/bookkeeping/heroData";

export type ServiceHeroData = {
  phoneNumber: string;
  phoneHref: string;
  bannerText: string;
  heading: string;
  subheading?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { labelPrefix: string; usePhoneNumber?: boolean };
  image: { src: string; alt: string };
  featureCards: ReadonlyArray<{ label: string }>;
  trustedBar: { title: string; description: string };
};

type CheckIconProps = {
  className?: string;
};

const CheckIcon = ({ className }: CheckIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
};

type StarIconProps = {
  className?: string;
};

const StarIcon = ({ className }: StarIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

type BookKeepingHerosectionProps = {
  heroData?: ServiceHeroData;
};

export const BookKeepingHerosection = ({
  heroData,
}: BookKeepingHerosectionProps) => {
  const hero: ServiceHeroData = heroData ?? BOOKKEEPING_HERO_DATA;

  return (
    <section
      className="w-full bg-white"
      aria-label="Accounts and bookkeeping hero"
    >
      <div className="content-padding-x mx-auto max-w-[1440px] py-10 md:py-16 lg:py-20">
        {/* Two-column hero */}
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:items-start">
          {/* Left: content + feature cards */}
          <div className="flex flex-col">
            {/* Green pill - solid green, white text */}
            <div
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#BFFFCB] px-4 py-2.5"
              role="status"
              aria-label="Service focus"
            >
              <span className="text-sm font-medium text-[#239337] sm:text-base">
                {hero.bannerText}
              </span>
            </div>

            <h1 className="mt-6 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              {hero.heading}
            </h1>

            {hero.subheading && (
              <p className="mt-2 text-lg font-semibold text-slate-800">
                {hero.subheading}
              </p>
            )}

            <p
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-700 sm:text-[18px] sm:leading-[27.8px]"
              style={{ letterSpacing: "0.01em" }}
            >
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-xl bg-[#1e3a5f] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#184B83] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2"
                aria-label="Get started today"
              >
                {hero.primaryCta.label}
                <span aria-hidden>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a
                href={hero.phoneHref}
                className="inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-[#12254B] hover:bg-[#12254B] hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                aria-label={`Call ${hero.phoneNumber}`}
              >
                {hero.secondaryCta.labelPrefix} {hero.phoneNumber}
              </a>
            </div>

            {/* Feature cards - inside left column, icon on top, text below */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {hero.featureCards.map(({ label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm sm:px-4 sm:py-5"
                  role="listitem"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 text-center text-sm font-semibold text-slate-800 sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative mt-6 md:mt-0">
            {/* Background Shape */}
            <div className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-2xl bg-blue-100 sm:block" />

            {/* Image Card */}
            <div className="relative h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.55)] ring-1 ring-slate-200/60 sm:h-[280px] md:h-[340px] lg:h-[420px]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trusted row: stars, central title, right description with vertical dividers */}
        <div className="mt-10 border-t border-slate-200/80 pt-8 md:mt-14 md:pt-10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-10">
            {/* Stars (left) */}
            <div className="flex items-center gap-2 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="h-6 w-6 sm:h-7 sm:w-7" />
              ))}
            </div>

            {/* Divider */}
            <div
              className="hidden h-6 w-px bg-slate-300 md:block"
              role="presentation"
              aria-hidden
            />

            {/* Title (center) */}
            <div className="text-center">
              <span className="text-base font-semibold text-slate-800 sm:text-lg">
                {hero.trustedBar.title}
              </span>
            </div>

            {/* Divider */}
            <div
              className="hidden h-6 w-px bg-slate-300 md:block"
              role="presentation"
              aria-hidden
            />

            {/* Description (right) */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-sm text-slate-600 sm:text-base">
                {hero.trustedBar.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookKeepingHerosection;
