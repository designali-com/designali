"use client"

import * as React from "react"
import { UserCheckIcon, UserPlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Toggle } from "@workspace/ui/components/toggle"

export default function FollowToggleButton() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-4">
      <Avatar>
        <AvatarFallback>IR</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Iris Moreau</p>
        <p className="truncate text-xs text-muted-foreground">
          Writes about typography
        </p>
      </div>
      <Toggle
        variant="outline"
        size="sm"
        pressed={following}
        onPressedChange={setFollowing}
        aria-label="Follow Iris Moreau"
      >
        {following ? <UserCheckIcon /> : <UserPlusIcon />}
        {following ? "Following" : "Follow"}
      </Toggle>
    </div>
  )
}
