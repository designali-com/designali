import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  MessageSquare as MessageSquareIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const notifications = [
  {
    icon: MessageSquareIcon,
    text: "Ines replied to your comment on Pricing block",
    time: "2m",
  },
  { icon: UserPlusIcon, text: "Marco joined the Designali studio workspace", time: "1h" },
  { icon: CircleCheckIcon, text: "Invoice #1042 was paid", time: "3h" },
]

export default function NotificationListSeparated() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between p-3">
        <span className="text-sm font-medium">Notifications</span>
        <Button variant="link" size="xs">
          Mark all read
        </Button>
      </div>
      <Separator />
      {notifications.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator />}
          <div className="flex items-start gap-3 p-3 text-sm">
            <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span className="flex-1">{item.text}</span>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
