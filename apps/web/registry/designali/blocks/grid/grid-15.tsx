import { ArrowUpRight } from "lucide-react"

const offices = [
  { city: "Lisbon", country: "Portugal", role: "Headquarters", address: "Rua da Prata 182, 1100-420", people: 64, utc: "UTC+0", x: 46, y: 38 },
  { city: "Montreal", country: "Canada", role: "Engineering", address: "4200 Boul. Saint-Laurent", people: 38, utc: "UTC-5", x: 28, y: 30 },
  { city: "Nairobi", country: "Kenya", role: "Customer success", address: "Westlands Rd, Block C", people: 22, utc: "UTC+3", x: 58, y: 56 },
  { city: "Singapore", country: "Singapore", role: "APAC sales", address: "71 Robinson Road, #14", people: 27, utc: "UTC+8", x: 77, y: 54 },
  { city: "Melbourne", country: "Australia", role: "Design studio", address: "12 Flinders Lane", people: 15, utc: "UTC+11", x: 86, y: 76 },
  { city: "Mexico City", country: "Mexico", role: "Support", address: "Av. Álvaro Obregón 130", people: 19, utc: "UTC-6", x: 22, y: 48 },
]

export default function Grid15() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Offices</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              185 people, six hubs, one shared calendar.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Work from any hub, or from home. Every office has open desks for
              visiting teammates and a kitchen that takes coffee seriously.
            </p>
          </div>

          <div className="relative aspect-[2/1] overflow-hidden border border-border bg-muted/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:14px_14px]" />
            {offices.map((office) => (
              <span
                key={office.city}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${office.x}%`, top: `${office.y}%` }}
              >
                <span className="absolute inset-0 animate-ping bg-foreground/30" />
                <span className="relative block size-2.5 bg-foreground" />
                <span className="absolute top-3 left-1/2 hidden -translate-x-1/2 bg-background px-1.5 py-0.5 text-[10px] whitespace-nowrap shadow-sm sm:block">
                  {office.city}
                </span>
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <li key={office.city}>
              <a href="#" className="group flex h-full flex-col gap-6 bg-background p-6 transition-colors hover:bg-muted/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <dl className="grid grid-cols-3 gap-4 border-t border-border pt-4 text-xs">
                  <div>
                    <dt className="text-muted-foreground">Team</dt>
                    <dd className="mt-1 font-medium">{office.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">People</dt>
                    <dd className="mt-1 font-mono">{office.people}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Time</dt>
                    <dd className="mt-1 font-mono">{office.utc}</dd>
                  </div>
                </dl>
                <p className="text-xs text-muted-foreground">{office.address}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
