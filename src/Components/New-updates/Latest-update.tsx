"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { CalendarDays } from "lucide-react";

type UpdateItem = {
  id: number;
  category: string;
  title: string;
  summary: string;
  date: string;
  /** When set, "Read More" navigates to this path. */
  readMoreHref?: string;
};

const LATEST_UPDATES: UpdateItem[] = [
  {
    id: 1,
    category: "Tax Compliance",
    title: "Corporation Tax Changes for Small Companies",
    summary:
      "Recent changes to Corporation Tax thresholds have introduced a tiered system where tax rates depend on company profit levels. Businesses must now assess whether marginal relief applies and consider the implications for future tax planning.",
    date: "March 2026",
    readMoreHref:
      "/recources/news-and-updates/corporation-tax-small-companies-tiered-rates",
  },
  {
    id: 2,
    category: "Digital Reporting",
    title: "Preparing for Making Tax Digital for Self-Employed Individuals",
    summary:
      "The expanded Making Tax Digital (MTD) rules will soon require many self-employed individuals and landlords to submit digital quarterly updates. Early preparation can help avoid last-minute difficulties and compliance risks.",
    date: "March 2026",
    readMoreHref:
      "/recources/news-and-updates/preparing-making-tax-digital-self-employed",
  },
  {
    id: 3,
    category: "Tax Compliance",
    title: "Corporation Tax Changes for Small Companies",
    summary:
      "A reminder of how the new associated company rules interact with the small profits rate and main rate. Understanding how connected businesses are grouped is essential for accurate tax calculations.",
    date: "February 2026",
    readMoreHref:
      "/recources/news-and-updates/corporation-tax-associated-companies",
  },
  {
    id: 4,
    category: "Digital Reporting",
    title: "Making Tax Digital: Record-Keeping Checklist",
    summary:
      "From compatible software to consistent categorisation of income and expenses, this checklist outlines the practical steps needed to keep digital records that meet HMRC requirements.",
    date: "February 2026",
    readMoreHref: "/recources/news-and-updates/mtd-record-keeping-checklist",
  },
];

export default function LatestUpdate() {
  return (
    <section
      className="w-full bg-white py-12 md:py-16 lg:py-20"
      aria-labelledby="latest-updates-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
            Stay Informed
          </span>
          <h2
            id="latest-updates-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Latest Updates
          </h2>
        </div>

        {/* Grid of updates */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {LATEST_UPDATES.map((item) => (
            <Card
              key={item.id}
              className="flex h-full flex-col rounded-3xl border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <CardHeader className="pb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.category}
                </p>
                <CardTitle className="mt-2 text-lg font-semibold text-[#175dab] sm:text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px] leading-relaxed text-slate-700">
                  {item.summary}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                {item.readMoreHref ? (
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-300 bg-transparent px-4 py-1.5 text-xs font-semibold text-slate-900 hover:border-[#12254B] hover:bg-[#12254B] hover:text-white sm:text-sm"
                    asChild
                  >
                    <Link
                      href={item.readMoreHref}
                      aria-label={`Read more: ${item.title}`}
                    >
                      Read More
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-300 bg-transparent px-4 py-1.5 text-xs font-semibold text-slate-900 hover:border-[#12254B] hover:bg-[#12254B] hover:text-white sm:text-sm"
                  >
                    Read More
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

