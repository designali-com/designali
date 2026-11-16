import {
  HardDrive as HardDriveIcon,
} from "@designali/icons"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const breakdown = [
  { label: "Templates", size: "3.1 GB", className: "bg-primary" },
  { label: "CGI renders", size: "2.8 GB", className: "bg-primary/60" },
  { label: "Figma files", size: "1.5 GB", className: "bg-primary/30" },
]

export default function StorageUsageMeter() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <HardDriveIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Storage</span>
        <span className="ms-auto text-xs text-muted-foreground">Designali studio</span>
      </div>
      <Progress value={74} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm">7.4 GB of 10 GB used</ProgressLabel>
        <ProgressValue />
      </Progress>
      <ul className="flex flex-col gap-1.5 text-xs">
        {breakdown.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className={cn("size-2", item.className)} />
            <span className="text-muted-foreground">{item.label}</span>
            <span className="ms-auto tabular-nums">{item.size}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
