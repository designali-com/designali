import {
  CircleCheck as CircleCheckIcon,
  CircleX as CircleXIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const services = [
  { name: "designali.com", status: "Operational" },
  { name: "Templates downloads", status: "Operational" },
  { name: "Icons CDN", status: "Degraded" },
  { name: "hello@designali.com email", status: "Outage" },
]

const config: Record<
  string,
  { className: string; icon: typeof CircleCheckIcon }
> = {
  Operational: {
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    icon: CircleCheckIcon,
  },
  Degraded: {
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    icon: TriangleAlertIcon,
  },
  Outage: {
    className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
    icon: CircleXIcon,
  },
}

export default function ServiceUptimeStatus() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b p-3">
        <span className="text-sm font-semibold">System status</span>
        <Badge variant="outline">Partial outage</Badge>
      </div>
      {services.map((service) => {
        const item = config[service.status]!
        return (
          <div
            key={service.name}
            className="flex items-center justify-between p-3"
          >
            <span className="text-sm">{service.name}</span>
            <Badge className={item.className}>
              <item.icon data-icon="inline-start" />
              {service.status}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}
