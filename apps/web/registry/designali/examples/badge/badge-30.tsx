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
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
    icon: CircleCheckIcon,
  },
  Degraded: {
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
    icon: TriangleAlertIcon,
  },
  Outage: {
    className: "bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive",
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
