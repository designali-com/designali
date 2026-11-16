import {
  ArrowUpRight,
} from "@designali/icons"

const offices = [
  {
    city: "Montréal",
    role: "Headquarters",
    address: "5455 Av. de Gaspé, Suite 710",
    people: 64,
    tz: "UTC-5",
    tone: "from-primary via-chart-1 to-primary/20 dark:from-chart-2/60 dark:via-primary/40 dark:to-primary/30",
  },
  {
    city: "Oaxaca",
    role: "Design studio",
    address: "Calle de Macedonio Alcalá 403",
    people: 18,
    tz: "UTC-6",
    tone: "from-primary via-chart-1 to-primary/20 dark:from-chart-2/60 dark:via-primary/40 dark:to-primary/30",
  },
  {
    city: "Tallinn",
    role: "Engineering hub",
    address: "Telliskivi 60a, Building C",
    people: 37,
    tz: "UTC+2",
    tone: "from-primary via-chart-1 to-muted dark:from-chart-2/60 dark:via-primary/40 dark:to-muted-foreground/30",
  },
]

export default function Sections15() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Where we work</h2>
          <p className="text-sm text-muted-foreground">
            3 studios, 119 people, and 41 more working fully remote.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <a key={office.city} href="#" className="group block">
              <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${office.tone}`}>
                <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full text-foreground/15" aria-hidden>
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M0 180 L60 150 L110 170 L200 120" />
                    <path d="M0 200 L70 175 L130 195 L200 150" />
                    <path d="M40 0 L55 250" />
                    <path d="M140 0 L120 250" />
                  </g>
                  <circle cx="98" cy="118" r="6" className="fill-foreground/70" />
                  <circle cx="98" cy="118" r="18" className="fill-foreground/10" />
                </svg>
                <span className="absolute top-4 left-4 bg-background/80 px-2 py-1 font-sans text-[10px] tracking-wider uppercase backdrop-blur">
                  {office.tz}
                </span>
                <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-background transition-transform group-hover:-translate-y-1">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{office.city}</h3>
                  <p className="text-sm text-muted-foreground">{office.role}</p>
                </div>
                <p className="text-right text-sm">
                  {office.people}
                  <span className="block text-xs text-muted-foreground">people</span>
                </p>
              </div>
              <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">{office.address}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
