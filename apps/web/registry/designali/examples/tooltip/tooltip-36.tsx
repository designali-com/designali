import { BellIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function NotificationBellTooltip() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between border px-3 py-2">
      <span className="text-sm font-medium">Workspace</span>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications, 5 unread"
              className="relative"
            />
          }
        >
          <BellIcon />
          <span className="absolute end-1 top-1 flex size-3.5 items-center justify-center rounded-full bg-destructive text-[9px] text-white">
            5
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          5 unread: 3 mentions, 2 approvals
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
