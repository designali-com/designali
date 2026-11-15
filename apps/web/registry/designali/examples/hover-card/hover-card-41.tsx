"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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
          Noor Al-Sayed
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-72 p-0">
          <div className="h-16 bg-gradient-to-r from-teal-400 to-sky-500" />
          <div className="-mt-6 px-3 pb-3">
            <Avatar size="lg" className="ring-2 ring-popover">
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <div className="mt-1 flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">Noor Al-Sayed</p>
                <p className="text-muted-foreground">Illustrator · Amman</p>
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
        Sketchbook dump from this weekend&apos;s market. Which one should I ink?
      </p>
    </div>
  )
}
