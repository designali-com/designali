"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const posts = [
  { title: "A design school for people who hate tutorials", cat: "Design", date: "Nov 14", hue: "from-chart-1/60" },
  { title: "Twelve hours inside a Figma file", cat: "Code", date: "Nov 12", hue: "from-chart-2/60" },
  { title: "Inside the Dalim Fonts archive", cat: "Craft", date: "Nov 9", hue: "from-chart-3/60" },
  { title: "Running a template store with four products", cat: "Business", date: "Nov 7", hue: "from-chart-4/60" },
  { title: "The designers who ship at 2am", cat: "Design", date: "Nov 4", hue: "from-chart-5/60" },
  { title: "Redrawing icons as a weekly ritual", cat: "Craft", date: "Nov 1", hue: "from-chart-1/60" },
  { title: "A walking guide to the Designali work page", cat: "Code", date: "Oct 29", hue: "from-chart-2/60" },
  { title: "What a template sells in its first week", cat: "Business", date: "Oct 26", hue: "from-chart-3/60" },
  { title: "Motion design for the impatient", cat: "Design", date: "Oct 22", hue: "from-chart-4/60" },
  { title: "Sketchbooks of a design engineer", cat: "Craft", date: "Oct 19", hue: "from-chart-5/60" },
  { title: "Weekend projects you can build with blocks", cat: "Code", date: "Oct 15", hue: "from-chart-1/60" },
  { title: "The economics of a one-person studio", cat: "Business", date: "Oct 12", hue: "from-chart-2/60" },
]

const perPage = 6

export default function Blog18() {
  const [page, setPage] = useState(1)
  const pages = Math.ceil(posts.length / perPage)
  const visible = posts.slice((page - 1) * perPage, page * perPage)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl tracking-tight">Designali magazine</h2>
          <p className="text-sm text-muted-foreground">
            Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, posts.length)} of {posts.length} stories
          </p>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <a key={p.title} href="#" className="group">
              <div className={cn("aspect-[3/2] bg-gradient-to-t to-transparent border", p.hue)} />
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{p.cat}</span>
                <span>·</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-2 text-lg leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                {p.title}
              </h3>
            </a>
          ))}
        </div>

        <nav aria-label="Pagination" className="mt-14 flex items-center justify-between border-t pt-6">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            Newer
          </button>
          <div className="flex gap-1">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                aria-current={n === page ? "page" : undefined}
                className={cn(
                  "size-9 text-sm transition-colors",
                  n === page ? "bg-foreground text-background" : "hover:bg-muted"
                )}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            Older
            <ChevronRight className="size-4" />
          </button>
        </nav>
      </div>
    </section>
  )
}
