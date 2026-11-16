"use client"

import * as React from "react"
import {
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

export default function UnassignedAssigneeSlot() {
  const [assigned, setAssigned] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3">
      <div>
        <p className="text-sm font-medium">Fix flaky Designali checkout test</p>
        <p className="text-xs text-muted-foreground">
          {assigned ? "Assigned to you" : "No assignee"}
        </p>
      </div>
      {assigned ? (
        <button
          type="button"
          onClick={() => setAssigned(false)}
          aria-label="Unassign"
          className="rounded-full"
        >
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              ME
            </AvatarFallback>
          </Avatar>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setAssigned(true)}
          aria-label="Assign to me"
          className="flex size-8 items-center justify-center rounded-full border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-foreground hover:text-foreground"
        >
          <UserPlusIcon className="size-4" />
        </button>
      )}
    </div>
  )
}
