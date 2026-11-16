import {
  Bell as BellIcon,
  Inbox as InboxIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function NotificationBadgeButton() {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        aria-label="Notifications"
        className="relative"
      >
        <BellIcon />
        <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center bg-destructive px-1 text-[10px] font-medium text-white">
          3
        </span>
      </Button>
      <Button variant="outline">
        <InboxIcon data-icon="inline-start" />
        Inbox
        <Badge variant="secondary" className="ml-1">
          12
        </Badge>
      </Button>
    </div>
  )
}
