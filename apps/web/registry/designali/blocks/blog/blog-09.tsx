"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const authors = [
  { id: "nk", name: "Nadia Kurt", role: "Staff engineer", initials: "NK", tone: "bg-chart-1" },
  { id: "bo", name: "Ben Osei", role: "Design lead", initials: "BO", tone: "bg-chart-2" },
  { id: "ml", name: "Mei Lin", role: "Data scientist", initials: "ML", tone: "bg-chart-3" },
  { id: "rv", name: "Rafa Vidal", role: "Product manager", initials: "RV", tone: "bg-chart-4" },
]

const posts = [
  { author: "nk", title: "Incremental builds for a 900-package monorepo", date: "Nov 12", read: 13 },
  { author: "bo", title: "Designing an empty state that sells", date: "Nov 10", read: 5 },
  { author: "ml", title: "Why our churn model ignores login frequency", date: "Nov 4", read: 10 },
  { author: "rv", title: "Writing PRDs that fit on one screen", date: "Oct 30", read: 6 },
  { author: "nk", title: "Feature flags are a liability, manage them like one", date: "Oct 22", read: 8 },
  { author: "bo", title: "A color system with exactly eleven tokens", date: "Oct 16", read: 7 },
  { author: "ml", title: "Holdout groups for tiny teams", date: "Oct 9", read: 9 },
  { author: "rv", title: "The roadmap is a list of bets", date: "Oct 1", read: 4 },
]

export default function Blog09() {
  const [selected, setSelected] = useState<string | null>(null)
  const visible = selected ? posts.filter((p) => p.author === selected) : posts

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Written by the people who build Brightwell</h2>
          <p className="mt-3 text-muted-foreground">Pick a writer to see only their posts.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {authors.map((a) => {
            const on = selected === a.id
            const count = posts.filter((p) => p.author === a.id).length
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={on}
                onClick={() => setSelected(on ? null : a.id)}
                className={cn(
                  "flex flex-col items-center border p-5 text-center transition-colors",
                  on ? "border-foreground bg-muted" : "hover:bg-muted/50",
                  selected && !on && "opacity-50"
                )}
              >
                <span
                  className={cn(
                    "flex size-14 items-center justify-center rounded-full text-sm font-semibold text-background",
                    a.tone
                  )}
                >
                  {a.initials}
                </span>
                <span className="mt-3 text-sm font-medium">{a.name}</span>
                <span className="text-xs text-muted-foreground">{a.role}</span>
                <span className="mt-2 text-[10px] text-muted-foreground">{count} posts</span>
              </button>
            )
          })}
        </div>

        <ul className="mx-auto mt-12 max-w-3xl divide-y border-y">
          {visible.map((post) => {
            const author = authors.find((a) => a.id === post.author)
            return (
              <li key={post.title}>
                <a href="#" className="group flex items-center gap-4 py-5">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-background",
                      author?.tone
                    )}
                  >
                    {author?.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium group-hover:underline group-hover:underline-offset-4">
                      {post.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {author?.name} · {post.date}
                    </span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:block">{post.read} min</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
