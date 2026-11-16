"use client"

import { useEffect, useState } from "react"
import { Download, Pause, Play } from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const clips = [
  {
    title: "UI interaction",
    voice: "Soft click",
    tag: "Interface",
    length: 24,
  },
  { title: "Page transition", voice: "Whoosh", tag: "Motion", length: 11 },
  { title: "Brand reveal", voice: "Logo sting", tag: "Brand", length: 18 },
  {
    title: "Showreel background",
    voice: "Ambient pad",
    tag: "Long-form",
    length: 32,
  },
  {
    title: "Success state",
    voice: "Glass chime",
    tag: "Interface",
    length: 27,
  },
]

function bars(seed: number) {
  return Array.from(
    { length: 48 },
    (_, i) =>
      20 +
      Math.abs(
        Math.sin(i * 0.55 + seed) * 60 + Math.sin(i * 1.7 + seed * 2) * 20
      )
  )
}

export default function Media14() {
  const [active, setActive] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (active === null) return
    const id = setTimeout(() => {
      if (progress + 0.1 >= clips[active]!.length) {
        setActive(null)
        setProgress(0)
      } else setProgress(progress + 0.1)
    }, 100)
    return () => clearTimeout(id)
  }, [active, progress])

  const toggle = (i: number) => {
    if (active === i) setActive(null)
    else {
      setActive(i)
      setProgress(0)
    }
  }

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Designali sound library
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Hear every sound before you choose
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Five of the sounds Designali uses in CGI, 3D and motion projects. Each
          sample is an unedited preview.
        </p>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {clips.map((clip, i) => {
            const isActive = active === i
            const pct = isActive ? progress / clip.length : 0
            const heights = bars(i + 1)
            return (
              <li
                key={clip.title}
                className={cn(
                  "flex items-center gap-4 py-4 transition-colors",
                  isActive && "bg-muted/50"
                )}
              >
                <button
                  type="button"
                  aria-label={
                    isActive ? `Pause ${clip.title}` : `Play ${clip.title}`
                  }
                  onClick={() => toggle(i)}
                  className={cn(
                    "ml-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "hover:bg-muted"
                  )}
                >
                  {isActive ? (
                    <Pause className="size-4 fill-current" />
                  ) : (
                    <Play className="size-4 translate-x-px fill-current" />
                  )}
                </button>
                <div className="w-36 shrink-0 sm:w-48">
                  <p className="truncate text-sm font-medium">{clip.voice}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {clip.title}
                  </p>
                </div>
                <div
                  className="flex h-10 min-w-0 flex-1 items-center gap-px"
                  aria-hidden
                >
                  {heights.map((h, b) => (
                    <span
                      key={b}
                      className={cn(
                        "flex-1 transition-colors",
                        b / heights.length < pct
                          ? "bg-foreground"
                          : "bg-border",
                        b % 2 === 1 && "hidden sm:block"
                      )}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <span className="hidden w-24 shrink-0 text-center text-xs text-muted-foreground md:block">
                  {clip.tag}
                </span>
                <span className="w-10 shrink-0 text-right font-sans text-xs tabular-nums">
                  0:{String(clip.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label="Download"
                  className="mr-2 hidden p-2 text-muted-foreground hover:text-foreground sm:block"
                >
                  <Download className="size-4" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
