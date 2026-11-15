import { ArrowUpRight } from "lucide-react"

const clients = [
  {
    name: "Halcyon",
    initials: "HA",
    industry: "Insurance",
    since: "2021",
    result: "Unified 7 brands on one token set",
  },
  {
    name: "Parallax Freight",
    initials: "PF",
    industry: "Logistics",
    since: "2022",
    result: "Dispatch app rebuilt in 9 weeks",
  },
  {
    name: "Mosswood",
    initials: "MW",
    industry: "Retail",
    since: "2022",
    result: "+18% mobile checkout conversion",
  },
  {
    name: "Helix Bio",
    initials: "HB",
    industry: "Life sciences",
    since: "2023",
    result: "WCAG 2.2 AA across 40 lab tools",
  },
  {
    name: "Stackway",
    initials: "SW",
    industry: "Developer tools",
    since: "2024",
    result: "Docs site load time down 41%",
  },
]

export default function Clients18() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Client roster
          </h2>
          <p className="text-sm leading-6 text-muted-foreground md:text-end">
            A selection of long-term partners. Full list available under NDA.
          </p>
        </div>
        <div className="mt-10 border-t border-border">
          <div className="hidden grid-cols-[2fr_1fr_0.6fr_2fr_auto] gap-6 border-b border-border py-3 text-xs tracking-widest text-muted-foreground uppercase md:grid">
            <span>Client</span>
            <span>Industry</span>
            <span>Since</span>
            <span>Result</span>
            <span className="w-4" />
          </div>
          <ul>
            {clients.map((client) => (
              <li key={client.name}>
                <a
                  href="#"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-border py-5 transition-colors hover:bg-muted/50 md:grid-cols-[2fr_1fr_0.6fr_2fr_auto] md:gap-6 md:px-2"
                >
                  <span className="row-span-2 flex items-center gap-3 md:row-span-1">
                    <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted text-xs font-semibold">
                      {client.initials}
                    </span>
                    <span className="hidden text-base font-medium md:inline">
                      {client.name}
                    </span>
                  </span>
                  <span className="text-base font-medium md:hidden">
                    {client.name}
                  </span>
                  <span className="hidden text-sm text-muted-foreground md:inline">
                    {client.industry}
                  </span>
                  <span className="hidden font-mono text-sm text-muted-foreground md:inline">
                    {client.since}
                  </span>
                  <span className="col-start-2 row-start-2 text-sm text-muted-foreground md:col-auto md:row-auto md:text-foreground">
                    {client.result}
                  </span>
                  <ArrowUpRight className="col-start-3 row-span-2 row-start-1 size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground md:col-auto md:row-auto" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
