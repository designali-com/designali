"use client"

import { useState } from "react"
import {
  CircleCheck as CheckCircle2,
  ChevronDown,
  Circle,
  Lock,
  CirclePlay as PlayCircle,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

type Lesson = { title: string; length: string; locked?: boolean }
const modules: { title: string; lessons: Lesson[] }[] = [
  { title: "Foundations", lessons: [{ title: "Welcome and course map", length: "3:12" }, { title: "Installing Designali blocks", length: "8:40" }, { title: "Your first layout", length: "12:05" }] },
  { title: "Typography systems", lessons: [{ title: "Choosing a type scale", length: "9:18" }, { title: "Line length and rhythm", length: "7:52" }, { title: "Pairing typefaces", length: "11:30" }] },
  { title: "Colour and contrast", lessons: [{ title: "Building a palette from one hue", length: "10:44", locked: true }, { title: "Accessible contrast in practice", length: "8:21", locked: true }] },
]
const flat = modules.flatMap((m, mi) => m.lessons.map((l, li) => ({ ...l, key: `${mi}-${li}`, module: m.title })))

export default function Media13() {
  const [current, setCurrent] = useState("1-0")
  const [done, setDone] = useState<string[]>(["0-0", "0-1", "0-2"])
  const [open, setOpen] = useState<number[]>([0, 1])
  const lesson = flat.find((l) => l.key === current)!
  const idx = flat.findIndex((l) => l.key === current)
  const next = flat[idx + 1]
  const pct = Math.round((done.length / flat.length) * 100)

  const complete = () => {
    setDone((d) => (d.includes(current) ? d : [...d, current]))
    if (next && !next.locked) setCurrent(next.key)
  }

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_360px]">
        <div className="min-w-0">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-border" style={{ background: "linear-gradient(135deg, var(--muted), var(--background))" }}>
            <div className="absolute inset-6 border border-dashed border-border md:inset-12" />
            <div className="relative text-center">
              <PlayCircle className="mx-auto size-14 text-foreground/80" strokeWidth={1.25} />
              <p className="mt-3 text-xs text-muted-foreground">{lesson.length}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">{lesson.module} - Lesson {idx + 1} of {flat.length}</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">{lesson.title}</h2>
            </div>
            <Button onClick={complete} disabled={done.includes(current) && (!next || !!next.locked)}>
              {done.includes(current) ? "Next lesson" : "Mark complete"}
            </Button>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            In this lesson Ali Imam works through a real Designali landing page and rebuilds its hierarchy using only type. Download the
            starter file from the resources tab and follow along at your own pace.
          </p>
        </div>
        <aside className="border border-border lg:self-start">
          <div className="border-b border-border p-4">
            <p className="text-sm font-medium">Designali: Layout for Developers</p>
            <div className="mt-3 flex items-center gap-3">
              <Progress value={pct} className="flex-1" />
              <span className="font-mono text-xs tabular-nums">{pct}%</span>
            </div>
          </div>
          {modules.map((m, mi) => {
            const isOpen = open.includes(mi)
            return (
              <div key={m.title} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen((o) => (o.includes(mi) ? o.filter((x) => x !== mi) : [...o, mi]))}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium hover:bg-muted/50"
                >
                  <span>
                    <span className="mr-2 font-mono text-xs text-muted-foreground">0{mi + 1}</span>
                    {m.title}
                  </span>
                  <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                </button>
                {isOpen && (
                  <ul className="pb-2">
                    {m.lessons.map((l, li) => {
                      const key = `${mi}-${li}`
                      const Icon = l.locked ? Lock : done.includes(key) ? CheckCircle2 : Circle
                      return (
                        <li key={key}>
                          <button
                            type="button"
                            disabled={l.locked}
                            onClick={() => setCurrent(key)}
                            className={cn(
                              "flex w-full items-center gap-3 px-4 py-2 text-left text-sm disabled:cursor-not-allowed disabled:opacity-50",
                              key === current ? "bg-muted font-medium" : "hover:bg-muted/50"
                            )}
                          >
                            <Icon className={cn("size-4 shrink-0", done.includes(key) && !l.locked ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground")} />
                            <span className="min-w-0 flex-1 truncate">{l.title}</span>
                            <span className="font-mono text-xs text-muted-foreground">{l.length}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </aside>
      </div>
    </section>
  )
}
