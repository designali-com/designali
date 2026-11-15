import {
  ChartPieIcon,
  FolderKanbanIcon,
  HouseIcon,
  InboxIcon,
  SettingsIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const nav = [
  { label: "Home", icon: HouseIcon, active: true },
  { label: "Inbox", icon: InboxIcon, active: false },
  { label: "Projects", icon: FolderKanbanIcon, active: false },
  { label: "Reports", icon: ChartPieIcon, active: false },
  { label: "Settings", icon: SettingsIcon, active: false },
]

export default function CollapsedSidebarTooltips() {
  return (
    <TooltipProvider>
      <nav className="flex h-72 w-14 flex-col items-center gap-1 border bg-muted/30 py-3">
        <div className="mb-2 size-7 bg-gradient-to-br from-indigo-500 to-sky-400" />
        {nav.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger
              render={
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  size="icon"
                  aria-label={item.label}
                  nativeButton={false}
                  render={<a href="#" />}
                />
              }
            >
              <item.icon />
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}
