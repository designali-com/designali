"use client"

import { useState } from "react"
import {
  Pause,
  Play,
  Radio,
  Volume2,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const stations = [
  { name: "Deep Work", genre: "Ambient - Downtempo", listeners: "2.4k", freq: "88.1" },
  { name: "Pixel Jazz", genre: "Jazz - Soul", listeners: "1.1k", freq: "92.6" },
  { name: "Code Beats", genre: "Electronic - House", listeners: "5.8k", freq: "97.3" },
  { name: "Studio Talk", genre: "Talk - Design and code", listeners: "860", freq: "101.9" },
]
const schedule = [
  { time: "18:00", show: "Design se Code Tak", host: "with Ali Imam", live: true },
  { time: "20:00", show: "Figma Hour", host: "with Sara" },
  { time: "22:00", show: "Night Build", host: "with Omar" },
  { time: "00:00", show: "Overnight Drift", host: "automated mix" },
]

export default function Media16() {
  const [station, setStation] = useState(0)
  const [playing, setPlaying] = useState(true)
  const current = stations[station]!

  return (
    <section className="w-full bg-foreground py-20 text-background">
      <style>{`@keyframes m16-eq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}@media (prefers-reduced-motion:reduce){.m16-bar{animation:none!important}}`}</style>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col items-center">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-full border border-background/15">
            <div className="absolute inset-6 rounded-full border border-background/10" />
            <div className="absolute inset-14 rounded-full border border-background/10" />
            <div className="flex h-24 items-center gap-1" aria-hidden>
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="m16-bar h-full w-1.5 origin-center bg-background"
                  style={{
                    animation: `m16-eq ${0.6 + ((i * 7) % 5) * 0.15}s ease-in-out ${i * 0.07}s infinite`,
                    animationPlayState: playing ? "running" : "paused",
                    opacity: 0.4 + (i % 4) * 0.15,
                  }}
                />
              ))}
            </div>
            <span className="absolute top-10 flex items-center gap-1.5 text-xs tracking-widest uppercase">
              <span className={cn("size-1.5 rounded-full", playing ? "bg-red-500" : "bg-background/40")} />
              {playing ? "On air" : "Paused"}
            </span>
            <span className="absolute bottom-10 font-mono text-3xl font-semibold tabular-nums">{current.freq}</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((p) => !p)}
              className="flex size-14 items-center justify-center rounded-full bg-background text-foreground transition-transform active:scale-95"
            >
              {playing ? <Pause className="size-6 fill-current" /> : <Play className="size-6 translate-x-0.5 fill-current" />}
            </button>
            <div>
              <p className="text-lg font-semibold">{current.name}</p>
              <p className="text-sm text-background/60">{current.genre}</p>
            </div>
            <Volume2 className="ml-4 size-5 text-background/60" />
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest text-background/60 uppercase">
            <Radio className="size-3.5" /> Designali Radio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Music for design and code, streaming 24/7.</h2>
          <ul className="mt-8 grid grid-cols-2 gap-px border border-background/15 bg-background/15">
            {stations.map((s, i) => (
              <li key={s.name}>
                <button
                  type="button"
                  onClick={() => {
                    setStation(i)
                    setPlaying(true)
                  }}
                  className={cn("h-full w-full p-4 text-left transition-colors", i === station ? "bg-background text-foreground" : "bg-foreground hover:bg-background/10")}
                >
                  <span className="font-mono text-xs opacity-60">{s.freq}</span>
                  <span className="mt-1 block truncate font-medium">{s.name}</span>
                  <span className="mt-0.5 block text-xs opacity-60">{s.listeners} listening</span>
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-sm font-medium">Tonight on {current.name}</h3>
          <ol className="mt-3 divide-y divide-background/15 border-y border-background/15">
            {schedule.map((item) => (
              <li key={item.time} className="flex items-center gap-4 py-3 text-sm">
                <span className="w-12 font-mono text-background/60 tabular-nums">{item.time}</span>
                <span className="min-w-0 flex-1 truncate">
                  <span className="font-medium">{item.show}</span> <span className="text-background/60">{item.host}</span>
                </span>
                {item.live && <span className="bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold text-white uppercase">Live</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
