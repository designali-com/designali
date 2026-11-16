"use client"

import { useState } from "react"
import {
  Search,
  X,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const posts = [
  { title: "Migrating 460 blocks to a new registry", tags: ["Registry", "Migrations"], excerpt: "Codemods, backfills, and the checklist we now use for every block change." },
  { title: "Serving icons from the edge on Vercel", tags: ["Edge", "Performance"], excerpt: "How designali.com serves 4,000+ SVG icons in under a millisecond." },
  { title: "Choosing a checkout for Designali templates", tags: ["Billing", "Architecture"], excerpt: "When a simple payment link is fine and when you need more." },
  { title: "Typed registry items without codegen", tags: ["Registry", "TypeScript"], excerpt: "Keeping 2,300+ UI examples type-safe and readable." },
  { title: "Observability for a small studio", tags: ["Monitoring", "Architecture"], excerpt: "The five dashboards we actually open, and the forty we deleted." },
  { title: "Speeding up the Designali monorepo CI", tags: ["CI", "Performance"], excerpt: "From 19 minutes to 4 on every pull request." },
  { title: "Designing idempotent license webhooks", tags: ["Billing", "Edge"], excerpt: "Retries are guaranteed. Duplicate charges should not be." },
]

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort()

export default function Blog10() {
  const [query, setQuery] = useState("")
  const [tag, setTag] = useState<string | null>(null)

  const q = query.trim().toLowerCase()
  const results = posts.filter(
    (p) =>
      (!tag || p.tags.includes(tag)) &&
      (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
  )

  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl font-medium tracking-tight">Engineering notes</h2>
          <p className="mt-2 text-sm text-muted-foreground">Search the Designali engineering blog.</p>
          <div className="relative mt-6">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts"
              aria-label="Search posts"
              className="h-10 bg-background pl-9"
            />
          </div>
          <p className="mt-8 text-xs tracking-widest text-muted-foreground uppercase">Topics</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(tag === t ? null : t)}
                aria-pressed={tag === t}
                className={cn(
                  "border px-2.5 py-1 text-xs transition-colors",
                  tag === t
                    ? "border-foreground bg-foreground text-background"
                    : "bg-background hover:bg-muted"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between border-b pb-3 text-sm">
            <span className="text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"}
              {tag ? ` in ${tag}` : ""}
            </span>
            {(tag || q) && (
              <button
                type="button"
                onClick={() => {
                  setTag(null)
                  setQuery("")
                }}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="size-3" />
                Clear filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="border-b py-16 text-center text-sm text-muted-foreground">
              No posts match &ldquo;{query}&rdquo;. Try a broader term.
            </div>
          ) : (
            <ul className="divide-y border-b">
              {results.map((p) => (
                <li key={p.title}>
                  <a href="#" className="group block py-6">
                    <h3 className="text-lg font-medium group-hover:underline group-hover:underline-offset-4">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-3 flex gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          #{t.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
