import { FilePlusIcon, SaveIcon, SearchIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const items = [
  { label: "Search", keys: ["⌘", "K"], icon: SearchIcon },
  { label: "New file", keys: ["⌘", "N"], icon: FilePlusIcon },
  { label: "Save", keys: ["⌘", "S"], icon: SaveIcon },
]

export default function ShortcutKbdTooltip() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {items.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger
              render={
                <Button variant="outline" size="icon" aria-label={item.label} />
              }
            >
              <item.icon />
            </TooltipTrigger>
            <TooltipContent>
              {item.label}
              <KbdGroup>
                {item.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </KbdGroup>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
