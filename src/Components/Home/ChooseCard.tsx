"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Headset, RefreshCw, Wallet } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";

const ICON_MAP = {
  users: Users,
  headset: Headset,
  refreshCw: RefreshCw,
  wallet: Wallet,
} as const;

export type ChooseCardItem = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  /** Icon key for built-in icons: "users" | "headset" | "refreshCw" (use when no image) */
  iconKey?: keyof typeof ICON_MAP;
  /** Background class for icon wrapper, e.g. "bg-blue-600" */
  iconBg?: string;
  /** Card surface background / gradient classes */
  cardBg?: string;
  /** Title text color classes */
  titleClass?: string;
  /** Button background class */
  buttonBg?: string;
  /** Image URL (use when no iconKey) */
  imageSrc?: string;
  /** Alt text for image */
  imageAlt?: string;
  buttonBorder: string;
  buttonText: string;
  buttonHover: string;
};

export type ChooseCardProps = {
  sectionTitle?: string;
  sectionTitleBefore?: string;
  sectionTitleHighlight?: string;
  sectionDescription?: string;
  cards?: ChooseCardItem[];
  sectionId?: string;
  className?: string;
  sectionClassName?: string;
  largeText?: boolean;
};

export default function ChooseCard({
  sectionTitle = "",
  sectionTitleBefore,
  sectionTitleHighlight,
  sectionDescription = "",
  cards = [],
  sectionId = "choose-card-heading",
  className = "",
  sectionClassName = "bg-white",
  largeText = false,
}: ChooseCardProps) {
  if (cards.length === 0) return null;

  const handleAnchorClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <section
      className={`w-full py-16 md:py-20 ${sectionClassName} ${className}`.trim()}
      aria-labelledby={sectionId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-5xl text-center">
          <div className="flex w-full min-w-0 items-center justify-center gap-3 md:gap-6">
            <span
              className="h-px shrink-0 bg-[#1E63B3] w-14 sm:w-16 md:w-20"
              aria-hidden
            />
            <h2
              id={sectionId}
              className="min-w-0 shrink text-center text-[clamp(0.875rem,2.4vw,2rem)] font-bold leading-tight tracking-tight"
            >
              {sectionTitleBefore && sectionTitleHighlight ? (
                <>
                  <span className="text-[#175dab]">{sectionTitleBefore}</span>
                  <span className="text-red-600">{sectionTitleHighlight}</span>
                </>
              ) : (
                <span className="text-[#12254b]">{sectionTitle}</span>
              )}
            </h2>
            <span
              className="h-px shrink-0 bg-[#1E63B3] w-14 sm:w-16 md:w-20"
              aria-hidden
            />
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            {sectionDescription}
          </p>
        </header>

        <div
          className={`mt-12 grid grid-cols-1 items-stretch gap-8 lg:gap-10 ${
            cards.length >= 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`flex h-full min-h-[400px] min-w-0 flex-col overflow-hidden rounded-2xl border-0 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                card.cardBg ??
                "bg-gradient-to-b from-white/70 to-[#D8EAFF]"
              }`}
            >
              <CardContent className="flex flex-1 flex-col items-center text-center p-6 pb-2 pt-6 md:p-8 md:pb-3 md:pt-8">
                {card.imageSrc ? (
                  <div className="flex h-24 w-full shrink-0 items-center justify-center md:h-28">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt ?? card.title}
                      width={320}
                      height={96}
                      className="max-h-20 w-auto max-w-full object-contain md:max-h-24"
                      draggable={false}
                    />
                  </div>
                ) : card.iconKey != null && card.iconBg ? (
                  (() => {
                    const IconComponent = ICON_MAP[card.iconKey];
                    if (!IconComponent) return null;
                    return (
                      <div
                        className="flex h-24 w-full shrink-0 items-center justify-center md:h-28"
                        aria-hidden
                      >
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-xl ${card.iconBg}`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    );
                  })()
                ) : null}
                <h3
                  className={`mt-6 w-full shrink-0 font-semibold ${
                    card.titleClass ?? "text-slate-900"
                  } ${
                    largeText
                      ? "text-[22px] md:text-[24px]"
                      : "text-[20px] md:text-[22px]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-3 w-full flex-1 leading-6 text-slate-600 ${
                    largeText
                      ? "min-h-[4.75rem] text-[15px] md:min-h-[5.25rem] md:text-[16px]"
                      : "min-h-[4rem] text-[13px] md:min-h-[4.5rem] md:text-[14px]"
                  }`}
                >
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto w-full shrink-0 px-6 pt-0 pb-6 md:px-8 md:pb-8">
                <Link
                  href={card.buttonHref}
                  aria-label={`${card.buttonLabel} - opens in same page`}
                  onClick={handleAnchorClick(card.buttonHref)}
                  className={`inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border-2 font-semibold transition-colors ${card.buttonBg ?? "bg-[#D8EAFF]"} ${card.buttonBorder} ${card.buttonText} ${card.buttonHover} ${largeText ? "text-[15px] md:text-base" : "text-sm"}`}
                >
                  <span className="truncate">{card.buttonLabel}</span>
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
