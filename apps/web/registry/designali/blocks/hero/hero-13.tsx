import { ArrowRight, CircleDot, FileText, Folder, Hash, Search } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const sidebar = [
  { icon: Folder, label: "Roadmap", active: true },
  { icon: FileText, label: "Specs" },
  { icon: Hash, label: "Design reviews" },
  { icon: CircleDot, label: "Bugs" },
]

const rows = [
  { id: "PLN-412", title: "Offline mode for field reports", status: "In progress", owner: "DK", width: "w-3/4" },
  { id: "PLN-409", title: "SSO with SCIM provisioning", status: "Review", owner: "AL", width: "w-1/2" },
  { id: "PLN-398", title: "Bulk edit for custom fields", status: "Planned", owner: "MS", width: "w-1/4" },
  { id: "PLN-391", title: "Audit log export to S3", status: "Done", owner: "TR", width: "w-full" },
]

export default function Hero13() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 pt-16 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <span className="font-medium text-foreground">Plinth 3.0</span>
          Rebuilt from scratch, 4x faster
          <ArrowRight className="size-3" />
        </a>
        <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
          Plan the roadmap where the work happens.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Specs, issues and releases in one keyboard-first workspace. Built
          for product teams who would rather ship than update status pages.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button size="lg" nativeButton={false} render={<a href="#" />}>
            Get started
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
            See the changelog
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl">
        <div
          aria-hidden
          className="absolute -inset-x-10 -top-10 bottom-0 bg-gradient-to-b from-chart-2/20 via-chart-1/10 to-transparent blur-2xl"
        />
        <div className="relative border border-b-0 border-border bg-card shadow-xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
            <div className="mx-auto flex w-full max-w-xs items-center gap-2 bg-muted px-3 py-1 text-xs text-muted-foreground">
              <Search className="size-3" />
              app.plinth.so/roadmap
            </div>
          </div>
          <div className="grid md:grid-cols-[200px_1fr]">
            <aside className="hidden border-e border-border p-3 md:block">
              <p className="px-2 py-1 text-xs font-medium">Northbeam Inc.</p>
              <ul className="mt-3 space-y-0.5 text-sm">
                {sidebar.map((item) => (
                  <li
                    key={item.label}
                    className={
                      item.active
                        ? "flex items-center gap-2 bg-muted px-2 py-1.5"
                        : "flex items-center gap-2 px-2 py-1.5 text-muted-foreground"
                    }
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </aside>
            <div className="min-w-0">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-sm font-medium">Q3 Roadmap</p>
                <span className="text-xs text-muted-foreground">24 items</span>
              </div>
              <ul>
                {rows.map((row) => (
                  <li
                    key={row.id}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border px-4 py-3 text-sm last:border-b-0 sm:grid-cols-[70px_1fr_110px_120px_32px]"
                  >
                    <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                      {row.id}
                    </span>
                    <span className="truncate">{row.title}</span>
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {row.status}
                    </span>
                    <span className="hidden h-1.5 bg-muted sm:block">
                      <span className={`block h-full bg-primary ${row.width}`} />
                    </span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
                      {row.owner}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
