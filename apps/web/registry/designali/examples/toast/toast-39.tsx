"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function FollowUserToast() {
  const [following, setFollowing] = React.useState(false)

  function follow() {
    setFollowing(true)
    const id = notify.add({
      title: "Following Theo Nakamura",
      description: "You will see their posts in your feed.",
      actionProps: {
        children: "Unfollow",
        onClick: () => {
          setFollowing(false)
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <Avatar>
          <AvatarFallback>TN</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Theo Nakamura</p>
          <p className="truncate text-xs text-muted-foreground">
            Motion designer - 2.4k followers
          </p>
        </div>
        <Button
          size="sm"
          variant={following ? "outline" : "default"}
          onClick={following ? () => setFollowing(false) : follow}
        >
          {following ? "Following" : "Follow"}
        </Button>
      </div>
    </Toaster>
  )
}
