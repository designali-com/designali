import {
  Activity,
  BookOpen,
  CodeXml as Code2,
  GitCommitHorizontal,
  Rss,
  Terminal,
} from "@designali/icons"

const columns = [
  { title: "Build", icon: Code2, links: ["Quickstart", "Blocks", "Templates", "Components"] },
  { title: "Reference", icon: BookOpen, links: ["@designali/icons", "@designali/logos", "@designali/vectors", "Theming"] },
  { title: "Stay current", icon: Rss, links: ["Blogs", "New blocks", "Instagram", "X"] },
]

const services = [
  { name: "designali.com", uptime: "99.99%", ok: true },
  { name: "Docs", uptime: "99.98%", ok: true },
  { name: "Downloads", uptime: "99.94%", ok: false },
]

export default function Footer17() {
  return (
    <footer className="w-full border-t bg-background font-sans">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Terminal className="size-4" />
            designali
          </p>
          <div className="mt-6 border bg-muted/40 p-4 text-xs leading-6">
            <p className="text-muted-foreground"># install the icons</p>
            <p className="truncate">
              <span className="text-muted-foreground">$</span> npm install @designali/icons
            </p>
          </div>
          <div className="mt-6 border">
            <div className="flex items-center justify-between border-b px-4 py-2.5 text-xs">
              <span className="flex items-center gap-2">
                <Activity className="size-3.5" />
                System status
              </span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                www.designali.com
              </a>
            </div>
            <ul className="text-xs">
              {services.map((service) => (
                <li key={service.name} className="flex items-center justify-between border-b px-4 py-2.5 last:border-b-0">
                  <span className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${service.ok ? "bg-primary" : "bg-primary"}`} />
                    {service.name}
                  </span>
                  <span className="text-muted-foreground">
                    {service.ok ? "operational" : "degraded"} / {service.uptime}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <column.icon className="size-3.5" />
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Designali / Design se code tak</p>
          <p className="flex items-center gap-1.5">
            <GitCommitHorizontal className="size-3.5" />
            registry v2026-11 / 460+ blocks
          </p>
        </div>
      </div>
    </footer>
  )
}
