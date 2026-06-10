"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Headset, RefreshCw, Wallet } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

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
  sectionDescription?: string;
  cards?: ChooseCardItem[];
  sectionId?: string;
  className?: string;
  largeText?: boolean;
};

export default function ChooseCard({
  sectionTitle = "",
  sectionDescription = "",
  cards = [],
  sectionId = "choose-card-heading",
  className = "",
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
      className={`w-full bg-[#F6F9FF] py-16 md:py-20 ${className}`.trim()}
      aria-labelledby={sectionId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-5xl text-center">
          <div className="flex w-full min-w-0 items-center justify-center gap-3 md:gap-6">
            <span
              className="h-px shrink-0 bg-slate-300 w-14 sm:w-16 md:w-20"
              aria-hidden
            />
            <h2
              id={sectionId}
              className="min-w-0 shrink-0 whitespace-nowrap text-center text-[clamp(0.875rem,2.4vw,2rem)] font-bold leading-tight tracking-tight text-[#175dab]"
            >
              {sectionTitle}
            </h2>
            <span
              className="h-px shrink-0 bg-slate-300 w-14 sm:w-16 md:w-20"
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
              : "md:grid-cols-3"
          }`}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              className="flex h-full min-h-[400px] min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-gradient-to-b from-white/70 to-[#D8EAFF] shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
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
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#175dab]">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    );
                  })()
                ) : null}
                <h3
                  className={`mt-6 w-full shrink-0 font-semibold text-slate-900 ${
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
                <Button
                  variant="outline"
                  size="lg"
                  className={`h-12 min-h-12 w-full min-w-full max-w-full rounded-full border-2 bg-[#D8EAFF] font-semibold border-[#175dab] text-[#175dab] ${largeText ? "text-[15px] md:text-base" : ""}`}
                  asChild
                >
                  <Link
                    href={card.buttonHref}
                    aria-label={`${card.buttonLabel} - opens in same page`}
                    tabIndex={0}
                    onClick={handleAnchorClick(card.buttonHref)}
                    className="flex h-12 w-full min-h-12 min-w-full items-center justify-center"
                  >
                    <span className="truncate">{card.buttonLabel}</span>
                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
