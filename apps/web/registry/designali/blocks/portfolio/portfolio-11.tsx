import {
  ArrowUpRight,
} from "@designali/icons"

const rows = [
  { client: "Designali", project: "Block library", type: "Product", role: "Design + build", year: "Live", outcome: "460+ blocks" },
  { client: "Designali", project: "Icon library", type: "Product", role: "Icon design", year: "Live", outcome: "4000+ icons" },
  { client: "Dalim Agency", project: "Agency identity", type: "Brand", role: "Art direction", year: "Archive", outcome: "Brand system" },
  { client: "Dalim UI", project: "Component library", type: "Product", role: "UI/UX + code", year: "Archive", outcome: "Became Designali" },
  { client: "Dalim Works", project: "Portfolio site", type: "Web", role: "Design", year: "Archive", outcome: "Next.js build" },
  { client: "Dalim Graphic", project: "Graphic resources", type: "Graphic", role: "Design", year: "Archive", outcome: "Free downloads" },
  { client: "Dalim Fonts", project: "Type foundry site", type: "Web", role: "UX + UI", year: "Archive", outcome: "Custom typefaces" },
]

export default function Portfolio11() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Designali project index</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {rows.length} selected projects. Full archive on designali.com/work.
            </p>
          </div>
          <a href="/work" className="text-sm underline underline-offset-4">
            View all work
          </a>
        </div>

        <div className="mt-10 border-t border-foreground">
          <div className="hidden grid-cols-[1.3fr_1.5fr_1fr_1fr_0.6fr_1.2fr_24px] gap-4 border-b border-border py-3 text-xs tracking-wide text-muted-foreground uppercase md:grid">
            <span>Client</span>
            <span>Project</span>
            <span>Discipline</span>
            <span>Role</span>
            <span>Status</span>
            <span>Outcome</span>
            <span />
          </div>

          {rows.map((row) => (
            <a
              key={row.client}
              href="#"
              className="group grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-border py-4 transition-colors hover:bg-muted/60 md:grid-cols-[1.3fr_1.5fr_1fr_1fr_0.6fr_1.2fr_24px] md:items-center md:gap-4 md:px-0"
            >
              <span className="font-medium">{row.client}</span>
              <span className="font-sans text-xs text-muted-foreground md:hidden">{row.year}</span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1 md:text-foreground">
                {row.project}
              </span>
              <span className="hidden text-sm text-muted-foreground md:block">{row.type}</span>
              <span className="hidden text-sm text-muted-foreground md:block">{row.role}</span>
              <span className="hidden font-sans text-xs text-muted-foreground md:block">{row.year}</span>
              <span className="col-span-2 text-sm md:col-span-1">
                <span className="bg-primary/10 px-1.5 py-0.5 text-chart-3 dark:text-primary">
                  {row.outcome}
                </span>
              </span>
              <ArrowUpRight className="hidden size-4 text-muted-foreground transition-colors group-hover:text-foreground md:block" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
