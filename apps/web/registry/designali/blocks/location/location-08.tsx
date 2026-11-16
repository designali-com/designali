"use client"

import { useState } from "react"
import {
  Clock,
  Mail,
  MapPin,
  Video,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const cities = [
  {
    id: "americas",
    city: "Americas",
    venue: "Remote studio",
    area: "Async across UTC−8 to UTC−3",
    hours: "Mon-Fri, 9:00-18:00 local",
    transit: "Video calls on your schedule",
    parking: "hello@designali.com",
    pin: { x: 38, y: 58 },
    river: "M0 78 C 30 70, 60 86, 100 74",
  },
  {
    id: "europe",
    city: "Europe",
    venue: "Remote studio",
    area: "Live across UTC to UTC+3",
    hours: "Mon-Fri, 9:00-18:00 local",
    transit: "Weekly design reviews",
    parking: "hello@designali.com",
    pin: { x: 56, y: 40 },
    river: "M0 66 C 25 60, 55 72, 100 60",
  },
  {
    id: "asia",
    city: "Asia",
    venue: "Remote studio",
    area: "Live across UTC+4 to UTC+9",
    hours: "Mon-Sat, 10:00-19:00 local",
    transit: "Daily async updates",
    parking: "ali@designali.com",
    pin: { x: 64, y: 48 },
    river: "M10 100 C 20 80, 8 60, 18 40",
  },
]

export default function Location08() {
  const [active, setActive] = useState(cities[0]!.id)
  const city = cities.find((c) => c.id === active) ?? cities[0]!

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Work with Designali
          </h2>
          <div className="flex border" role="tablist">
            {cities.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "h-10 flex-1 px-5 text-sm transition-colors not-last:border-e",
                  active === c.id ? "bg-foreground text-background" : "hover:bg-muted"
                )}
              >
                {c.city}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid border md:grid-cols-[1.5fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden border-b bg-muted md:aspect-auto md:min-h-[440px] md:border-e md:border-b-0">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
              <g className="stroke-background" strokeWidth="1.2" fill="none">
                {[12, 28, 46, 62, 80, 94].map((v) => (
                  <path key={`v${v}`} d={`M${v} 0 L${v + 4} 100`} />
                ))}
                {[10, 24, 38, 52, 66, 84].map((h) => (
                  <path key={`h${h}`} d={`M0 ${h} L100 ${h - 3}`} />
                ))}
              </g>
              <path
                d={city.river}
                className="stroke-chart-1 transition-all duration-500 dark:stroke-chart-4"
                strokeWidth="7"
                fill="none"
              />
            </svg>
            <span
              className="absolute flex -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ left: `${city.pin.x}%`, top: `${city.pin.y}%` }}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
              <span className="relative flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                <MapPin className="size-4" />
              </span>
            </span>
          </div>

          <div key={city.id} className="flex flex-col p-8 animate-in fade-in">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              {city.city}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{city.venue}</p>
            <p className="text-muted-foreground">{city.area}</p>
            <dl className="mt-8 space-y-5 text-sm">
              {[
                { icon: Clock, label: "Hours", value: city.hours },
                { icon: Video, label: "Calls", value: city.transit },
                { icon: Mail, label: "Email", value: city.parking },
              ].map((row) => (
                <div key={row.label} className="flex gap-3">
                  <row.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <dt className="text-xs text-muted-foreground">{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <a href="/contact" className="mt-auto pt-8 text-sm font-medium underline underline-offset-4">
              Book a call for {city.city}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
