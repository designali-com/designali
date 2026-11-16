import { Badge } from "@workspace/ui/components/badge"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const releases = [
  {
    version: "3.2.0",
    date: "Nov 12",
    notes: "460+ blocks and faster icon search.",
  },
  {
    version: "3.1.4",
    date: "Nov 02",
    notes: "Fixed dark mode in pricing blocks.",
  },
  {
    version: "3.1.0",
    date: "Oct 21",
    notes: "240 landing pages added.",
  },
  { version: "3.0.2", date: "Oct 09", notes: "New @designali/logos package." },
  {
    version: "3.0.0",
    date: "Sep 30",
    notes: "Redesigned designali.com navigation.",
  },
  { version: "2.9.1", date: "Sep 14", notes: "Apple device mockups: iPhone, iPad, MacBook." },
]

export default function ChangelogTimeline() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <ol className="relative flex flex-col gap-5 p-5 before:absolute before:inset-y-5 before:left-[25px] before:w-px before:bg-border">
        {releases.map((r, i) => (
          <li key={r.version} className="relative flex gap-3 pl-6">
            <span
              className={cn(
                "absolute top-1 left-[1px] size-2.5 border-2 border-background",
                i === 0 ? "bg-primary" : "bg-muted-foreground"
              )}
            />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-medium">
                  v{r.version}
                </span>
                {i === 0 && <Badge>Latest</Badge>}
                <span className="text-[11px] text-muted-foreground">
                  {r.date}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{r.notes}</p>
            </div>
          </li>
        ))}
      </ol>
    </ScrollArea>
  )
}
