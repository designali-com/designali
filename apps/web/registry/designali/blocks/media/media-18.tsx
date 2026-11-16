"use client"

import { useState } from "react"
import {
  Disc3,
  ExternalLink,
  Pause,
  Play,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const sides = {
  A: [
    { title: "Blank Canvas", length: "4:12" },
    { title: "Grid Lines", length: "3:48" },
    { title: "Tokens in the Wiring", length: "5:20" },
    { title: "Halfway Handoff", length: "4:01" },
  ],
  B: [
    { title: "Dark Mode", length: "3:56" },
    { title: "The Long Build", length: "6:14" },
    { title: "Design se Code Tak", length: "4:33" },
    { title: "Ship It", length: "5:02" },
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
              background: "repeating-radial-gradient(circle, black 0 2px, color-mix(in oklab, white 8%, black) 2px 4px)",
              animation: "m18-spin 3s linear infinite",
              animationPlayState: playing ? "running" : "paused",
            }}
          >
            <div className="absolute inset-[34%] overflow-hidden rounded-full bg-primary">
              <img src="/img/ask/ask2.jpg" alt="" className="absolute inset-0 size-full object-cover" />
              <span className="absolute top-1/2 left-1/2 size-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
              <span className="absolute top-[18%] left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest text-white uppercase">Side {side}</span>
            </div>
          </div>
          <div className="relative flex aspect-square w-[88%] flex-col justify-between overflow-hidden border border-border p-6 shadow-2xl">
            <img src="/img/ask/ask2.jpg" alt="Designali Sessions album cover" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <span className="relative text-xs font-semibold tracking-[0.3em] text-white uppercase">Designali</span>
            <span className="relative text-4xl leading-none font-semibold text-white md:text-5xl">Design<br />se Code<br />Tak</span>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
            <Disc3 className="size-3.5" /> Designali Sessions - Out 21 Nov
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Design se Code Tak</h2>
          <p className="mt-3 text-muted-foreground">
            A soundtrack from the Designali studio. Eight tracks made for long design and code sessions, from the first
            sketch to the final deploy.
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
                      {active ? <Pause className="size-3.5 fill-current" /> : <span className="font-sans text-xs">{side}{i + 1}</span>}
                    </span>
                    <span className="flex-1 truncate">{t.title}</span>
                    <span className="font-sans text-xs text-muted-foreground">{t.length}</span>
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
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="/blogs" />}>
              Listen on designali.com <ExternalLink />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
