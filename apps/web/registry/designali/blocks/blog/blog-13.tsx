"use client"

import { useEffect, useState } from "react"
import {
  Bookmark,
  Link2,
  Share2,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const sections = [
  {
    id: "problem",
    title: "The problem with nightly registry builds",
    body: [
      "For three years, every Designali block, icon and template was rebuilt by a single cron job at 02:00 UTC. It worked until designali.com grew past 460 blocks and 4,000 icons.",
      "The job had grown to 47 minutes. A failure meant a full rerun, and a broken registry for everyone.",
    ],
  },
  {
    id: "approach",
    title: "Moving to incremental snapshots",
    body: [
      "We split the build into per-item snapshots that rebuild whenever a source file changes. Each snapshot is small enough to finish in seconds and cheap enough to retry.",
      "The hard part was not the pipeline. It was agreeing on what a consistent registry means when blocks and their dependencies change out of order.",
    ],
  },
  {
    id: "results",
    title: "What changed for customers",
    body: [
      "The registry is now at most four minutes stale. Support emails about missing blocks dropped by 81% in the first month.",
      "Our Vercel bill went up a little. Nobody has asked to switch back.",
    ],
  },
  {
    id: "next",
    title: "What we would do differently",
    body: [
      "We would have invested in a replay tool on day one. Debugging a snapshot means reconstructing the exact order of events that built it, and we did that by hand for weeks.",
    ],
  },
]

export default function Blog13() {
  const [active, setActive] = useState(sections[0]?.id ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )
    sections.forEach((s) => {
      const el = document.getElementById(`blog13-${s.id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Engineering · 9 min read</p>
          <h1 className="mt-4 text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            How designali.com replaced a 47-minute cron job with incremental builds
          </h1>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-chart-2 text-sm font-semibold text-background">
              AI
            </span>
            <div className="text-left text-sm">
              <p className="font-medium">Ali Imam</p>
              <p className="text-xs text-muted-foreground">Founder, Designali · November 11, 2026</p>
            </div>
          </div>
        </header>

        <div className="mt-16 grid gap-12 border-t pt-12 lg:grid-cols-[220px_1fr_60px]">
          <nav className="hidden lg:sticky lg:top-24 lg:block lg:self-start" aria-label="Table of contents">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">On this page</p>
            <ul className="mt-4 space-y-1 border-l">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#blog13-${s.id}`}
                    className={cn(
                      "-ml-px block border-l py-1.5 pl-4 text-sm transition-colors",
                      active === s.id
                        ? "border-foreground text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="mx-auto w-full max-w-2xl">
            {sections.map((s) => (
              <div key={s.id} id={`blog13-${s.id}`} className="scroll-mt-24 pb-10">
                <h2 className="text-2xl font-medium tracking-tight">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-base leading-8 text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <div className="flex gap-2 lg:sticky lg:top-24 lg:flex-col lg:self-start">
            <Button variant="outline" size="icon-lg" aria-label="Save post">
              <Bookmark />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Share post">
              <Share2 />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Copy link">
              <Link2 />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
