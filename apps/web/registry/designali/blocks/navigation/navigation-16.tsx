"use client"

import { useRef, useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const sections = [
  {
    id: "summary",
    title: "Summary",
    body: "designali.com serves 460+ blocks, 240+ landing pages and 4000+ icons to designers and developers worldwide. This report covers reliability, speed and cost for Q3.",
  },
  {
    id: "reliability",
    title: "Reliability",
    body: "Uptime held at 99.98% across the quarter. Two incidents in August accounted for most failed downloads, both traced to a misconfigured cache rule.",
  },
  {
    id: "latency",
    title: "Latency",
    body: "Median page load dropped from 410ms to 260ms after moving block previews onto the edge. The 99th percentile is now under 1.2 seconds.",
  },
  {
    id: "cost",
    title: "Cost",
    body: "Hosting spend fell 18% quarter over quarter. Storage grew 9% as we added new templates, UI designs and Figma source files.",
  },
  {
    id: "next",
    title: "Next quarter",
    body: "Priorities are a public status page, faster icon search, and a new mobile UI kit for the Designali library.",
  },
]

export default function Navigation16() {
  const [active, setActive] = useState(sections[0]!.id)
  const container = useRef<HTMLDivElement>(null)

  function onScroll() {
    const element = container.current
    if (!element) return
    const top = element.scrollTop + 40
    let current = sections[0]!.id
    for (const section of sections) {
      const target = element.querySelector<HTMLElement>(`[data-section="${section.id}"]`)
      if (target && target.offsetTop <= top) current = section.id
    }
    setActive(current)
  }

  function jump(id: string) {
    const target = container.current?.querySelector<HTMLElement>(`[data-section="${id}"]`)
    if (target && container.current) {
      container.current.scrollTo({ top: target.offsetTop - 8, behavior: "smooth" })
    }
  }

  const index = sections.findIndex((section) => section.id === active)

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[200px_1fr]">
        <nav aria-label="Report sections" className="md:sticky md:top-6 md:h-fit">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali Q3 report</p>
          <div className="mt-3 h-0.5 bg-muted">
            <div
              className="h-full bg-foreground transition-all duration-300"
              style={{ width: `${((index + 1) / sections.length) * 100}%` }}
            />
          </div>
          <ol className="mt-4 flex gap-1 overflow-x-auto md:flex-col md:gap-0">
            {sections.map((section, position) => (
              <li key={section.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => jump(section.id)}
                  className={cn(
                    "flex w-full items-center gap-3 py-2 pe-3 text-start text-sm transition-colors md:pe-0",
                    active === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="font-mono text-xs tabular-nums">0{position + 1}</span>
                  {section.title}
                  {active === section.id && (
                    <span className="ms-auto hidden size-1.5 bg-foreground md:block" />
                  )}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <div
          ref={container}
          onScroll={onScroll}
          className="relative h-[460px] overflow-y-auto border p-6 md:p-10"
        >
          {sections.map((section) => (
            <article key={section.id} data-section={section.id} className="pb-16 last:pb-64">
              <h3 className="text-2xl font-semibold tracking-tight">{section.title}</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{section.body}</p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((bar) => (
                  <div key={bar} className="h-16 bg-muted" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
