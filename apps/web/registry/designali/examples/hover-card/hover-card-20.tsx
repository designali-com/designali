import {
  Hash as HashIcon,
  Users as UsersIcon,
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

export default function ChannelMentionHoverCard() {
  return (
    <div className="flex w-full max-w-sm gap-2 text-sm">
      <Avatar size="sm">
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">
          Ali Imam{" "}
          <span className="text-xs font-normal text-muted-foreground">
            11:02
          </span>
        </p>
        <p>
          Release notes are up, discuss in{" "}
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="bg-primary/10 px-1 font-medium text-primary dark:text-primary"
            >
              #designali-launch
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-medium">
                <HashIcon className="size-3.5" />
                designali-launch
              </div>
              <p className="text-muted-foreground">
                Coordination for the Designali v4.0 launch: timelines, blockers, and
                go/no-go calls.
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <UsersIcon className="size-3.5" />
                  42 members
                </span>
                <Button size="xs">Join channel</Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      </div>
    </div>
  )
}
