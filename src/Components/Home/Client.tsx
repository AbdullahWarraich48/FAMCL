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
            "h-4 w-4",
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
          <div className="flex items-center justify-center gap-6">
            <span className="h-px w-24 bg-slate-300 md:w-28" />
            <h2 className="text-[30px] font-bold tracking-tight text-[#175dab] md:text-[34px]">
              What Our Clients Say
            </h2>
            <span className="h-px w-24 bg-slate-300 md:w-28" />
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-6 text-slate-700 md:text-[15px]">
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
                  <p className="mt-4 text-[13px] leading-6 text-slate-600">
                    &quot;{r.text}&quot;
                  </p>

                  {/* bottom: avatar + name */}
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      {r.avatarUrl ? <AvatarImage src={r.avatarUrl} alt={r.name} /> : null}
                      <AvatarFallback>{r.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="text-[13px] font-semibold text-slate-900">{r.name}</div>
                      <div className="text-[12px] text-slate-500">{r.role}</div>
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
