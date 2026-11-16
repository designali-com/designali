"use client"

import { useEffect, useState } from "react"
import {
  Captions,
  Maximize,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Settings,
  Volume2,
  VolumeX,
} from "@designali/icons"

const DURATION = 754
const chapters = [
  { at: 0, label: "Cold open" },
  { at: 128, label: "The first sketch" },
  { at: 342, label: "First Designali block" },
  { at: 560, label: "Launch day" },
]

const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`

export default function Media07() {
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(212)
  const [muted, setMuted] = useState(false)
  const [cc, setCc] = useState(true)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(
      () => setTime((t) => (t + 1 >= DURATION ? 0 : t + 1)),
      1000
    )
    return () => clearInterval(id)
  }, [playing])

  const chapter = [...chapters].reverse().find((c) => time >= c.at)!
  const seek = (delta: number) =>
    setTime((t) => Math.min(DURATION, Math.max(0, t + delta)))

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Documentary - 12 min
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Made by Design: The Designali Story
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">A film by Ali Imam</p>
        </div>
        <div className="group relative aspect-video w-full overflow-hidden border border-border bg-black text-white">
          <img
            src="/stock/wallpaper-1.jpg"
            alt="Still from The Designali Story"
            className="absolute inset-0 size-full object-cover transition-transform duration-[2000ms]"
            style={{ transform: playing ? "scale(1.04)" : "scale(1)" }}
          />
          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying((p) => !p)}
            className="absolute inset-0 flex items-center justify-center"
          >
            {!playing && (
              <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-black transition-transform hover:scale-105 md:size-20">
                <Play className="size-6 translate-x-0.5 fill-current md:size-8" />
              </span>
            )}
          </button>
          {cc && (
            <p className="pointer-events-none absolute inset-x-0 bottom-20 mx-auto w-fit max-w-[85%] bg-black/70 px-3 py-1 text-center text-xs md:bottom-24 md:text-base">
              &ldquo;Where thoughtful design meets production-ready code.&rdquo;
            </p>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pt-10 pb-3 transition-opacity md:px-5 md:pb-4">
            <div className="relative h-4">
              <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 bg-white/25">
                <div
                  className="h-full bg-white"
                  style={{ width: `${(time / DURATION) * 100}%` }}
                />
              </div>
              {chapters.slice(1).map((c) => (
                <span
                  key={c.at}
                  className="absolute top-1/2 h-1 w-0.5 -translate-y-1/2 bg-black"
                  style={{ left: `${(c.at / DURATION) * 100}%` }}
                />
              ))}
              <input
                type="range"
                min={0}
                max={DURATION}
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                aria-label="Seek"
                className="absolute inset-0 w-full cursor-pointer opacity-0"
              />
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm md:gap-2">
              <button
                type="button"
                aria-label={playing ? "Pause" : "Play"}
                onClick={() => setPlaying((p) => !p)}
                className="flex size-8 items-center justify-center hover:bg-white/10"
              >
                {playing ? (
                  <Pause className="size-4 fill-current" />
                ) : (
                  <Play className="size-4 fill-current" />
                )}
              </button>
              <button
                type="button"
                aria-label="Back 10 seconds"
                onClick={() => seek(-10)}
                className="hidden size-8 items-center justify-center hover:bg-white/10 sm:flex"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Forward 10 seconds"
                onClick={() => seek(10)}
                className="hidden size-8 items-center justify-center hover:bg-white/10 sm:flex"
              >
                <RotateCw className="size-4" />
              </button>
              <button
                type="button"
                aria-label={muted ? "Unmute" : "Mute"}
                onClick={() => setMuted((m) => !m)}
                className="flex size-8 items-center justify-center hover:bg-white/10"
              >
                {muted ? (
                  <VolumeX className="size-4" />
                ) : (
                  <Volume2 className="size-4" />
                )}
              </button>
              <span className="ml-1 font-sans text-xs tabular-nums">
                {fmt(time)} / {fmt(DURATION)}
              </span>
              <span className="ml-2 hidden truncate text-xs text-white/70 md:inline">
                - {chapter.label}
              </span>
              <div className="ml-auto flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Captions"
                  aria-pressed={cc}
                  onClick={() => setCc((c) => !c)}
                  className={`flex size-8 items-center justify-center hover:bg-white/10 ${cc ? "text-white" : "text-white/50"}`}
                >
                  <Captions className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Settings"
                  className="hidden size-8 items-center justify-center hover:bg-white/10 sm:flex"
                >
                  <Settings className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Fullscreen"
                  className="flex size-8 items-center justify-center hover:bg-white/10"
                >
                  <Maximize className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {chapters.map((c) => (
            <button
              key={c.at}
              type="button"
              onClick={() => setTime(c.at)}
              className={`bg-background p-3 text-left text-sm transition-colors hover:bg-muted ${chapter.at === c.at ? "text-foreground" : "text-muted-foreground"}`}
            >
              <span className="block font-sans text-xs">{fmt(c.at)}</span>
              <span className="mt-0.5 block truncate font-medium">
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
