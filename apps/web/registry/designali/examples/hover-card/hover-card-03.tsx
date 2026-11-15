import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function UserMentionHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Great catch! Looping in{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          @maya.chen
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex gap-3">
            <Avatar size="lg">
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Maya Chen</p>
                  <p className="text-muted-foreground">@maya.chen</p>
                </div>
                <Button size="xs">Follow</Button>
              </div>
              <p>
                Design systems lead at Northwind Studio. Writing about tokens
                and motion.
              </p>
              <div className="flex gap-3 text-muted-foreground">
                <span>
                  <strong className="text-foreground">1,284</strong> followers
                </span>
                <span>
                  <strong className="text-foreground">312</strong> following
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      since she owns the spacing tokens.
    </p>
  )
}
