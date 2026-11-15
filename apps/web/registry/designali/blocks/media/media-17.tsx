"use client"

import { useMemo, useState } from "react"
import { Clock, PlayCircle, Search } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const topics = ["All", "Engineering", "Design", "Growth", "Leadership"] as const
const recordings = [
  { title: "Scaling Postgres past the first billion rows", speaker: "Hana Lindgren", topic: "Engineering", date: "Oct 28", length: "52 min", views: "3.1k" },
  { title: "Design critiques that don't hurt", speaker: "Theo Marsh", topic: "Design", date: "Oct 21", length: "38 min", views: "2.4k" },
  { title: "Pricing pages that convert in 2025", speaker: "Amara Obi", topic: "Growth", date: "Oct 14", length: "45 min", views: "4.8k" },
  { title: "Your first 90 days as an engineering manager", speaker: "Jonas Pereira", topic: "Leadership", date: "Oct 07", length: "61 min", views: "5.2k" },
  { title: "Motion design for product teams", speaker: "Yuki Sato", topic: "Design", date: "Sep 30", length: "29 min", views: "1.9k" },
  { title: "Feature flags without the mess", speaker: "Carla Benn", topic: "Engineering", date: "Sep 23", length: "41 min", views: "2.7k" },
  { title: "Lifecycle email, from zero to useful", speaker: "Omar Haddad", topic: "Growth", date: "Sep 16", length: "36 min", views: "2.2k" },
]

export default function Media17() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("All")
  const [query, setQuery] = useState("")

  const rows = useMemo(
    () =>
      recordings.filter(
        (r) =>
          (topic === "All" || r.topic === topic) &&
          (r.title + r.speaker).toLowerCase().includes(query.toLowerCase())
      ),
    [topic, query]
  )

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Webinar replays</h2>
            <p className="mt-2 text-muted-foreground">Every session from the Builders Hour series, free to watch.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search talks or speakers" aria-label="Search" className="pl-9" />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className={cn("border px-3 py-1.5 text-xs font-medium transition-colors", topic === t ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted")}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-6 border-t border-border">
          <div className="hidden grid-cols-[1fr_9rem_6rem_6rem_5rem] gap-4 border-b border-border py-3 text-xs text-muted-foreground md:grid">
            <span>Session</span><span>Topic</span><span>Date</span><span>Length</span><span className="text-right">Views</span>
          </div>
          {rows.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">No replays match &ldquo;{query}&rdquo;.</p>
          ) : (
            <ul className="divide-y divide-border border-b border-border">
              {rows.map((r) => (
                <li key={r.title}>
                  <a href="#" className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 py-4 md:grid-cols-[1fr_9rem_6rem_6rem_5rem]">
                    <span className="flex min-w-0 items-center gap-3 md:col-auto">
                      <PlayCircle className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span className="min-w-0">
                        <span className="block truncate font-medium group-hover:underline">{r.title}</span>
                        <span className="block text-sm text-muted-foreground">{r.speaker}</span>
                      </span>
                    </span>
                    <span className="hidden md:block"><Badge variant="outline">{r.topic}</Badge></span>
                    <span className="hidden text-sm text-muted-foreground md:block">{r.date}</span>
                    <span className="flex items-center gap-1.5 justify-self-end text-sm text-muted-foreground md:justify-self-start">
                      <Clock className="size-3.5" />{r.length}
                    </span>
                    <span className="hidden text-right text-sm tabular-nums md:block">{r.views}</span>
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
