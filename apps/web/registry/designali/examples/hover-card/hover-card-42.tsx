import {
  CalendarPlus as CalendarPlusIcon,
  MessageSquare as MessageSquareIcon,
  Phone as PhoneIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function ContactActionsHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="flex items-center gap-2 text-sm">
        <Avatar size="sm">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <span className="font-medium hover:underline">Ali Imam</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm font-medium">Ali Imam</p>
        <p className="text-muted-foreground">Founder · Designali</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          <Button variant="outline" size="sm">
            <MessageSquareIcon />
            Chat
          </Button>
          <Button variant="outline" size="sm">
            <PhoneIcon />
            Call
          </Button>
          <Button variant="outline" size="sm">
            <CalendarPlusIcon />
            Meet
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
