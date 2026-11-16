import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const segments = [
  { label: "Templates", size: 18.4, files: 2310, color: "bg-blue-500" },
  { label: "Brand assets", size: 31.2, files: 840, color: "bg-violet-500" },
  { label: "Backups", size: 12.0, files: 14, color: "bg-amber-500" },
]
const capacity = 100

export default function StorageBreakdownHoverCard() {
  const used = segments.reduce((sum, s) => sum + s.size, 0)

  return (
    <div className="w-full max-w-sm">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">Storage</span>
        <span className="text-muted-foreground">
          {used.toFixed(1)} GB of {capacity} GB
        </span>
      </div>
      <div className="flex h-3 w-full bg-muted">
        {segments.map((s) => (
          <HoverCard key={s.label}>
            <HoverCardTrigger
              delay={0}
              closeDelay={0}
              render={
                <div
                  className={cn("h-full cursor-default", s.color)}
                  style={{ width: (s.size / capacity) * 100 + "%" }}
                />
              }
            />
            <HoverCardContent side="top" className="w-44">
              <div className="flex items-center gap-2 font-medium">
                <span className={cn("size-2", s.color)} />
                {s.label}
              </div>
              <p className="text-muted-foreground">
                {s.size} GB · {s.files.toLocaleString()} files
              </p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
