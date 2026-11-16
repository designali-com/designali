"use client"

import { useEffect, useState } from "react"
import {
  Pause,
  Play,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const DURATION = 6000

const slides = [
  { quote: "We moved 40 microservices without a single customer-facing incident. The rollback button never got pressed.", name: "Ingrid Haugen", role: "Director of Infrastructure, Polaris Bank" },
  { quote: "Our developers got their Fridays back. Deploys are boring now, which is exactly what we wanted.", name: "Samuel Okoye", role: "Engineering Manager, Trellis" },
  { quote: "Compliance evidence is generated on every release. Our last audit took four days instead of four weeks.", name: "Catalina Reyes", role: "Head of Security, Verdant Pay" },
]

export default function Testimonials18() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION)
    return () => clearTimeout(id)
  }, [index, playing])

  const s = slides[index]!

  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <style>{`@keyframes t18-progress{from{width:0}to{width:100%}}`}</style>
      <div className="mx-auto max-w-5xl px-6">
        <div className="border border-border bg-background p-8 md:p-14">
          <blockquote
            key={index}
            className="min-h-[10rem] animate-in text-2xl leading-snug font-medium tracking-tight duration-500 fade-in slide-in-from-bottom-2 md:min-h-[8rem] md:text-3xl"
          >
            &ldquo;{s.quote}&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="text-sm">
              <div className="font-medium">{s.name}</div>
              <div className="text-muted-foreground">{s.role}</div>
            </div>
            <Button
              variant="outline"
              size="icon-lg"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? <Pause /> : <Play />}
            </Button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {slides.map((slide, i) => (
            <button
              key={slide.name}
              type="button"
              onClick={() => setIndex(i)}
              className="group text-left"
              aria-label={`Show testimonial from ${slide.name}`}
            >
              <div className="h-1 w-full bg-border">
                <div
                  key={i === index ? `${index}-${playing}` : i}
                  className={cn(
                    "h-full bg-foreground",
                    i < index && "w-full",
                    i > index && "w-0",
                    i === index && !playing && "w-full"
                  )}
                  style={
                    i === index && playing
                      ? { animation: `t18-progress ${DURATION}ms linear forwards` }
                      : undefined
                  }
                />
              </div>
              <div
                className={cn(
                  "mt-3 truncate text-xs transition-colors",
                  i === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {slide.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
