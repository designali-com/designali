import { HardDriveIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

const breakdown = [
  { label: "Videos", gb: 41.2, color: "bg-violet-500" },
  { label: "Images", gb: 18.6, color: "bg-sky-500" },
  { label: "Documents", gb: 7.9, color: "bg-emerald-500" },
  { label: "Other", gb: 3.1, color: "bg-amber-500" },
]
const LIMIT = 100
const used = breakdown.reduce((sum, b) => sum + b.gb, 0)

export default function StorageUsagePopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <HardDriveIcon data-icon="inline-start" />
        {used.toFixed(1)} / {LIMIT} GB
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Storage</PopoverTitle>
          <PopoverDescription>
            {(LIMIT - used).toFixed(1)} GB left on your plan.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex h-2 w-full overflow-hidden bg-muted">
          {breakdown.map((b) => (
            <span
              key={b.label}
              className={b.color}
              style={{ width: (b.gb / LIMIT) * 100 + "%" }}
            />
          ))}
        </div>
        <ul className="flex flex-col gap-1.5">
          {breakdown.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-xs">
              <span className={cn("size-2", b.color)} />
              <span className="flex-1">{b.label}</span>
              <span className="text-muted-foreground tabular-nums">
                {b.gb} GB
              </span>
            </li>
          ))}
        </ul>
        <Button size="sm" variant="secondary">
          Get more storage
        </Button>
      </PopoverContent>
    </Popover>
  )
}
