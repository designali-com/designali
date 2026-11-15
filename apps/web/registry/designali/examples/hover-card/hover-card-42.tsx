import { CalendarPlusIcon, MessageSquareIcon, PhoneIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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
          <AvatarFallback>FO</AvatarFallback>
        </Avatar>
        <span className="font-medium hover:underline">Fatima Osei</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm font-medium">Fatima Osei</p>
        <p className="text-muted-foreground">Account Executive · EMEA</p>
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
