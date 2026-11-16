"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const photos = [
  { title: "Glass Spheres", camera: "CGI render", gradient: 'url("/img/ask/ask1.jpg") center / cover' },
  { title: "Liquid Chrome", camera: "3D study", gradient: 'url("/img/ask/ask2.jpg") center / cover' },
  { title: "Soft Light", camera: "Motion frame", gradient: 'url("/img/ask/ask3.jpg") center / cover' },
  { title: "Folded Form", camera: "Abstract render", gradient: 'url("/img/ask/ask4.jpg") center / cover' },
  { title: "Pale Shore", camera: "Colour study", gradient: 'url("/img/ask/ask5.jpg") center / cover' },
  { title: "Night Bloom", camera: "CGI render", gradient: 'url("/img/ask/ask6.jpg") center / cover' },
  { title: "Iron Bridge", camera: "3D study", gradient: 'url("/img/ask/ask7.jpg") center / cover' },
  { title: "Fog Line", camera: "Motion frame", gradient: 'url("/img/ask/ask8.jpg") center / cover' },
]

export default function Gallery09() {
  const [open, setOpen] = useState<number | null>(null)

  const step = (dir: number) =>
    setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length))

  const isOpen = open !== null

  useEffect(() => {
    if (!isOpen) return
    const move = (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
      if (e.key === "ArrowRight") move(1)
      if (e.key === "ArrowLeft") move(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  const active = open === null ? null : photos[open]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            The Designali Visuals Collection
          </h2>
          <p className="mt-3 text-muted-foreground">
            Eight CGI and 3D pieces by Ali Imam. Click any frame to view it
            full screen, use the arrow keys to move between them.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.title}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-square overflow-hidden border border-border text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="absolute inset-0" style={{ background: photo.gradient }} />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-3 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-medium">{photo.title}</span>
                <Expand className="size-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 p-4 text-white backdrop-blur-sm md:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-mono tabular-nums">
              {open + 1} / {photos.length}
            </span>
            <button
              type="button"
              aria-label="Close"
              className="flex size-9 items-center justify-center border border-white/20 hover:bg-white/10"
              onClick={() => setOpen(null)}
            >
              <X className="size-4" />
            </button>
          </div>
          <div
            className="relative mx-auto my-6 flex w-full max-w-4xl flex-1 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] max-h-full w-full border border-white/10" style={{ background: active.gradient }} />
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="Previous photo"
              className="absolute left-2 border-white/20 bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={() => step(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="Next photo"
              className="absolute right-2 border-white/20 bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={() => step(1)}
            >
              <ChevronRight />
            </Button>
          </div>
          <div className="text-center">
            <p className="font-medium">{active.title}</p>
            <p className="mt-1 text-xs text-white/60">{active.camera}</p>
          </div>
        </div>
      )}
    </section>
  )
}
