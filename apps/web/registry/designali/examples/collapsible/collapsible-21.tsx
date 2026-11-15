import { ChevronDownIcon, HistoryIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const entries = [
  {
    actor: "Maya Chen",
    action: "updated billing email",
    time: "Today, 09:41",
    before: "finance@northwind.test",
    after: "billing@northwind.test",
  },
  {
    actor: "Arjun Patel",
    action: "changed member role",
    time: "Yesterday, 17:02",
    before: "role: viewer",
    after: "role: admin",
  },
]

export default function AuditLogEntryDiff() {
  return (
    <div className="w-full max-w-md divide-y border">
      {entries.map((entry) => (
        <Collapsible key={entry.time}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="h-auto w-full justify-start gap-3 px-3 py-2.5 text-left whitespace-normal"
              >
                <HistoryIcon className="text-muted-foreground" />
                <span className="flex-1">
                  <span className="font-semibold">{entry.actor}</span>{" "}
                  <span className="font-normal">{entry.action}</span>
                  <span className="block text-xs font-normal text-muted-foreground">
                    {entry.time}
                  </span>
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="grid gap-1 px-3 pb-3 font-mono text-xs">
              <p className="bg-destructive/10 px-2 py-1 text-destructive">
                - {entry.before}
              </p>
              <p className="bg-primary/10 px-2 py-1">+ {entry.after}</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
