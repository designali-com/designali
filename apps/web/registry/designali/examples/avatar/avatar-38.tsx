import { UserPlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"

export default function InviteTeammatesStack() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Design team</p>
        <p className="text-xs text-muted-foreground">
          5 members · 2 pending invites
        </p>
      </div>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
        <button
          type="button"
          aria-label="Invite teammate"
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/50 bg-background text-xs text-muted-foreground ring-2 ring-background hover:bg-muted hover:text-foreground [&>svg]:size-4"
        >
          <UserPlusIcon />
        </button>
      </AvatarGroup>
    </div>
  )
}
