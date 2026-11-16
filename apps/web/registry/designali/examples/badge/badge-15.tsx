import {
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalMedium as SignalMediumIcon,
  Siren as SirenIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const priorities = [
  { label: "Urgent", icon: SirenIcon, className: "bg-red-600 text-white" },
  {
    label: "High",
    icon: SignalHighIcon,
    className:
      "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  },
  {
    label: "Medium",
    icon: SignalMediumIcon,
    className:
      "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
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
