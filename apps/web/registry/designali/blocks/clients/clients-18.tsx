import {
  ArrowUpRight,
} from "@designali/icons"

const clients = [
  {
    name: "Dalim Agency",
    initials: "DA",
    industry: "Brand identity",
    since: "Figma",
    result: "One identity across 7 sub-brands",
  },
  {
    name: "Dalim UI",
    initials: "DU",
    industry: "Design systems",
    since: "React",
    result: "UI kit rebuilt in 9 weeks",
  },
  {
    name: "Dalim Fonts",
    initials: "DF",
    industry: "Web design",
    since: "Next.js",
    result: "Type specimen site, fully responsive",
  },
  {
    name: "Dalim Visuals",
    initials: "DV",
    industry: "CGI, 3D & motion",
    since: "Blender",
    result: "3D product renders and motion reels",
  },
  {
    name: "Designali",
    initials: "DS",
    industry: "Web development",
    since: "Vercel",
    result: "460+ blocks, 4,000+ icons, 2,300+ UI examples",
  },
]

export default function Clients18() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Project roster
          </h2>
          <p className="text-sm leading-6 text-muted-foreground md:text-end">
            A selection of brands and products designed and built by Ali Imam.
          </p>
        </div>
        <div className="mt-10 border-t border-border">
          <div className="hidden grid-cols-[2fr_1fr_0.6fr_2fr_auto] gap-6 border-b border-border py-3 text-xs tracking-widest text-muted-foreground uppercase md:grid">
            <span>Project</span>
            <span>Service</span>
            <span>Stack</span>
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
