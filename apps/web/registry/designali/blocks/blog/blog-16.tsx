"use client"

import { useState } from "react"
import {
  Flame,
  Clock,
  Star,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

type Post = { title: string; excerpt: string; author: string; meta: string; image: string }

const tabs: { id: string; label: string; icon: typeof Clock; posts: Post[] }[] = [
  {
    id: "latest",
    label: "Latest",
    icon: Clock,
    posts: [
      { title: "Planning a brand identity for a new studio", excerpt: "Logo, type, color, and the case for starting with one blue.", author: "Ali Imam", meta: "2 hours ago", image: "/images/templates/design-agency.jpg" },
      { title: "Building a landing page in one afternoon", excerpt: "Three Designali blocks, one template, zero custom CSS.", author: "Ali Imam", meta: "Yesterday", image: "/images/templates/portfolio-simple.jpg" },
      { title: "New on designali.com this winter", excerpt: "Fourteen new templates, from portfolios to resorts.", author: "Designali Studio", meta: "Nov 12", image: "/images/templates/resort.jpg" },
    ],
  },
  {
    id: "popular",
    label: "Most read",
    icon: Flame,
    posts: [
      { title: "The only five blocks every landing page needs", excerpt: "Hero, features, pricing, FAQ and a call to action.", author: "Ali Imam", meta: "48k reads", image: "/img/dashboard-1-light.jpg" },
      { title: "Pixel-perfect handoff is a myth", excerpt: "Design in Figma, ship in code, review in the browser.", author: "Ali Imam", meta: "31k reads", image: "/stock/development.jpg" },
      { title: "Installing @designali/icons without the mess", excerpt: "One package, 4,000+ icons, and ten calm minutes.", author: "Designali Studio", meta: "27k reads", image: "/images/templates/dalim-icons-old.jpg" },
    ],
  },
  {
    id: "staff",
    label: "Staff picks",
    icon: Star,
    posts: [
      { title: "A year of designing in public", excerpt: "Total output: 460+ blocks. Total cost: less than you think.", author: "Ali Imam", meta: "Pick of the month", image: "/images/templates/aliimam-comp.jpg" },
      { title: "Why we stopped designing without code", excerpt: "The workflow, the tools, and what changed our minds.", author: "Designali Studio", meta: "Long read", image: "/stock/strategy.jpg" },
      { title: "Design is a conversation", excerpt: "Ali Imam on reading what a client really wants.", author: "Ali Imam", meta: "Interview", image: "/ali.jpg" },
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
          <h2 className="pb-0 text-3xl font-medium tracking-tight md:pb-4 md:text-4xl">Designali stories</h2>
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
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted px-4">
                <Macbook
                  variant="macbook-air"
                  color="starlight"
                  className="max-w-full transition-transform duration-500 group-hover:scale-[1.02]"
                >
                  <img
                    src={lead.image}
                    alt={lead.title}
                    className="size-full object-cover object-top"
                  />
                </Macbook>
              </div>
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
                <img src={p.image} alt="" className="aspect-square w-full object-cover" />
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
