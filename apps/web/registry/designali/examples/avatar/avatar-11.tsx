import { EllipsisVerticalIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function UserIdentityRow() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <Avatar size="lg">
        <AvatarFallback className="bg-primary text-primary-foreground">
          NK
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">Nadia Karim</p>
        <p className="truncate text-xs text-muted-foreground">
          nadia.karim@northwind.dev
        </p>
      </div>
      <Button variant="ghost" size="icon-sm" aria-label="More options">
        <EllipsisVerticalIcon />
      </Button>
    </div>
  )
}
