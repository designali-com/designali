"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const photos = [
  { title: "Low tide, Skagen", series: "Coastlines", camera: "35mm · f/8 · 1/250", background: "linear-gradient(180deg, oklch(0.8 0.05 230), oklch(0.6 0.06 200) 55%, oklch(0.72 0.05 80))" },
  { title: "Glasshouse, Kew", series: "Interiors", camera: "50mm · f/2 · 1/60", background: "radial-gradient(circle at 50% 30%, oklch(0.88 0.08 140), oklch(0.45 0.08 160))" },
  { title: "Night market, Taipei", series: "Cities", camera: "28mm · f/1.8 · 1/30", background: "radial-gradient(circle at 30% 70%, oklch(0.7 0.18 30), oklch(0.2 0.05 280))" },
  { title: "Salt flats at noon", series: "Landscapes", camera: "24mm · f/11 · 1/1000", background: "linear-gradient(180deg, oklch(0.75 0.08 240), oklch(0.96 0.01 90) 60%)" },
  { title: "Stairwell, Porto", series: "Interiors", camera: "35mm · f/4 · 1/125", background: "conic-gradient(from 200deg at 60% 40%, oklch(0.7 0.1 60), oklch(0.4 0.05 40), oklch(0.7 0.1 60))" },
  { title: "Fog over Nordkette", series: "Landscapes", camera: "85mm · f/5.6 · 1/500", background: "linear-gradient(180deg, oklch(0.9 0.01 250), oklch(0.55 0.03 250))" },
  { title: "Tram depot, Lisbon", series: "Cities", camera: "35mm · f/5.6 · 1/250", background: "linear-gradient(135deg, oklch(0.8 0.14 85), oklch(0.5 0.12 30))" },
  { title: "Lighthouse keeper", series: "Portraits", camera: "50mm · f/1.4 · 1/200", background: "radial-gradient(circle at 50% 35%, oklch(0.78 0.06 50) 18%, oklch(0.3 0.03 240) 60%)" },
  { title: "First snow, Hokkaido", series: "Landscapes", camera: "35mm · f/8 · 1/500", background: "linear-gradient(180deg, oklch(0.92 0.02 250), oklch(0.98 0 0) 70%, oklch(0.6 0.03 250))" },
]

export default function Portfolio14() {
  const [open, setOpen] = useState<number | null>(null)
  const current = open === null ? null : photos[open]

  useEffect(() => {
    if (open === null) return
    const step = (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const step = (dir: number) =>
    setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length))

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Mara Lindqvist</h2>
            <p className="mt-2 text-muted-foreground">
              Travel and architecture photographer. Prints available in editions of 25.
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{photos.length} frames · 2024–2026</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {photos.map((photo, i) => (
            <button
              key={photo.title}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-square overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`Open ${photo.title}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: photo.background }}
              />
              <div className="absolute inset-0 flex items-end bg-black/0 p-3 transition-colors group-hover:bg-black/30">
                <span className="translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-mono text-xs text-muted-foreground">
              {open + 1} / {photos.length}
            </span>
            <Button variant="ghost" size="icon-lg" aria-label="Close" onClick={() => setOpen(null)}>
              <X />
            </Button>
          </div>
          <div className="flex min-h-0 flex-1 items-center gap-2 px-2 md:gap-6 md:px-6">
            <Button variant="outline" size="icon-lg" aria-label="Previous photo" onClick={() => step(-1)}>
              <ChevronLeft />
            </Button>
            <div className="mx-auto aspect-[4/3] max-h-full w-full max-w-4xl" style={{ background: current.background }} />
            <Button variant="outline" size="icon-lg" aria-label="Next photo" onClick={() => step(1)}>
              <ChevronRight />
            </Button>
          </div>
          <div className="px-6 py-6 text-center">
            <p className="font-medium">{current.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {current.series} · {current.camera}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
