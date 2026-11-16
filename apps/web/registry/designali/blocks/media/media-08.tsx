"use client"

import { useEffect, useState } from "react"
import {
  Heart,
  ListMusic,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const tracks = [
  { title: "Design se Code Tak", length: 214 },
  { title: "Pixel Rain", length: 187 },
  { title: "Grid Lines", length: 263 },
  { title: "Dark Mode (Interlude)", length: 92 },
  { title: "Tailwind Drift", length: 231 },
  { title: "Ship It", length: 298 },
]
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`

export default function Media08() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [liked, setLiked] = useState<number[]>([2])
  const track = tracks[current]!

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(() => {
      if (time + 1 < track.length) return setTime(time + 1)
      if (!repeat) setCurrent((c) => (c + 1) % tracks.length)
      setTime(0)
    }, 1000)
    return () => clearTimeout(id)
  }, [playing, time, repeat, track.length])

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + tracks.length) % tracks.length)
    setTime(0)
  }

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-5xl overflow-hidden border border-border md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col bg-muted/40 p-6 md:p-8">
          <div
            className={cn("relative aspect-square w-full overflow-hidden border border-border transition-transform duration-500", playing && "scale-[1.02]")}
          >
            <img
              src="/img/ask/ask7.jpg"
              alt="Designali Sessions cover art"
              className="absolute inset-0 size-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-background/85 px-2 py-1 text-[11px] font-medium tracking-widest uppercase backdrop-blur">
              Designali - Sessions
            </span>
          </div>
          <div className="mt-6 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold">{track.title}</p>
              <p className="text-sm text-muted-foreground">Designali Studio</p>
            </div>
            <button
              type="button"
              aria-label="Like"
              aria-pressed={liked.includes(current)}
              onClick={() => setLiked((l) => (l.includes(current) ? l.filter((x) => x !== current) : [...l, current]))}
              className="p-1"
            >
              <Heart className={cn("size-5", liked.includes(current) ? "fill-primary text-primary" : "text-muted-foreground")} />
            </button>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min={0}
              max={track.length}
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              aria-label="Seek"
              className="h-1 w-full cursor-pointer accent-foreground"
            />
            <div className="mt-1 flex justify-between font-sans text-xs text-muted-foreground tabular-nums">
              <span>{fmt(time)}</span>
              <span>-{fmt(track.length - time)}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button type="button" aria-label="Shuffle" aria-pressed={shuffle} onClick={() => setShuffle((s) => !s)} className={cn("p-2", shuffle ? "text-foreground" : "text-muted-foreground")}>
              <Shuffle className="size-4" />
            </button>
            <button type="button" aria-label="Previous" onClick={() => go(-1)} className="p-2"><SkipBack className="size-5 fill-current" /></button>
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((p) => !p)}
              className="flex size-14 items-center justify-center rounded-full bg-foreground text-background transition-transform active:scale-95"
            >
              {playing ? <Pause className="size-6 fill-current" /> : <Play className="size-6 translate-x-0.5 fill-current" />}
            </button>
            <button type="button" aria-label="Next" onClick={() => go(1)} className="p-2"><SkipForward className="size-5 fill-current" /></button>
            <button type="button" aria-label="Repeat" aria-pressed={repeat} onClick={() => setRepeat((r) => !r)} className={cn("p-2", repeat ? "text-foreground" : "text-muted-foreground")}>
              <Repeat className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold"><ListMusic className="size-4" /> Tracklist</h2>
            <span className="text-xs text-muted-foreground">6 songs - 21 min</span>
          </div>
          <ol className="mt-4 divide-y divide-border">
            {tracks.map((t, i) => (
              <li key={t.title}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrent(i)
                    setTime(0)
                    setPlaying(true)
                  }}
                  className={cn("grid w-full grid-cols-[1.5rem_1fr_auto] items-center gap-3 py-3 text-left text-sm hover:bg-muted/50", i === current && "font-medium")}
                >
                  {i === current && playing ? (
                    <span className="flex h-3 items-end gap-0.5" aria-hidden>
                      {[0, 1, 2].map((b) => (
                        <span key={b} className="w-0.5 animate-pulse bg-foreground" style={{ height: `${[60, 100, 40][b]}%`, animationDelay: `${b * 150}ms` }} />
                      ))}
                    </span>
                  ) : (
                    <span className="font-sans text-xs text-muted-foreground">{i + 1}</span>
                  )}
                  <span className="truncate">{t.title}</span>
                  <span className="font-sans text-xs text-muted-foreground tabular-nums">{fmt(t.length)}</span>
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-auto pt-6 text-xs text-muted-foreground">A Designali playlist for deep design and code work</p>
        </div>
      </div>
    </section>
  )
}
