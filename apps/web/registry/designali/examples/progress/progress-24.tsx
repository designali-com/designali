import { CpuIcon, HardDriveIcon, MemoryStickIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const resources = [
  { label: "CPU", value: 38, icon: CpuIcon, detail: "8 cores" },
  { label: "Memory", value: 71, icon: MemoryStickIcon, detail: "22.7 / 32 GB" },
  { label: "Disk", value: 89, icon: HardDriveIcon, detail: "445 / 500 GB" },
]

export default function ServerResourceMonitor() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm">api-prod-03</span>
        <Badge variant="outline">
          <span className="size-1.5 bg-emerald-500" />
          Online
        </Badge>
      </div>
      {resources.map((r) => (
        <Progress
          key={r.label}
          value={r.value}
          className={cn(
            "[&_[data-slot=progress-track]]:h-1.5",
            r.value > 85 && "[&_[data-slot=progress-indicator]]:bg-destructive"
          )}
        >
          <ProgressLabel className="flex items-center gap-1.5">
            <r.icon className="size-3.5 text-muted-foreground" />
            {r.label}
            <span className="text-muted-foreground">{r.detail}</span>
          </ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}
