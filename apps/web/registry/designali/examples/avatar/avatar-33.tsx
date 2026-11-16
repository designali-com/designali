import {
  Clock as ClockIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function ContactHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Final Designali homepage copy was approved by{" "}
      <HoverCard>
        <HoverCardTrigger
          delay={10}
          closeDelay={100}
          render={
            <a
              href="#"
              className="font-medium text-foreground underline underline-offset-4"
            />
          }
        >
          @aliimam
        </HoverCardTrigger>
        <HoverCardContent className="flex w-72 gap-3">
          <Avatar size="lg">
            <AvatarFallback>AI</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Ali Imam</p>
            <p className="text-xs text-muted-foreground">
              Founder & design engineer · Designali
            </p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <ClockIcon className="size-3" /> 4:12 PM local time
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      this morning.
    </p>
  )
}
