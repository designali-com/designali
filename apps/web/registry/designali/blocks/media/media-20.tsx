"use client"

import { useEffect, useState } from "react"
import {
  Pause,
  Play,
  Plus,
  SkipForward,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const shows = [
  { name: "Design se Code Tak", host: "Ali Imam", episode: "From Figma frame to production code", category: "Design", length: 2460, gradient: "linear-gradient(135deg, var(--chart-1), var(--chart-2))" },
  { name: "Pixel Perfect", host: "Sara", episode: "Why every grid needs a baseline", category: "UI/UX", length: 3120, gradient: "linear-gradient(200deg, var(--chart-3), var(--chart-5))" },
  { name: "Ship It", host: "Omar", episode: "Next.js for designers", category: "Development", length: 1980, gradient: "linear-gradient(60deg, var(--chart-4), var(--chart-1))" },
  { name: "Brand Room", host: "Nina", episode: "Logos that last a decade", category: "Brand", length: 2700, gradient: "linear-gradient(160deg, var(--chart-2), var(--chart-4))" },
  { name: "Motion Notes", host: "Callum", episode: "Easing curves, explained slowly", category: "Motion", length: 2280, gradient: "linear-gradient(300deg, var(--chart-5), var(--chart-3))" },
  { name: "Small Pages", host: "Ines", episode: "Designing a one-page portfolio", category: "Templates", length: 2040, gradient: "linear-gradient(20deg, var(--chart-1), var(--chart-5))" },
]
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`

export default function Media20() {
  const [current, setCurrent] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [queue, setQueue] = useState<number[]>([])

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setTime((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [playing])

  const start = (i: number) => {
    if (current === i) return setPlaying((p) => !p)
    setCurrent(i)
    setTime(0)
    setPlaying(true)
    setQueue((q) => q.filter((x) => x !== i))
  }
  const skip = () => {
    const [nextShow, ...rest] = queue
    if (nextShow === undefined) return
    setQueue(rest)
    setCurrent(nextShow)
    setTime(0)
  }
  const show = current === null ? null : shows[current]!

  return (
    <section className="relative w-full bg-background pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali Audio</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">New this week</h2>
          </div>
          <p className="text-sm text-muted-foreground">{queue.length} in your queue</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shows.map((s, i) => {
            const isCurrent = current === i
            const queued = queue.includes(i)
            return (
              <article key={s.name} className={cn("group flex gap-4 border border-border p-4 transition-colors", isCurrent && "bg-muted/60")}>
                <div className="relative size-24 shrink-0 border border-border" style={{ background: s.gradient }}>
                  <button
                    type="button"
                    aria-label={isCurrent && playing ? `Pause ${s.name}` : `Play ${s.name}`}
                    onClick={() => start(i)}
                    className="absolute right-1.5 bottom-1.5 flex size-8 items-center justify-center rounded-full bg-background text-foreground shadow transition-transform hover:scale-110"
                  >
                    {isCurrent && playing ? <Pause className="size-3.5 fill-current" /> : <Play className="size-3.5 translate-x-px fill-current" />}
                  </button>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="text-[11px] tracking-wider text-muted-foreground uppercase">{s.category}</p>
                  <p className="mt-0.5 truncate font-medium">{s.name}</p>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{s.episode}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-mono text-xs text-muted-foreground">{Math.round(s.length / 60)} min</span>
                    <button
                      type="button"
                      disabled={isCurrent}
                      onClick={() => setQueue((q) => (queued ? q.filter((x) => x !== i) : [...q, i]))}
                      className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground disabled:opacity-40"
                    >
                      {queued ? <X className="size-3" /> : <Plus className="size-3" />}
                      {queued ? "Queued" : "Queue"}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className={cn("absolute inset-x-0 bottom-0 border-t border-border bg-background/95 backdrop-blur transition-transform duration-300", show ? "translate-y-0" : "translate-y-full")}>
        {show && (
          <>
            <div className="h-0.5 bg-border">
              <div className="h-full bg-foreground" style={{ width: `${Math.min(100, (time / show.length) * 100)}%` }} />
            </div>
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3">
              <div className="size-10 shrink-0 border border-border" style={{ background: show.gradient }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{show.episode}</p>
                <p className="truncate text-xs text-muted-foreground">{show.name} - {show.host}</p>
              </div>
              <span className="hidden font-mono text-xs text-muted-foreground tabular-nums sm:inline">
                {fmt(time)} / {fmt(show.length)}
              </span>
              <Button size="icon-lg" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)}>
                {playing ? <Pause className="fill-current" /> : <Play className="fill-current" />}
              </Button>
              <Button size="icon-lg" variant="ghost" aria-label="Next in queue" disabled={queue.length === 0} onClick={skip}>
                <SkipForward />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
