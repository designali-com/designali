"use client"

import { useEffect, useState } from "react"
import { Pause, Play, Rewind, FastForward } from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const segments = [
  {
    at: 0,
    speaker: "Ali",
    text: "Welcome back to the Designali Podcast, the show about design, code and the space between. I'm Ali Imam.",
  },
  {
    at: 9,
    speaker: "Ali",
    text: "Today I'm with Rafael, a designer who recently started shipping his own websites in code.",
  },
  {
    at: 18,
    speaker: "Rafael",
    text: "Thanks for having me. I've been a long-time user of the Designali blocks.",
  },
  {
    at: 25,
    speaker: "Ali",
    text: "Let's start with the handoff. Why did you stop handing designs to developers?",
  },
  {
    at: 32,
    speaker: "Rafael",
    text: "Because the handoff was the hardest part of every project, not the design itself.",
  },
  {
    at: 42,
    speaker: "Rafael",
    text: "Every time a Figma file became code, something got lost. Spacing, motion, the small details.",
  },
  {
    at: 52,
    speaker: "Ali",
    text: "That's exactly why I started Designali. Design se code tak, without losing anything.",
  },
  {
    at: 58,
    speaker: "Rafael",
    text: "Now I start from a block, tweak the tokens and ship. It saves me days on every site.",
  },
]
const DURATION = 70
const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`

export default function Media11() {
  const [time, setTime] = useState(18)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(
      () => setTime((t) => (t + 1 > DURATION ? 0 : t + 1)),
      1000
    )
    return () => clearInterval(id)
  }, [playing])

  const activeIndex = segments.reduce(
    (acc, s, i) => (time >= s.at ? i : acc),
    0
  )

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-4">
          <img
            src="/img/ask/ask5.jpg"
            alt="Designali Podcast cover art"
            className="size-16 shrink-0 border border-border object-cover"
          />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">
              Designali Podcast - Episode 87
            </p>
            <h2 className="truncate text-xl font-semibold tracking-tight md:text-2xl">
              Design se code tak, without the handoff
            </h2>
          </div>
        </div>
        <div className="sticky top-0 z-10 mt-6 border border-border bg-background/95 p-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Back 15 seconds"
              onClick={() => setTime((t) => Math.max(0, t - 15))}
              className="p-1.5 text-muted-foreground hover:text-foreground"
            >
              <Rewind className="size-4" />
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((p) => !p)}
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
            >
              {playing ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="size-4 translate-x-px fill-current" />
              )}
            </button>
            <button
              type="button"
              aria-label="Forward 15 seconds"
              onClick={() => setTime((t) => Math.min(DURATION, t + 15))}
              className="p-1.5 text-muted-foreground hover:text-foreground"
            >
              <FastForward className="size-4" />
            </button>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <span className="font-sans text-xs tabular-nums">
                {fmt(time)}
              </span>
              <input
                type="range"
                min={0}
                max={DURATION}
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                aria-label="Seek"
                className="h-1 min-w-0 flex-1 cursor-pointer accent-foreground"
              />
              <span className="hidden font-sans text-xs text-muted-foreground tabular-nums sm:inline">
                {fmt(DURATION)}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Transcript - click a line to jump
          </p>
          <ol className="mt-4 space-y-1">
            {segments.map((s, i) => (
              <li key={s.at}>
                <button
                  type="button"
                  onClick={() => setTime(s.at)}
                  className={cn(
                    "grid w-full grid-cols-[3rem_1fr] gap-3 border-l-2 px-3 py-2.5 text-left transition-colors sm:grid-cols-[3rem_5rem_1fr]",
                    i === activeIndex
                      ? "border-foreground bg-muted"
                      : "border-transparent hover:bg-muted/50",
                    i > activeIndex && "text-muted-foreground"
                  )}
                >
                  <span className="pt-0.5 font-sans text-xs text-muted-foreground tabular-nums">
                    {fmt(s.at)}
                  </span>
                  <span className="hidden text-sm font-medium sm:block">
                    {s.speaker}
                  </span>
                  <span className="text-sm leading-relaxed">
                    <span className="font-medium sm:hidden">{s.speaker}: </span>
                    {s.text}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
