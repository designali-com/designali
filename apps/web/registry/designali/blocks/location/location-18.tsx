import { Accessibility, ArrowUpRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const branches = [
  { city: "Glasgow", area: "Merchant City", address: "41 Ingram St, G1 1EJ", phone: "0141 555 0170", hours: "08:00-18:00", status: "Open", access: true },
  { city: "Glasgow", area: "West End", address: "312 Byres Rd, G12 8UJ", phone: "0141 555 0193", hours: "09:00-17:30", status: "Open", access: true },
  { city: "Edinburgh", area: "Leith", address: "18 The Shore, EH6 6QW", phone: "0131 555 0124", hours: "08:30-18:00", status: "Open", access: false },
  { city: "Edinburgh", area: "Old Town", address: "77 Cockburn St, EH1 1BS", phone: "0131 555 0158", hours: "10:00-16:00", status: "Reduced hours", access: true },
  { city: "Aberdeen", area: "Union Street", address: "205 Union St, AB11 6BB", phone: "01224 555 011", hours: "09:00-17:00", status: "Open", access: true },
  { city: "Dundee", area: "Waterfront", address: "3 Riverside Dr, DD1 4XA", phone: "01382 555 046", hours: "-", status: "Opening Jan", access: true },
  { city: "Inverness", area: "Eastgate", address: "9 Academy St, IV1 1JN", phone: "01463 555 092", hours: "09:00-17:00", status: "Open", access: false },
]

export default function Location18() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Branch directory
            </h2>
            <p className="mt-3 text-muted-foreground">
              Thistle Mutual &middot; {branches.length} branches across Scotland
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
                <th>Branch</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Today</th>
                <th>Status</th>
                <th className="text-center">
                  <Accessibility className="mx-auto size-4" aria-label="Step-free access" />
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
