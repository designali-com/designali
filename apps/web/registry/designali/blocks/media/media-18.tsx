"use client"

import { useState } from "react"
import { Disc3, ExternalLink, Pause, Play } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const sides = {
  A: [
    { title: "Open Water", length: "4:12" },
    { title: "Kingfisher", length: "3:48" },
    { title: "Salt in the Wiring", length: "5:20" },
    { title: "Halfway House", length: "4:01" },
  ],
  B: [
    { title: "Lantern Season", length: "3:56" },
    { title: "The Long Field", length: "6:14" },
    { title: "Weatherglass", length: "4:33" },
    { title: "Home by Ferry", length: "5:02" },
  ],
} as const
type Side = keyof typeof sides

export default function Media18() {
  const [side, setSide] = useState<Side>("A")
  const [playing, setPlaying] = useState(false)
  const [track, setTrack] = useState(0)

  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <style>{`@keyframes m18-spin{to{transform:rotate(360deg)}}`}</style>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div
            className={cn("absolute inset-y-[4%] right-0 aspect-square rounded-full transition-transform duration-700 ease-out", playing ? "translate-x-[22%]" : "translate-x-[10%]")}
            style={{
              background: "repeating-radial-gradient(circle, #111 0 2px, #1c1c1c 2px 4px)",
              animation: "m18-spin 3s linear infinite",
              animationPlayState: playing ? "running" : "paused",
            }}
          >
            <div className="absolute inset-[34%] rounded-full" style={{ background: "linear-gradient(135deg, var(--chart-1), var(--chart-4))" }}>
              <span className="absolute top-1/2 left-1/2 size-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
              <span className="absolute top-[18%] left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest text-white uppercase">Side {side}</span>
            </div>
          </div>
          <div
            className="relative flex aspect-square w-[88%] flex-col justify-between border border-border p-6 shadow-2xl"
            style={{ background: "linear-gradient(160deg, var(--chart-4), var(--chart-1) 60%, var(--chart-2))" }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-white uppercase">Weatherglass</span>
            <span className="text-4xl leading-none font-semibold text-white md:text-5xl">The<br />Marram<br />Grass</span>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
            <Disc3 className="size-3.5" /> New album - Out 21 Nov
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Weatherglass</h2>
          <p className="mt-3 text-muted-foreground">
            The third record from The Marram Grass. Eight songs recorded live to tape in a lighthouse on the north coast over
            nine winter days.
          </p>
          <div className="mt-8 flex items-center justify-between border-b border-border">
            <div className="flex">
              {(Object.keys(sides) as Side[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSide(s)
                    setTrack(0)
                  }}
                  className={cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium", side === s ? "border-foreground" : "border-transparent text-muted-foreground")}
                >
                  Side {s}
                </button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">Preview clips - 30s</span>
          </div>
          <ol className="mt-2">
            {sides[side].map((t, i) => {
              const active = i === track && playing
              return (
                <li key={t.title}>
                  <button
                    type="button"
                    onClick={() => {
                      if (i === track) setPlaying((p) => !p)
                      else {
                        setTrack(i)
                        setPlaying(true)
                      }
                    }}
                    className={cn("flex w-full items-center gap-4 px-2 py-2.5 text-left text-sm hover:bg-muted", i === track && "font-medium")}
                  >
                    <span className="flex size-5 items-center justify-center text-muted-foreground">
                      {active ? <Pause className="size-3.5 fill-current" /> : <span className="font-mono text-xs">{side}{i + 1}</span>}
                    </span>
                    <span className="flex-1 truncate">{t.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">{t.length}</span>
                  </button>
                </li>
              )
            })}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setPlaying((p) => !p)}>
              {playing ? <Pause className="fill-current" /> : <Play className="fill-current" />}
              {playing ? "Pause preview" : "Play preview"}
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
              Pre-order vinyl - $32 <ExternalLink />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
