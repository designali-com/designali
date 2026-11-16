"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const photos = [
  { title: "Chromatic spheres", series: "CGI", camera: "Designali · Ali Imam", background: "url(/img/ask/ask1.jpg) center / cover" },
  { title: "Liquid glass", series: "3D", camera: "Designali · Ali Imam", background: "url(/img/ask/ask2.jpg) center / cover" },
  { title: "Soft gradients", series: "Abstract", camera: "Designali · Ali Imam", background: "url(/img/ask/ask3.jpg) center / cover" },
  { title: "Fluid motion", series: "Motion", camera: "Designali · Ali Imam", background: "url(/img/ask/ask4.jpg) center / cover" },
  { title: "Studio light", series: "3D", camera: "Designali · Ali Imam", background: "url(/img/ask/ask5.jpg) center / cover" },
  { title: "Form study", series: "Abstract", camera: "Designali · Ali Imam", background: "url(/img/ask/ask6.jpg) center / cover" },
  { title: "Colour field", series: "CGI", camera: "Designali · Ali Imam", background: "url(/img/ask/ask7.jpg) center / cover" },
  { title: "Design se code tak", series: "Poster", camera: "Designali · Ali Imam", background: "url(/img/ask/ask8.jpg) center / cover" },
  { title: "Night render", series: "CGI", camera: "Designali · Ali Imam", background: "url(/img/ask/ask9.jpg) center / cover" },
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
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Ali Imam — Visuals</h2>
            <p className="mt-2 text-muted-foreground">
              CGI, 3D and digital artwork from the Designali studio.
            </p>
          </div>
          <p className="font-sans text-xs text-muted-foreground">{photos.length} frames · Designali</p>
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
            <span className="font-sans text-xs text-muted-foreground">
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
