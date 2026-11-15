import { ArrowUpRight } from "lucide-react"

const rows = [
  { client: "Juniper Health", project: "Clinician scheduling", type: "Product", role: "Lead", year: "2026", outcome: "-31% no-shows" },
  { client: "Oxbow Coffee", project: "Subscription relaunch", type: "E-commerce", role: "Design + build", year: "2026", outcome: "4,200 subscribers" },
  { client: "Stillwater Press", project: "Editorial identity", type: "Brand", role: "Art direction", year: "2025", outcome: "D&AD shortlist" },
  { client: "Fathom Robotics", project: "Operator console", type: "Product", role: "Lead", year: "2025", outcome: "2x task speed" },
  { client: "Wren & Finch", project: "Lookbook site", type: "Web", role: "Design", year: "2025", outcome: "+22% conversion" },
  { client: "Cobalt Energy", project: "Annual report", type: "Print", role: "Design", year: "2024", outcome: "Printed 12,000" },
  { client: "Meadowlark", project: "Kids reading app", type: "Product", role: "UX research", year: "2024", outcome: "4.8 App rating" },
]

export default function Portfolio11() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Project index</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {rows.length} selected projects. Full archive available on request.
            </p>
          </div>
          <a href="#" className="text-sm underline underline-offset-4">
            Download PDF portfolio
          </a>
        </div>

        <div className="mt-10 border-t border-foreground">
          <div className="hidden grid-cols-[1.3fr_1.5fr_1fr_1fr_0.6fr_1.2fr_24px] gap-4 border-b border-border py-3 text-xs tracking-wide text-muted-foreground uppercase md:grid">
            <span>Client</span>
            <span>Project</span>
            <span>Discipline</span>
            <span>Role</span>
            <span>Year</span>
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
              <span className="font-mono text-xs text-muted-foreground md:hidden">{row.year}</span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1 md:text-foreground">
                {row.project}
              </span>
              <span className="hidden text-sm text-muted-foreground md:block">{row.type}</span>
              <span className="hidden text-sm text-muted-foreground md:block">{row.role}</span>
              <span className="hidden font-mono text-xs text-muted-foreground md:block">{row.year}</span>
              <span className="col-span-2 text-sm md:col-span-1">
                <span className="bg-emerald-500/10 px-1.5 py-0.5 text-emerald-700 dark:text-emerald-400">
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
