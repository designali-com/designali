"use client"

import * as React from "react"
import { CircleCheckIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function ResolveCommentToggle() {
  const [resolved, setResolved] = React.useState(false)

  return (
    <div
      className={cn(
        "flex w-full max-w-sm flex-col gap-2 border p-3 transition-opacity",
        resolved && "bg-muted/40"
      )}
    >
      <div className="flex items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>GW</AvatarFallback>
        </Avatar>
        <span className="flex-1 text-sm font-medium">Grace Wu</span>
        <Toggle
          size="sm"
          variant="outline"
          pressed={resolved}
          onPressedChange={setResolved}
        >
          <CircleCheckIcon />
          {resolved ? "Resolved" : "Resolve"}
        </Toggle>
      </div>
      {!resolved && (
        <p className="text-sm text-muted-foreground">
          The empty state copy feels too long on mobile. Could we cut the second
          sentence?
        </p>
      )}
      {resolved && (
        <p className="text-xs text-muted-foreground">Thread resolved by you</p>
      )}
    </div>
  )
}
