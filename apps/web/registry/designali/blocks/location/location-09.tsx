"use client"

import { useState } from "react"
import { Bike, Car, Footprints, TrainFront } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const modes = [
  {
    id: "transit",
    label: "Transit",
    icon: TrainFront,
    time: "18 min",
    detail: "U2 to Senefelderplatz",
    route: "M40 300 L40 220 L180 220 L180 120 L330 120 L330 60 L420 60",
    steps: [
      "Walk 3 min to Alexanderplatz station",
      "Take U2 towards Pankow, 3 stops",
      "Exit Senefelderplatz, walk north 4 min on Kastanienallee",
    ],
  },
  {
    id: "walk",
    label: "Walk",
    icon: Footprints,
    time: "26 min",
    detail: "2.1 km, mostly flat",
    route: "M40 300 C 100 260, 120 200, 200 190 S 300 140, 330 100 S 400 70, 420 60",
    steps: [
      "Head north on Karl-Liebknecht-Strasse",
      "Turn right onto Torstrasse after 900 m",
      "Continue up Kastanienallee to number 44",
    ],
  },
  {
    id: "bike",
    label: "Bike",
    icon: Bike,
    time: "9 min",
    detail: "Protected lane most of the way",
    route: "M40 300 L120 300 L120 160 L300 160 L300 60 L420 60",
    steps: [
      "Dock bikes at Alexanderplatz, Gate C",
      "Ride the protected lane on Rosenthaler Strasse",
      "Bike racks are in our courtyard, code 4402",
    ],
  },
  {
    id: "car",
    label: "Car",
    icon: Car,
    time: "12 min",
    detail: "Parking garage on Schönhauser Allee",
    route: "M40 300 L260 300 L260 200 L420 200 L420 60",
    steps: [
      "Take Grunerstrasse east onto Prenzlauer Allee",
      "Turn left at Schönhauser Allee",
      "Park at Arkaden garage, 2 min walk to us",
    ],
  },
]

export default function Location09() {
  const [mode, setMode] = useState(modes[0]!.id)
  const current = modes.find((m) => m.id === mode) ?? modes[0]!

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Getting here
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            From Alexanderplatz to Studio Nordlicht
          </h2>

          <div className="mt-8 grid grid-cols-4 border">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={mode === m.id}
                className={cn(
                  "flex flex-col items-center gap-1 py-3 text-xs transition-colors not-last:border-e",
                  mode === m.id ? "bg-foreground text-background" : "hover:bg-muted"
                )}
              >
                <m.icon className="size-4" />
                {m.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="text-4xl font-semibold tabular-nums">{current.time}</span>
            <span className="text-sm text-muted-foreground">{current.detail}</span>
          </div>
          <ol className="mt-6 space-y-4 border-s ps-6">
            {current.steps.map((step, index) => (
              <li key={step} className="relative text-sm">
                <span className="absolute -start-[31px] top-0 flex size-3.5 items-center justify-center rounded-full border bg-background text-[8px]" />
                <span className="text-muted-foreground">{index + 1}. </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="border bg-muted/40">
          <svg viewBox="0 0 460 340" className="h-auto w-full" aria-label={`${current.label} route`} role="img">
            <defs>
              <pattern id="location-09-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0 L0 0 0 20" className="stroke-border" fill="none" />
              </pattern>
            </defs>
            <rect width="460" height="340" fill="url(#location-09-grid)" />
            <g className="stroke-background" strokeWidth="12" fill="none">
              <path d="M0 300 H460" />
              <path d="M0 220 H460" />
              <path d="M0 160 H460" />
              <path d="M0 60 H460" />
              <path d="M40 0 V340" />
              <path d="M180 0 V340" />
              <path d="M300 0 V340" />
              <path d="M420 0 V340" />
            </g>
            <rect x="200" y="240" width="80" height="44" className="fill-emerald-200/70 dark:fill-emerald-900/40" />
            <path
              key={current.id}
              d={current.route}
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset="1"
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary [animation:location-09-draw_900ms_ease-out_forwards]"
            />
            <circle cx="40" cy="300" r="8" className="fill-background stroke-foreground" strokeWidth="3" />
            <circle cx="420" cy="60" r="12" className="fill-primary" />
            <circle cx="420" cy="60" r="4" className="fill-primary-foreground" />
            <text x="54" y="322" className="fill-muted-foreground text-[11px]">Alexanderplatz</text>
            <text x="330" y="38" className="fill-foreground text-[11px] font-medium">Kastanienallee 44</text>
          </svg>
          <style>{`@keyframes location-09-draw { to { stroke-dashoffset: 0; } }`}</style>
        </div>
      </div>
    </section>
  )
}
