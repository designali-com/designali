import {
  CalendarClock as CalendarClockIcon,
  Database as DatabaseIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  Link as LinkIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

const actions = [
  { label: "Export as CSV", icon: FileSpreadsheetIcon, pro: false },
  { label: "Share public link", icon: LinkIcon, pro: false },
  { label: "Export as PDF report", icon: FileTextIcon, pro: true },
  { label: "Schedule email digest", icon: CalendarClockIcon, pro: true },
  { label: "Sync to Figma", icon: DatabaseIcon, pro: true },
]

export default function PlanGatedCommands() {
  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Export or share..." />
      <CommandList>
        <CommandEmpty>No matching action.</CommandEmpty>
        <CommandGroup heading="Free plan">
          {actions.map((action) => (
            <CommandItem key={action.label} disabled={action.pro}>
              <action.icon />
              <span>{action.label}</span>
              {action.pro ? (
                <Badge variant="secondary" className="ms-auto">
                  <SparklesIcon />
                  Pro
                </Badge>
              ) : null}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <div className="flex items-center justify-between gap-2 p-2 text-xs">
          <span className="text-muted-foreground">Unlock 3 more actions</span>
          <Button size="xs">Upgrade</Button>
        </div>
      </CommandList>
    </Command>
  )
}
