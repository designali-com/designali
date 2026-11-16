import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const entries = [
  { type: "Added", text: "Bulk SVG export for @designali/icons." },
  { type: "Improved", text: "Blocks search now loads 40% faster." },
  { type: "Fixed", text: "Dark mode tokens on landing page templates." },
  { type: "Removed", text: "Legacy Dalim UI components." },
]

const styles: Record<string, string> = {
  Added:
    "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  Improved: "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  Fixed: "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  Removed: "bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive",
}

export default function ChangelogTypeBadges() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Designali 4.8</span>
        <span className="text-xs text-muted-foreground">November 3</span>
      </div>
      {entries.map((entry) => (
        <div key={entry.text} className="flex items-start gap-3">
          <Badge className={cn("w-18", styles[entry.type])}>{entry.type}</Badge>
          <p className="text-sm text-muted-foreground">{entry.text}</p>
        </div>
      ))}
    </div>
  )
}
