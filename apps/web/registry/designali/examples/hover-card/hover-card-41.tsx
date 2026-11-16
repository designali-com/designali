"use client"

import * as React from "react"

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

export default function SocialFollowHoverCard() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-3 text-sm">
      <HoverCard>
        <HoverCardTrigger href="#" className="font-medium hover:underline">
          Ali Imam
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-72 p-0">
          <div className="h-16 bg-gradient-to-r from-primary to-primary" />
          <div className="-mt-6 px-3 pb-3">
            <Avatar size="lg" className="ring-2 ring-popover">
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="mt-1 flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">Ali Imam</p>
                <p className="text-muted-foreground">Design engineer · Designali</p>
              </div>
              <Button
                size="xs"
                variant={following ? "outline" : "default"}
                onClick={() => setFollowing((f) => !f)}
              >
                {following ? "Following" : "Follow"}
              </Button>
            </div>
            <p className="mt-2 text-muted-foreground">
              <strong className="text-foreground">
                {following ? "9,402" : "9,401"}
              </strong>{" "}
              followers
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <p className="mt-1 text-muted-foreground">
        New Designali illustrations from this weekend. Which one should I ship?
      </p>
    </div>
  )
}
