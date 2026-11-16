import {
  ArrowRight,
} from "@designali/icons"

const locations = [
  {
    city: "Americas",
    country: "Remote · async",
    address: "Brand identity and web projects",
    team: 42,
    gradient: "from-chart-1/40 to-chart-1/5",
  },
  {
    city: "Europe",
    country: "Remote · async",
    address: "UI/UX and design systems",
    team: 18,
    gradient: "from-chart-2/40 to-chart-2/5",
  },
  {
    city: "Middle East",
    country: "Remote · async",
    address: "Next.js websites and products",
    team: 27,
    gradient: "from-chart-3/40 to-chart-3/5",
  },
  {
    city: "Asia Pacific",
    country: "Remote · async",
    address: "CGI, 3D and motion",
    team: 15,
    gradient: "from-chart-4/40 to-chart-4/5",
  },
]

export default function Location02() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Where our clients are
          </h2>
          <p className="max-w-md text-muted-foreground">
            Designali is a remote studio working with clients worldwide. Reach
            us anytime at hello@designali.com.
          </p>
        </div>
        <div className="grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <a
              key={location.city}
              href="#"
              className="group flex flex-col bg-background"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${location.gradient}`}
              >
                <span className="absolute start-4 bottom-4 text-6xl font-semibold tracking-tighter text-foreground/15">
                  {location.city.slice(0, 3).toUpperCase()}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 border-t p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{location.city}</h3>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {location.country}
                </p>
                <p className="mt-4 text-sm">{location.address}</p>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">
                  {location.team} projects delivered
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
