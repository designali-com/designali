import {
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalMedium as SignalMediumIcon,
  Siren as SirenIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const priorities = [
  { label: "Urgent", icon: SirenIcon, className: "bg-destructive text-white" },
  {
    label: "High",
    icon: SignalHighIcon,
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "Medium",
    icon: SignalMediumIcon,
    className:
      "bg-primary/5 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    label: "Low",
    icon: SignalLowIcon,
    className: "bg-muted text-muted-foreground",
  },
]

export default function IssuePriorityBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {priorities.map((priority) => (
        <Badge key={priority.label} className={priority.className}>
          <priority.icon data-icon="inline-start" />
          {priority.label}
        </Badge>
      ))}
    </div>
  )
}
