import {
  ImagePlus as ImagePlusIcon,
  MessageSquarePlus as MessageSquarePlusIcon,
  Redo2 as Redo2Icon,
  Table as TableIcon,
  Undo2 as Undo2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const actions = [
  { label: "Undo", icon: Undo2Icon },
  { label: "Redo", icon: Redo2Icon },
  { label: "Insert image", icon: ImagePlusIcon },
  { label: "Insert table", icon: TableIcon },
  { label: "Add comment", icon: MessageSquarePlusIcon },
]

export default function IconToolbarTooltips() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 border p-1">
        {actions.map((a) => (
          <Tooltip key={a.label}>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label={a.label} />
              }
            >
              <a.icon />
            </TooltipTrigger>
            <TooltipContent>{a.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
