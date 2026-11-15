import {
  ClockIcon,
  CreditCardIcon,
  PackageCheckIcon,
  TruckIcon,
  Undo2Icon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const statuses = [
  {
    label: "Pending",
    icon: ClockIcon,
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    label: "Paid",
    icon: CreditCardIcon,
    className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    label: "Shipped",
    icon: TruckIcon,
    className:
      "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    label: "Delivered",
    icon: PackageCheckIcon,
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
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
