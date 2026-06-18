"use client"

import * as React from "react"
import { Card, CardContent } from "@/Components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Star } from "lucide-react"
import { CLIENT_REVIEWS, type ClientReview } from "@/data/clientData"

function colorClasses(color: ClientReview["color"]) {
  switch (color) {
    case "blue":
      return {
        ring: "ring-blue-600",
        quote: "text-rose-200",
      }
    case "green":
      return {
        ring: "ring-green-600",
        quote: "text-rose-200",
      }
    case "red":
      return {
        ring: "ring-rose-600",
        quote: "text-rose-200",
      }
  }
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "h-4 w-4 md:h-5 md:w-5",
            i < n ? "fill-amber-400 text-amber-400" : "text-slate-300",
          ].join(" ")}
        />
      ))}
    </div>
  )
}

export default function WhatOurClientsSay() {
  return (
    <section className="w-full bg-white py-16">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex w-full min-w-0 items-center justify-center gap-3 sm:gap-6">
            <span className="h-px w-10 shrink-0 bg-slate-300 sm:w-14 md:w-20" aria-hidden />
            <h2 className="min-w-0 shrink text-[1.5rem] font-bold tracking-tight sm:text-[30px] md:text-[34px]">
              <span className="text-[#175dab]">What Our </span>
              <span className="text-red-600">Clients Say</span>
            </h2>
            <span className="h-px w-10 shrink-0 bg-slate-300 sm:w-14 md:w-20" aria-hidden />
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:mt-4 md:text-lg">
            Don&apos;t just take our word for it, hear from businesses and individuals who trust us
            with their accounting needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CLIENT_REVIEWS.map((r, idx) => {
            const c = colorClasses(r.color)
            return (
              <Card
                key={idx}
                className={[
                  "relative overflow-hidden rounded-2xl border-0 bg-gradient-to-l from-white/70 to-[#D8EAFF]",
                  "shadow-[0_18px_40px_rgba(0,0,0,0.12)]",
                ].join(" ")}
              >
                {/* colored left stroke (like figma) */}
                <div className={`absolute left-0 top-0 h-full w-[3px] ${c.ring}`} />

                <CardContent className="relative p-7">
                  {/* top row: stars + quote mark */}
                  <div className="flex items-start justify-between">
                    <Stars n={r.rating} />
                    <div className={`select-none text-5xl font-bold leading-none ${c.quote}`}>
                      ”
                    </div>
                  </div>

                  {/* quote */}
                  <p className="mt-4 text-[14px] leading-7 text-slate-600 md:text-[15px] md:leading-7">
                    &quot;{r.text}&quot;
                  </p>

                  {/* bottom: avatar + name */}
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      {r.avatarUrl ? <AvatarImage src={r.avatarUrl} alt={r.name} /> : null}
                      <AvatarFallback>{r.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="text-[14px] font-semibold text-slate-900 md:text-[15px]">{r.name}</div>
                      <div className="text-[13px] text-slate-500 md:text-[14px]">{r.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
