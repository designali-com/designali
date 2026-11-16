import {
  CircleCheck as CircleCheckIcon,
  OctagonAlert as OctagonAlertIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const statuses = [
  {
    label: "Healthy",
    value: 42,
    icon: CircleCheckIcon,
    tone: "text-primary dark:text-primary",
    bar: "[&_[data-slot=progress-indicator]]:bg-primary",
  },
  {
    label: "Warning",
    value: 78,
    icon: TriangleAlertIcon,
    tone: "text-primary dark:text-primary",
    bar: "[&_[data-slot=progress-indicator]]:bg-primary",
  },
  {
    label: "Critical",
    value: 96,
    icon: OctagonAlertIcon,
    tone: "text-destructive",
    bar: "[&_[data-slot=progress-indicator]]:bg-destructive",
  },
]

export default function ProgressStatusTones() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {statuses.map((status) => (
        <Progress
          key={status.label}
          value={status.value}
          className={cn("[&_[data-slot=progress-track]]:h-1.5", status.bar)}
        >
          <ProgressLabel
            className={cn("flex items-center gap-1.5", status.tone)}
          >
            <status.icon className="size-3.5" />
            {status.label}
          </ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}
