import { HardDriveIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const segments = [
  { label: "Documents", gb: 18.4, className: "bg-sky-500" },
  { label: "Photos", gb: 31.2, className: "bg-violet-500" },
  { label: "Videos", gb: 22.7, className: "bg-amber-500" },
  { label: "Other", gb: 6.1, className: "bg-zinc-400" },
]
const total = 100

export default function StorageUsageCard() {
  const used = segments.reduce((s, x) => s + x.gb, 0)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HardDriveIcon className="size-4 text-muted-foreground" />
          Storage
        </CardTitle>
        <CardDescription>
          {used.toFixed(1)} GB of {total} GB used
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex h-2 w-full overflow-hidden bg-muted">
          {segments.map((s) => (
            <div
              key={s.label}
              className={s.className}
              style={{ width: (s.gb / total) * 100 + "%" }}
            />
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center gap-2">
              <span className={cn("size-2", s.className)} />
              <span className="flex-1">{s.label}</span>
              <span className="text-muted-foreground tabular-nums">
                {s.gb} GB
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">
          {(total - used).toFixed(1)} GB free
        </span>
        <Button size="sm" variant="outline">
          Get 2 TB
        </Button>
      </CardFooter>
    </Card>
  )
}
