import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  { label: "Active", dot: "bg-primary" },
  { label: "Paused", dot: "bg-primary" },
  { label: "Archived", dot: "bg-muted-foreground" },
  { label: "Error", dot: "bg-destructive" },
]

export default function StatusDotBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Badge key={item.label} variant="outline">
          <span
            className={cn("size-1.5 rounded-full", item.dot)}
            aria-hidden="true"
          />
          {item.label}
        </Badge>
      ))}
    </div>
  )
}
