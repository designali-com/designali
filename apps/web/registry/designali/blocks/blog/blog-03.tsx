"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const categories = ["All", "Design", "Engineering", "Company", "Guides"]

const posts = [
  { title: "Introducing themes for every Designali block", category: "Company", date: "Nov 13, 2026", read: 4 },
  { title: "Building accessible components with Tailwind CSS", category: "Engineering", date: "Nov 9, 2026", read: 12 },
  { title: "Grid Pattern and Dot Pattern: backgrounds that bend", category: "Design", date: "Nov 6, 2026", read: 7 },
  { title: "Migrating Dalim UI to the Designali design system", category: "Guides", date: "Oct 31, 2026", read: 9 },
  { title: "From Dalim to Designali: a new name for the studio", category: "Company", date: "Oct 24, 2026", read: 3 },
  { title: "Why Designali blue is #00A8FF", category: "Design", date: "Oct 18, 2026", read: 6 },
  { title: "Server components for designali.com, one year in", category: "Engineering", date: "Oct 11, 2026", read: 10 },
  { title: "Writing a design brief for a Designali project", category: "Guides", date: "Oct 4, 2026", read: 5 },
]

export default function Blog03() {
  const [active, setActive] = useState("All")
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">Writing</h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Product updates, long-form essays, and practical guides from Ali Imam and
          the Designali studio.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "border px-3 py-1.5 text-xs transition-colors",
                active === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <ul>
          {visible.map((post) => (
            <li key={post.title} className="border-b border-border">
              <a
                href="#"
                className="group grid grid-cols-1 gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-lg font-medium transition-transform group-hover:translate-x-1">
                  {post.title}
                </span>
                <span className="flex items-center gap-3 text-xs text-muted-foreground">
                  {post.category} · {post.read} min
                  <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
