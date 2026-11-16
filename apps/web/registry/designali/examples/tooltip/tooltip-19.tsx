import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const segments = [
  { label: "Photos", gb: 42, className: "bg-primary" },
  { label: "Videos", gb: 28, className: "bg-primary" },
  { label: "Documents", gb: 9, className: "bg-primary" },
  { label: "Backups", gb: 14, className: "bg-primary" },
]

export default function StorageBreakdownTooltips() {
  const total = 128
  const used = segments.reduce((n, s) => n + s.gb, 0)

  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Storage</span>
          <span className="text-muted-foreground">
            {used} GB of {total} GB
          </span>
        </div>
        <div className="flex h-2.5 w-full bg-muted">
          {segments.map((s) => (
            <Tooltip key={s.label}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={s.label}
                    className={cn("h-full", s.className)}
                    style={{ width: (s.gb / total) * 100 + "%" }}
                  />
                }
              />
              <TooltipContent>
                {s.label}: {s.gb} GB
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
