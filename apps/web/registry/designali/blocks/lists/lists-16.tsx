import {
  CircleAlert,
  CircleCheck,
} from "@designali/icons"

const services = [
  { name: "designali.com", uptime: 99.99, incidents: [] as number[], degraded: [] as number[] },
  { name: "Blocks registry", uptime: 99.94, incidents: [61], degraded: [12, 62] },
  { name: "Template downloads", uptime: 99.97, incidents: [], degraded: [33, 34] },
  { name: "Image CDN", uptime: 100, incidents: [], degraded: [] },
  { name: "Newsletter", uptime: 99.81, incidents: [78, 79], degraded: [45, 80] },
  { name: "Icon search", uptime: 99.96, incidents: [], degraded: [88] },
]

const days = 90

export default function Lists16() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-4 border border-emerald-600/30 bg-emerald-50 p-5 dark:bg-emerald-500/10">
          <CircleCheck className="size-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h2 className="font-semibold">All Designali systems operational</h2>
            <p className="text-xs text-muted-foreground">Last checked 40 seconds ago</p>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">Uptime</h3>
          <span className="text-xs text-muted-foreground">Last 90 days</span>
        </div>

        <ul className="mt-4 divide-y divide-border border border-border">
          {services.map((service) => (
            <li key={service.name} className="p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  {service.incidents.length > 0 ? (
                    <CircleAlert className="size-4 text-amber-500" />
                  ) : (
                    <CircleCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {service.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{service.uptime.toFixed(2)}%</span>
              </div>
              <div className="mt-3 flex h-8 gap-px">
                {Array.from({ length: days }).map((_, day) => {
                  const tone = service.incidents.includes(day)
                    ? "bg-rose-500"
                    : service.degraded.includes(day)
                      ? "bg-amber-400"
                      : "bg-emerald-500"
                  return (
                    <span
                      key={day}
                      title={`Day ${day + 1}`}
                      className={`min-w-0 flex-1 ${tone} ${day < 45 ? "hidden sm:block" : ""} opacity-90 hover:opacity-100`}
                    />
                  )
                })}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>
                  <span className="sm:hidden">45 days ago</span>
                  <span className="hidden sm:inline">90 days ago</span>
                </span>
                <span>Today</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="size-2 bg-emerald-500" /> Operational</span>
          <span className="inline-flex items-center gap-1.5"><span className="size-2 bg-amber-400" /> Degraded</span>
          <span className="inline-flex items-center gap-1.5"><span className="size-2 bg-rose-500" /> Outage</span>
        </div>
      </div>
    </section>
  )
}
