import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const hours = [
  { day: "Monday – Friday", time: "7:00 – 18:00" },
  { day: "Saturday", time: "8:00 – 16:00" },
  { day: "Sunday", time: "Closed" },
]

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full text-border"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="600" height="400" className="fill-muted" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52 + 40} y2="400" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="600" y2={i * 48 - 20} />
        ))}
      </g>
      <path
        d="M0 260 C 120 220, 220 300, 330 240 S 520 160, 600 190"
        className="stroke-foreground/25"
        strokeWidth="14"
        fill="none"
      />
      <rect x="380" y="70" width="120" height="70" className="fill-chart-2/30" />
    </svg>
  )
}

export default function Location01() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl border md:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-8 p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Visit the roastery
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Common Ground Coffee
            </h2>
          </div>
          <div className="space-y-4 text-sm">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              1180 Mission Street, Portland, OR 97209
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              (503) 555-0174
            </p>
          </div>
          <div className="border-t pt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Clock className="size-4" />
              Opening hours
            </p>
            <dl className="space-y-2 text-sm">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between">
                  <dt className="text-muted-foreground">{row.day}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Button size="lg" className="mt-auto w-full">
            Get directions
            <ArrowUpRight />
          </Button>
        </div>
        <div className="relative min-h-80 border-t md:border-t-0 md:border-s">
          <MapIllustration />
          <div className="absolute top-[38%] left-[52%] flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <span className="bg-foreground px-3 py-1.5 text-xs font-medium text-background">
              Common Ground
            </span>
            <span className="h-6 w-px bg-foreground" />
            <span className="size-3 rounded-full border-2 border-background bg-foreground ring-4 ring-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
