import { BadgeCheckIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function VerifiedBadgeTooltip() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>RV</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold">Rosa Vidal</span>
          <Tooltip>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label="Verified"
                  className="text-sky-500"
                />
              }
            >
              <BadgeCheckIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>Identity verified on Mar 4, 2026</TooltipContent>
          </Tooltip>
        </div>
        <span className="text-xs text-muted-foreground">
          Product designer · Lisbon
        </span>
      </div>
    </div>
  )
}
