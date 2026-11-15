"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const groups = {
  Engineering: [
    { quote: "Preview environments per branch changed how we review. Bugs show up before merge, not after.", name: "Rafael Costa", role: "Principal Engineer, Driftwood" },
    { quote: "Build times dropped from 14 minutes to under 3. The team noticed on day one.", name: "Anika Shah", role: "Platform Lead, Cinder" },
  ],
  Design: [
    { quote: "I share a link instead of a Loom. Stakeholders click around the real thing and comment in place.", name: "Lucas Moreau", role: "Product Designer, Halo" },
    { quote: "Design QA used to be a spreadsheet. Now it is a comment thread pinned to the pixel.", name: "Zara Ahmed", role: "Design Lead, Fieldnote" },
  ],
  Leadership: [
    { quote: "We ship twice a week now instead of twice a month, with fewer incidents. That is the whole pitch.", name: "Martin Holm", role: "CTO, Bramble" },
    { quote: "It was the easiest budget approval of the year. The time savings showed up in the first sprint report.", name: "Olivia Grant", role: "VP Product, Keel" },
  ],
}

type Group = keyof typeof groups

export default function Testimonials13() {
  const keys = Object.keys(groups) as Group[]
  const [tab, setTab] = useState<Group>(keys[0]!)

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-medium tracking-tight md:text-4xl">
            Every team gets something different out of it.
          </h2>
          <div className="flex border border-border" role="tablist">
            {keys.map((k) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={cn(
                  "flex-1 px-4 py-2 text-sm transition-colors not-last:border-r not-last:border-border",
                  tab === k ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
        <div key={tab} className="mt-10 grid animate-in gap-6 duration-300 fade-in md:grid-cols-2">
          {groups[tab].map((t) => (
            <figure key={t.name} className="flex flex-col justify-between border border-border bg-card p-8">
              <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="flex size-10 items-center justify-center bg-muted text-sm font-medium">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{t.name}</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
