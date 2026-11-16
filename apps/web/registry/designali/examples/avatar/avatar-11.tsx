import {
  EllipsisVertical as EllipsisVerticalIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function UserIdentityRow() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <Avatar size="lg">
        <AvatarFallback className="bg-primary text-primary-foreground">
          AI
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">Ali Imam</p>
        <p className="truncate text-xs text-muted-foreground">
          ali@designali.com
        </p>
      </div>
      <Button variant="ghost" size="icon-sm" aria-label="More options">
        <EllipsisVerticalIcon />
      </Button>
    </div>
  )
}
