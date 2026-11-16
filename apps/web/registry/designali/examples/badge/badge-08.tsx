import {
  Bell as BellIcon,
  Inbox as InboxIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function NotificationBellCount() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          aria-label="Notifications, 4 unread"
        >
          <BellIcon />
        </Button>
        <Badge className="absolute -end-2 -top-2 h-4 min-w-4 rounded-full px-1 text-[10px] tabular-nums">
          4
        </Badge>
      </div>
      <div className="relative">
        <Button variant="outline" size="icon" aria-label="Inbox, 23 unread">
          <InboxIcon />
        </Button>
        <Badge
          variant="destructive"
          className="absolute -end-2.5 -top-2 h-4 min-w-4 rounded-full bg-destructive px-1 text-[10px] text-white tabular-nums dark:bg-destructive"
        >
          23
        </Badge>
      </div>
      <div className="relative">
        <Button variant="outline" size="icon" aria-label="Cart, has items">
          <ShoppingCartIcon />
        </Button>
        <Badge
          className="absolute -end-1 -top-1 size-2.5 rounded-full p-0"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
