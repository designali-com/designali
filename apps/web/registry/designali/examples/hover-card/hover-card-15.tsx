import {
  Clock as ClockIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function PresenceStatusHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<span className="cursor-pointer" />}>
        <Avatar size="lg">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
          <AvatarBadge className="bg-amber-500" />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-60">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-amber-500" />
          <span className="font-medium">Ali Imam · Away</span>
        </div>
        <p className="mt-1 text-muted-foreground">
          🎧 Heads down on new Designali blocks
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
          <ClockIcon className="size-3.5" />
          6:42 PM local time
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
