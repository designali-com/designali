"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const posts = [
  { title: "A cooking school for people who hate recipes", cat: "Food", date: "Nov 14", hue: "from-chart-1/60" },
  { title: "Twelve hours on the night train to Split", cat: "Travel", date: "Nov 12", hue: "from-chart-2/60" },
  { title: "Inside the last letterpress shop in town", cat: "Craft", date: "Nov 9", hue: "from-chart-3/60" },
  { title: "Running a bookshop with four shelves", cat: "Business", date: "Nov 7", hue: "from-chart-4/60" },
  { title: "The bakers who start at 2am", cat: "Food", date: "Nov 4", hue: "from-chart-5/60" },
  { title: "Mending clothes as a weekly ritual", cat: "Craft", date: "Nov 1", hue: "from-chart-1/60" },
  { title: "A walking guide to the old harbor", cat: "Travel", date: "Oct 29", hue: "from-chart-2/60" },
  { title: "What a flower market sells at closing time", cat: "Business", date: "Oct 26", hue: "from-chart-3/60" },
  { title: "Fermentation for the impatient", cat: "Food", date: "Oct 22", hue: "from-chart-4/60" },
  { title: "Sketchbooks of a ferry captain", cat: "Craft", date: "Oct 19", hue: "from-chart-5/60" },
  { title: "Weekend cabins you can reach by bus", cat: "Travel", date: "Oct 15", hue: "from-chart-1/60" },
  { title: "The economics of a corner cafe", cat: "Business", date: "Oct 12", hue: "from-chart-2/60" },
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
          <h2 className="font-serif text-4xl tracking-tight">Small Hours magazine</h2>
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
