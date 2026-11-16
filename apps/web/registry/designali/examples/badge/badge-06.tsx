import {
  Clock as ClockIcon,
  CreditCard as CreditCardIcon,
  PackageCheck as PackageCheckIcon,
  Palette as PaletteIcon,
  Undo2 as Undo2Icon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const statuses = [
  {
    label: "Pending",
    icon: ClockIcon,
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "Paid",
    icon: CreditCardIcon,
    className: "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "In design",
    icon: PaletteIcon,
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "Delivered",
    icon: PackageCheckIcon,
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "Refunded",
    icon: Undo2Icon,
    className: "bg-muted text-muted-foreground",
  },
]

export default function OrderStatusBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {statuses.map((status) => (
        <Badge key={status.label} className={status.className}>
          <status.icon data-icon="inline-start" />
          {status.label}
        </Badge>
      ))}
    </div>
  )
}
