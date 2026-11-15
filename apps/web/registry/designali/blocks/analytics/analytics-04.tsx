import { Download } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const pages = [
  { path: "/pricing", views: 48210, bounce: 32, time: "2m 41s" },
  { path: "/blog/design-tokens-at-scale", views: 31877, bounce: 41, time: "4m 12s" },
  { path: "/templates", views: 27304, bounce: 28, time: "3m 05s" },
  { path: "/docs/getting-started", views: 19982, bounce: 22, time: "5m 37s" },
  { path: "/changelog", views: 12450, bounce: 47, time: "1m 58s" },
  { path: "/about", views: 8761, bounce: 55, time: "1m 12s" },
]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const heat = [
  [2, 3, 5, 7, 6, 4],
  [3, 4, 6, 8, 7, 5],
  [3, 5, 7, 9, 8, 5],
  [2, 4, 6, 8, 9, 6],
  [2, 3, 5, 6, 5, 3],
  [1, 2, 2, 3, 3, 2],
  [1, 1, 2, 3, 2, 2],
]
const slots = ["00", "04", "08", "12", "16", "20"]

export default function Analytics04() {
  const maxViews = pages[0]?.views ?? 1

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Content report</h2>
            <p className="text-sm text-muted-foreground">
              Top pages and visit patterns for November 1 – 14
            </p>
          </div>
          <Button variant="outline" size="md">
            <Download />
            Export CSV
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="overflow-x-auto lg:col-span-3">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="py-3 font-normal">Page</th>
                  <th className="py-3 text-right font-normal">Views</th>
                  <th className="py-3 text-right font-normal">Bounce</th>
                  <th className="py-3 text-right font-normal">Avg. time</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.path} className="border-b border-border">
                    <td className="relative py-3 pr-4">
                      <div
                        className="absolute inset-y-1 left-0 bg-muted"
                        style={{ width: `${(page.views / maxViews) * 100}%` }}
                      />
                      <span className="relative font-mono text-xs">{page.path}</span>
                    </td>
                    <td className="py-3 text-right tabular-nums">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="py-3 text-right tabular-nums text-muted-foreground">
                      {page.bounce}%
                    </td>
                    <td className="py-3 text-right tabular-nums text-muted-foreground">
                      {page.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-sm font-medium">Busiest hours (UTC)</p>
            <div className="grid grid-cols-[auto_repeat(6,1fr)] gap-1 text-[10px] text-muted-foreground">
              <span />
              {slots.map((slot) => (
                <span key={slot} className="text-center">
                  {slot}h
                </span>
              ))}
              {days.map((day, row) => (
                <div key={day} className="contents">
                  <span className="pr-2 leading-8">{day}</span>
                  {heat[row]?.map((level, col) => (
                    <div
                      key={col}
                      className="h-8 bg-primary"
                      style={{ opacity: 0.08 + level * 0.1 }}
                      title={`${day} ${slots[col]}:00 – intensity ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
              Less
              {[1, 3, 5, 7, 9].map((level) => (
                <span
                  key={level}
                  className="size-3 bg-primary"
                  style={{ opacity: 0.08 + level * 0.1 }}
                />
              ))}
              More
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
