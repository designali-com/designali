"use client"

import { useRef } from "react"
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Layers,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const cards = [
  { icon: Gauge, title: "Core Web Vitals", body: "Real-user LCP, INP and CLS per route, segmented by device and country.", tone: "from-sky-500/15" },
  { icon: Timer, title: "Session replay", body: "Watch the exact moment a user rage-clicks, with console and network logs alongside.", tone: "from-violet-500/15" },
  { icon: TrendingUp, title: "Funnels", body: "Build a funnel from any events in seconds and see where each cohort drops off.", tone: "from-emerald-500/15" },
  { icon: Users, title: "Cohorts", body: "Group users by behaviour, plan or traits, then compare retention curves side by side.", tone: "from-amber-500/15" },
  { icon: Activity, title: "Alerts", body: "Get pinged in chat when error rate or latency breaks a threshold you set.", tone: "from-rose-500/15" },
  { icon: Layers, title: "Feature flags", body: "Roll out to 5% of users, watch the metrics, then ramp up without a redeploy.", tone: "from-teal-500/15" },
]

export default function Features16() {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * 320, behavior: "smooth" })

  return (
    <section className="w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
            Six tools, one tracking snippet.
          </h2>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon-lg" aria-label="Previous" onClick={() => scroll(-1)}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Next" onClick={() => scroll(1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map(({ icon: Icon, title, body, tone }) => (
            <article
              key={title}
              className={`flex w-[80%] shrink-0 snap-start flex-col border border-border bg-gradient-to-b ${tone} to-transparent p-6 sm:w-[300px]`}
            >
              <Icon className="size-6" />
              <div className="mt-16 h-px w-full bg-border" />
              <h3 className="mt-6 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
