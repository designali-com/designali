import {
  BadgeCheck as BadgeCheckIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function VerifiedBadgeTooltip() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold">Ali Imam</span>
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
          Design engineer · Designali
        </span>
      </div>
    </div>
  )
}
