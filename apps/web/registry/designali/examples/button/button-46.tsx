import { CopyIcon, PencilIcon, Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function RowActionTooltipButtons() {
  const actions = [
    { label: "Edit", icon: PencilIcon, variant: "ghost" },
    { label: "Duplicate", icon: CopyIcon, variant: "ghost" },
    { label: "Delete", icon: Trash2Icon, variant: "destructive" },
  ] as const

  return (
    <div className="flex w-full max-w-sm items-center justify-between border px-3 py-2">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Welcome email</span>
        <span className="text-xs text-muted-foreground">
          Sent to 1,204 contacts
        </span>
      </div>
      <div className="flex gap-1">
        {actions.map((action) => (
          <Tooltip key={action.label}>
            <TooltipTrigger
              render={
                <Button
                  variant={action.variant}
                  size="icon-xs"
                  aria-label={action.label}
                />
              }
            >
              <action.icon />
            </TooltipTrigger>
            <TooltipContent>{action.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
