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
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  Improved: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Fixed: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Removed: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
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
