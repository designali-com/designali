import {
  Accessibility,
  ArrowUpRight,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const branches = [
  { city: "Studio", area: "New projects", address: "hello@designali.com", phone: "/contact", hours: "09:00-18:00", status: "Open", access: true },
  { city: "Ali Imam", area: "Founder", address: "ali@designali.com", phone: "LinkedIn", hours: "09:00-17:30", status: "Open", access: true },
  { city: "Support", area: "Templates and blocks", address: "support@designali.com", phone: "/docs", hours: "08:30-18:00", status: "Open", access: true },
  { city: "Billing", area: "Plans and invoices", address: "billing@designali.com", phone: "/pricing", hours: "10:00-16:00", status: "Reduced hours", access: true },
  { city: "Social", area: "X", address: "@designali_com", phone: "x.com/designali_com", hours: "09:00-17:00", status: "Open", access: true },
  { city: "Live", area: "Workshops", address: "events@designali.com", phone: "/blogs", hours: "-", status: "Opening Jan", access: true },
  { city: "Social", area: "Instagram", address: "@designali.code", phone: "instagram.com/designali.code", hours: "09:00-17:00", status: "Open", access: false },
]

export default function Location18() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Contact directory
            </h2>
            <p className="mt-3 text-muted-foreground">
              Designali &middot; {branches.length} ways to reach the studio, remote worldwide
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
            Download as CSV <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 max-h-[520px] overflow-auto border">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="sticky top-0 z-10 bg-muted text-xs text-muted-foreground">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-start [&>th]:font-medium">
                <th>Team</th>
                <th>Contact</th>
                <th>Link</th>
                <th>Today</th>
                <th>Status</th>
                <th className="text-center">
                  <Accessibility className="mx-auto size-4" aria-label="Accessible support" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {branches.map((b) => (
                <tr key={b.address} className="transition-colors hover:bg-muted/40 [&>td]:px-4 [&>td]:py-3.5">
                  <td>
                    <span className="block font-medium">{b.city}</span>
                    <span className="block text-xs text-muted-foreground">{b.area}</span>
                  </td>
                  <td className="text-muted-foreground">{b.address}</td>
                  <td className="tabular-nums">
                    <a href="#" className="hover:underline">{b.phone}</a>
                  </td>
                  <td className="tabular-nums">{b.hours}</td>
                  <td>
                    <Badge
                      variant={b.status === "Open" ? "secondary" : "outline"}
                      className={
                        b.status === "Open"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          : undefined
                      }
                    >
                      {b.status}
                    </Badge>
                  </td>
                  <td className="text-center">
                    {b.access ? (
                      <span className="text-emerald-700 dark:text-emerald-400">Yes</span>
                    ) : (
                      <span className="text-muted-foreground">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
