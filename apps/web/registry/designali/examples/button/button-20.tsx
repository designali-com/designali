"use client"

import * as React from "react"
import { UserPlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function FollowToggleButton() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>RN</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium">Rosa Nakamura</span>
        <span className="text-xs text-muted-foreground">Illustrator</span>
      </div>
      <Button
        size="sm"
        variant={following ? "outline" : "default"}
        aria-pressed={following}
        onClick={() => setFollowing(!following)}
        className="group w-24"
      >
        {following ? (
          <>
            <span className="group-hover:hidden">Following</span>
            <span className="hidden text-destructive group-hover:inline">
              Unfollow
            </span>
          </>
        ) : (
          <>
            <UserPlusIcon data-icon="inline-start" />
            Follow
          </>
        )}
      </Button>
    </div>
  )
}
