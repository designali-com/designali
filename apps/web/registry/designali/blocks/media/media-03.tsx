"use client"

import { useState } from "react"
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const bars = Array.from({ length: 64 }, (_, i) =>
  Math.round(20 + Math.abs(Math.sin(i * 0.7) * 60) + (i % 5) * 4)
)

export default function Media03() {
  const [playing, setPlaying] = useState(false)
  const progress = 38

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid border border-border bg-background md:grid-cols-[220px_1fr]">
          <div
            className="aspect-square border-b border-border md:border-r md:border-b-0"
            style={{
              background:
                "conic-gradient(from 90deg, var(--chart-1), var(--chart-2), var(--chart-4), var(--chart-1))",
            }}
          />
          <div className="flex flex-col justify-between gap-6 p-6">
            <div>
              <p className="text-xs text-muted-foreground">
                Episode 42 &middot; Designali Podcast
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Typography as interface, with Ali Imam
              </h2>
            </div>
            <div className="flex h-16 items-end gap-0.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={
                    i < (bars.length * progress) / 100
                      ? "flex-1 bg-foreground"
                      : "flex-1 bg-border"
                  }
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground tabular-nums">
                18:42 / 49:10
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Back 15 seconds"
                >
                  <SkipBack />
                </Button>
                <Button
                  size="icon-lg"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <Pause /> : <Play />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Forward 30 seconds"
                >
                  <SkipForward />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
