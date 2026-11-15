import { ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

function Compass() {
  return (
    <svg viewBox="0 0 200 200" className="h-auto w-full max-w-xs" aria-hidden>
      <circle cx="100" cy="100" r="96" className="fill-none stroke-background/25" />
      <circle cx="100" cy="100" r="70" className="fill-none stroke-background/15" />
      {Array.from({ length: 72 }).map((_, i) => {
        const a = (i * 5 * Math.PI) / 180
        const long = i % 18 === 0
        const r1 = long ? 80 : 88
        return (
          <line
            key={i}
            x1={100 + Math.sin(a) * r1}
            y1={100 - Math.cos(a) * r1}
            x2={100 + Math.sin(a) * 96}
            y2={100 - Math.cos(a) * 96}
            className={long ? "stroke-background" : "stroke-background/40"}
            strokeWidth={long ? 2 : 1}
          />
        )
      })}
      <g transform="rotate(32 100 100)">
        <path d="M100 34 L110 100 L100 92 L90 100 Z" className="fill-orange-500" />
        <path d="M100 166 L110 100 L100 108 L90 100 Z" className="fill-background/40" />
      </g>
      <circle cx="100" cy="100" r="4" className="fill-background" />
      {[
        ["N", 100, 22],
        ["E", 180, 104],
        ["S", 100, 186],
        ["W", 20, 104],
      ].map(([l, x, y]) => (
        <text key={l as string} x={x} y={y} textAnchor="middle" className="fill-background/70 text-[10px] font-medium">
          {l}
        </text>
      ))}
    </svg>
  )
}

export default function Location16() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-xs tracking-widest text-background/60 uppercase">
            Base camp &middot; Refugio Altavista
          </p>
          <p className="mt-6 font-mono text-5xl leading-none font-light tracking-tighter sm:text-6xl md:text-8xl">
            28.2754&deg; N
            <br />
            16.6386&deg; W
          </p>
          <p className="mt-6 font-mono text-sm text-background/60">
            Elevation 3,260 m &middot; Teide National Park, Tenerife
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-px border border-background/15 bg-background/15 sm:grid-cols-3">
            {[
              ["Trailhead", "Montaña Blanca, km 40"],
              ["Hike in", "3h 30m, 1,100 m gain"],
              ["Check-in", "From 16:00"],
            ].map(([k, v]) => (
              <div key={k} className="bg-foreground p-4 last:col-span-2 sm:last:col-span-1">
                <dt className="text-xs text-background/50">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="secondary" size="lg" nativeButton={false} render={<a href="#" />}>
              Download GPX route
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<a href="#" />}
              className="text-background hover:bg-background/10 hover:text-background"
            >
              Permit information
              <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Compass />
        </div>
      </div>
    </section>
  )
}
