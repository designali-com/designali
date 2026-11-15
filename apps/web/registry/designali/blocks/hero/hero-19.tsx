import { ArrowRight, CalendarDays, MapPin, Ticket } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const countdown = [
  { value: "42", label: "Days" },
  { value: "09", label: "Hours" },
  { value: "31", label: "Minutes" },
]

const speakers = [
  { initials: "AO", name: "Ada Obi", topic: "Type systems at scale", color: "from-chart-1 to-chart-2" },
  { initials: "LM", name: "Luca Moretti", topic: "The edge is a lie", color: "from-chart-3 to-chart-4" },
  { initials: "SN", name: "Sun Ning", topic: "Designing for latency", color: "from-chart-5 to-chart-1" },
  { initials: "RK", name: "Rhea Kapoor", topic: "Postgres is enough", color: "from-chart-2 to-chart-5" },
]

export default function Hero19() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4" />
            March 18 to 20, 2027
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" />
            Pier 27, San Francisco and online
          </span>
        </div>

        <h1 className="mt-8 text-5xl leading-[0.95] font-medium tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Frontier
          <span className="block bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
            Conf 27
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl">
            <p className="text-base leading-7 text-muted-foreground">
              Three days, 60 talks and one very long hallway track for people
              who build the web&apos;s infrastructure. Early-bird pricing ends
              when the countdown does.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                <Ticket />
                Get tickets from $349
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
                Browse the agenda
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 border border-border">
            {countdown.map((unit) => (
              <div key={unit.label} className="border-e border-border px-5 py-4 text-center last:border-e-0 sm:px-8">
                <p className="font-mono text-3xl font-medium tabular-nums sm:text-4xl">{unit.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{unit.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {speakers.map((speaker) => (
            <a key={speaker.name} href="#" className="group border border-border p-4 transition-colors hover:bg-muted/50">
              <span
                className={`flex size-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-medium text-white ${speaker.color}`}
              >
                {speaker.initials}
              </span>
              <p className="mt-4 text-sm font-medium">{speaker.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{speaker.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
