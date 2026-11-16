"use client"

import { useState } from "react"
import {
  BadgeCheck,
  Star,
  ThumbsUp,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const distribution = [
  { stars: 5, count: 812 },
  { stars: 4, count: 241 },
  { stars: 3, count: 64 },
  { stars: 2, count: 21 },
  { stars: 1, count: 18 },
]

const reviews = [
  { name: "Tomasz W.", initials: "TW", rating: 5, date: "2 Nov 2026", title: "Launched my studio site in a weekend", body: "The Next.js code is clean and the Figma file matches it block for block. Swapped the copy, changed the primary color and shipped it on Vercel.", fit: "License: Pro", helpful: 48 },
  { name: "Aisha R.", initials: "AR", rating: 4, date: "28 Oct 2026", title: "Great build, wish it had one more case study layout", body: "Typography and spacing feel excellent and dark mode just works. I wanted one more case study page, which is the only reason for four stars.", fit: "License: Solo", helpful: 21 },
  { name: "Lena K.", initials: "LK", rating: 5, date: "19 Oct 2026", title: "Replaced my old agency site after eight years", body: "Used it with Designali blocks and @designali/icons. Every section is responsive and the components stay consistent.", fit: "License: Studio", helpful: 17 },
  { name: "Marcus O.", initials: "MO", rating: 3, date: "4 Oct 2026", title: "Solid, but more than I needed", body: "It is a full design system. If you want a one-page site this is a lot, but for a growing studio I have no complaints.", fit: "License: Pro", helpful: 9 },
]

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("flex gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={cn("size-3.5", n <= value ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40")}
        />
      ))}
    </span>
  )
}

export default function Ecommerce12() {
  const [filter, setFilter] = useState<number | null>(null)
  const [helpful, setHelpful] = useState<string[]>([])
  const total = distribution.reduce((s, d) => s + d.count, 0)
  const average = distribution.reduce((s, d) => s + d.stars * d.count, 0) / total
  const visible = filter ? reviews.filter((r) => r.rating === filter) : reviews

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[320px_1fr]">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Customer reviews</h2>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-6xl font-semibold tracking-tight">{average.toFixed(1)}</span>
            <div className="pb-2">
              <Stars value={Math.round(average)} />
              <p className="mt-1 text-xs text-muted-foreground">{total.toLocaleString()} reviews</p>
            </div>
          </div>

          <ul className="mt-6 space-y-1">
            {distribution.map((d) => {
              const pct = Math.round((d.count / total) * 100)
              const isActive = filter === d.stars
              return (
                <li key={d.stars}>
                  <button
                    type="button"
                    onClick={() => setFilter(isActive ? null : d.stars)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full items-center gap-3 px-2 py-1.5 text-sm transition-colors",
                      isActive ? "bg-muted" : "hover:bg-muted/60"
                    )}
                  >
                    <span className="w-10 text-left text-muted-foreground">{d.stars} star</span>
                    <span className="h-2 flex-1 bg-muted">
                      <span className="block h-full bg-amber-400" style={{ width: `${pct}%` }} />
                    </span>
                    <span className="w-10 text-right text-xs text-muted-foreground tabular-nums">{pct}%</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 border border-border p-5">
            <p className="text-sm font-medium">Own the Design Agency Template?</p>
            <p className="mt-1 text-xs text-muted-foreground">Share how it has held up for you.</p>
            <Button variant="outline" className="mt-4 w-full">
              Write a review
            </Button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-border pb-4 text-sm">
            <span className="text-muted-foreground">
              {filter ? `Showing ${filter}-star reviews` : "Most helpful first"}
            </span>
            {filter && (
              <button type="button" onClick={() => setFilter(null)} className="underline underline-offset-4">
                Show all
              </button>
            )}
          </div>
          <ul className="divide-y divide-border">
            {visible.length === 0 && (
              <li className="py-12 text-center text-sm text-muted-foreground">No reviews with this rating yet.</li>
            )}
            {visible.map((r) => {
              const voted = helpful.includes(r.name)
              return (
                <li key={r.name} className="py-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {r.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 text-sm font-medium">
                        {r.name}
                        <BadgeCheck className="size-3.5 text-emerald-600 dark:text-emerald-400" aria-label="Verified buyer" />
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {r.date} · {r.fit}
                      </p>
                    </div>
                    <Stars value={r.rating} className="shrink-0" />
                  </div>
                  <h3 className="mt-4 font-medium">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.body}</p>
                  <button
                    type="button"
                    onClick={() =>
                      setHelpful((h) => (h.includes(r.name) ? h.filter((n) => n !== r.name) : [...h, r.name]))
                    }
                    aria-pressed={voted}
                    className={cn(
                      "mt-4 flex items-center gap-2 border px-3 py-1.5 text-xs transition-colors",
                      voted ? "border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <ThumbsUp className="size-3.5" />
                    Helpful ({r.helpful + (voted ? 1 : 0)})
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
