import { ChevronRightIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const days = [
  {
    label: "Today",
    versions: [
      { time: "4:12 PM", author: "Nadia Brooks", current: true },
      { time: "11:03 AM", author: "Owen Hale", current: false },
    ],
  },
  {
    label: "November 13",
    versions: [
      { time: "6:47 PM", author: "Nadia Brooks", current: false },
      { time: "2:20 PM", author: "Priya Shah", current: false },
      { time: "9:15 AM", author: "Owen Hale", current: false },
    ],
  },
]

export default function VersionHistoryDays() {
  return (
    <div className="w-full max-w-xs space-y-1 border p-2">
      <p className="px-2 py-1 text-sm font-semibold">Version history</p>
      {days.map((day, index) => (
        <Collapsible key={day.label} defaultOpen={index === 0}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="xs"
                className="w-full justify-start text-muted-foreground"
              >
                <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
                {day.label}
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="flex flex-col">
              {day.versions.map((version) => (
                <li key={version.time}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full flex-col items-start px-6 py-1.5 text-left hover:bg-muted",
                      version.current && "bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      {version.time}
                      {version.current && (
                        <Badge variant="secondary">Current</Badge>
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {version.author}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
