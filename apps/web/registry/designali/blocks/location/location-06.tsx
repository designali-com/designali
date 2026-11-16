import {
  Clock,
  MapPin,
  Mail,
  Navigation,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

function CityMap() {
  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <rect width="1200" height="640" className="fill-muted" />
      <path
        d="M0 470 C 180 430, 260 520, 420 500 S 700 420, 860 470 S 1100 560, 1200 520 L1200 640 L0 640 Z"
        className="fill-sky-200/70 dark:fill-sky-900/40"
      />
      <rect x="120" y="80" width="220" height="150" className="fill-emerald-200/70 dark:fill-emerald-900/40" />
      <rect x="880" y="120" width="180" height="120" className="fill-emerald-200/70 dark:fill-emerald-900/40" />
      <g className="stroke-background" strokeWidth="10" fill="none" strokeLinecap="round">
        <path d="M0 300 L1200 260" />
        <path d="M0 140 L1200 110" />
        <path d="M380 0 L420 640" />
        <path d="M760 0 L720 640" />
        <path d="M100 0 L60 460" />
        <path d="M1040 0 L1080 470" />
      </g>
      <g className="stroke-background" strokeWidth="4" fill="none">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M${i * 90} 0 L${i * 90 + 30} 460`} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={`h${i}`} d={`M0 ${i * 60 + 20} L1200 ${i * 60 - 10}`} />
        ))}
      </g>
      <path
        d="M0 300 L1200 260"
        className="stroke-amber-300 dark:stroke-amber-600/70"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  )
}

export default function Location06() {
  return (
    <section className="relative w-full overflow-hidden bg-muted">
      <div className="relative h-[680px] md:h-[600px]">
        <CityMap />
        <div
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: "62%", top: "45%" }}
        >
          <span className="flex flex-col items-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-8 ring-primary/20">
              <MapPin className="size-5" />
            </span>
            <span className="h-4 w-0.5 bg-primary" />
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:pb-0">
          <div className="w-full max-w-sm border bg-background p-6 shadow-xl md:p-8">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              The studio
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Designali, design se code tak
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                Remote · Worldwide
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                Mon&ndash;Fri 9&ndash;18 &middot; async across time zones
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                hello@designali.com
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              <Button nativeButton={false} render={<a href="/contact" />} className="flex-1">
                <Navigation />
                Book a call
              </Button>
              <Button variant="outline" nativeButton={false} render={<a href="mailto:hello@designali.com" />} className="flex-1">
                Email us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
