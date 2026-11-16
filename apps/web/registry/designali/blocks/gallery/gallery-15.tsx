"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

const works = [
  { title: "Portfolio Simple", artist: "Ali Imam", medium: "Next.js template", year: "2025", price: "$49", gradient: 'url("/images/templates/portfolio-simple.jpg") center / cover' },
  { title: "Design Agency", artist: "Ali Imam", medium: "Agency template", year: "2025", price: "$79", gradient: 'url("/images/templates/design-agency.jpg") center / cover' },
  { title: "Resort", artist: "Ali Imam", medium: "Landing page", year: "2025", price: "$49", gradient: 'url("/images/templates/resort.jpg") center / cover' },
  { title: "AI", artist: "Ali Imam", medium: "SaaS template", year: "2024", price: "$79", gradient: 'url("/images/templates/ai.jpg") center / cover' },
  { title: "Vercel Style", artist: "Ali Imam", medium: "Product template", year: "2024", price: "$59", gradient: 'url("/images/templates/vercel.jpg") center / cover' },
]

export default function Gallery15() {
  const [hover, setHover] = useState(0)
  const active = works[hover]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Available templates
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Designali templates
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Designali - 5 templates</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="divide-y divide-border">
            {works.map((work, i) => (
              <li key={work.title}>
                <a
                  href="#"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  className={`group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-5 transition-colors md:grid-cols-[2rem_1fr_10rem_5rem_auto] ${i === hover ? "text-foreground" : "text-muted-foreground"}`}
                >
                  <div className="aspect-square border border-border md:hidden" style={{ background: work.gradient }} />
                  <span className="hidden font-sans text-xs md:block">0{i + 1}</span>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-medium text-foreground">{work.title}</p>
                    <p className="truncate text-sm">{work.artist}</p>
                  </div>
                  <span className="hidden text-sm md:block">{work.medium}</span>
                  <span className="hidden text-sm tabular-nums md:block">{work.year}</span>
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground tabular-nums">
                    {work.price}
                    <ArrowRight className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden pt-6 lg:block">
            <div className="sticky top-20">
              <div
                key={active.title}
                className="aspect-[4/5] w-full border border-border animate-in fade-in duration-300"
                style={{ background: active.gradient }}
              />
              <div className="mt-4 flex items-baseline justify-between text-sm">
                <span className="font-medium">{active.title}</span>
                <span className="text-muted-foreground">{active.medium}, {active.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
