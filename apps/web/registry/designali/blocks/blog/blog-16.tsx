"use client"

import { useState } from "react"
import { Flame, Clock, Star } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

type Post = { title: string; excerpt: string; author: string; meta: string; tone: string }

const tabs: { id: string; label: string; icon: typeof Clock; posts: Post[] }[] = [
  {
    id: "latest",
    label: "Latest",
    icon: Clock,
    posts: [
      { title: "Planning a garden for a north-facing balcony", excerpt: "Ferns, mint, and the case for giving up on tomatoes.", author: "Lotte Brandt", meta: "2 hours ago", tone: "from-emerald-300/60 to-emerald-100/20 dark:from-emerald-700/60 dark:to-emerald-900/20" },
      { title: "Composting in a studio apartment", excerpt: "A bokashi bin, a freezer bag, and zero smell.", author: "Kofi Mensah", meta: "Yesterday", tone: "from-amber-300/60 to-amber-100/20 dark:from-amber-700/60 dark:to-amber-900/20" },
      { title: "Seed swaps near you this winter", excerpt: "Fourteen community events from Leeds to Lisbon.", author: "Greenstep editors", meta: "Nov 12", tone: "from-sky-300/60 to-sky-100/20 dark:from-sky-700/60 dark:to-sky-900/20" },
    ],
  },
  {
    id: "popular",
    label: "Most read",
    icon: Flame,
    posts: [
      { title: "The only five houseplants you cannot kill", excerpt: "Tested by our most neglectful editor over a full year.", author: "Ivy Paterson", meta: "48k reads", tone: "from-lime-300/60 to-lime-100/20 dark:from-lime-700/60 dark:to-lime-900/20" },
      { title: "Watering schedules are a myth", excerpt: "Check the soil, not the calendar. Here is how.", author: "Marco Bellini", meta: "31k reads", tone: "from-teal-300/60 to-teal-100/20 dark:from-teal-700/60 dark:to-teal-900/20" },
      { title: "Repotting without the mess", excerpt: "A newspaper, a spoon, and ten calm minutes.", author: "Ana Duarte", meta: "27k reads", tone: "from-orange-300/60 to-orange-100/20 dark:from-orange-700/60 dark:to-orange-900/20" },
    ],
  },
  {
    id: "staff",
    label: "Staff picks",
    icon: Star,
    posts: [
      { title: "A year growing food on a 2m² rooftop", excerpt: "Total harvest: 41kg. Total cost: less than you think.", author: "Yusuf Demir", meta: "Pick of the month", tone: "from-rose-300/60 to-rose-100/20 dark:from-rose-700/60 dark:to-rose-900/20" },
      { title: "Why we stopped recommending peat", excerpt: "The science, the alternatives, and what changed our minds.", author: "Greenstep editors", meta: "Long read", tone: "from-stone-300/60 to-stone-100/20 dark:from-stone-600/60 dark:to-stone-900/20" },
      { title: "Pruning is a conversation", excerpt: "A gardener of forty years on reading what a plant wants.", author: "June Hargreaves", meta: "Interview", tone: "from-violet-300/60 to-violet-100/20 dark:from-violet-700/60 dark:to-violet-900/20" },
    ],
  },
]

export default function Blog16() {
  const [active, setActive] = useState("latest")
  const current = tabs.find((t) => t.id === active) ?? tabs[0]!
  const [lead, ...rest] = current.posts

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 border-b md:flex-row md:items-end md:justify-between">
          <h2 className="pb-0 text-3xl font-medium tracking-tight md:pb-4 md:text-4xl">Greenstep stories</h2>
          <div role="tablist" className="-mb-px flex overflow-x-auto">
            {tabs.map((t) => {
              const on = t.id === active
              const Icon = t.icon
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm transition-colors",
                    on ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        <div role="tabpanel" className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {lead && (
            <a href="#" className="group block">
              <div className={cn("aspect-[16/10] bg-gradient-to-br", lead.tone)} />
              <p className="mt-5 text-xs text-muted-foreground">
                {lead.author} · {lead.meta}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight group-hover:underline group-hover:underline-offset-4 md:text-3xl">
                {lead.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{lead.excerpt}</p>
            </a>
          )}
          <div className="flex flex-col gap-8">
            {rest.map((p) => (
              <a key={p.title} href="#" className="group grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]">
                <div className={cn("aspect-square bg-gradient-to-br", p.tone)} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    {p.author} · {p.meta}
                  </p>
                  <h3 className="mt-1 leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
