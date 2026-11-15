import { BellIcon, MailIcon } from "lucide-react"

import { Switch } from "@workspace/ui/components/switch"

const categories = [
  {
    id: "mentions",
    label: "Mentions",
    hint: "When someone @mentions you",
    email: true,
    push: true,
  },
  {
    id: "comments",
    label: "Comments",
    hint: "Replies on your threads",
    email: false,
    push: true,
  },
  {
    id: "invites",
    label: "Invites",
    hint: "Workspace and project invites",
    email: true,
    push: false,
  },
  {
    id: "digest",
    label: "Weekly digest",
    hint: "Summary every Monday",
    email: true,
    push: false,
  },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="w-full max-w-md border">
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b bg-muted/50 px-4 py-2 text-xs font-medium text-muted-foreground">
        <span>Activity</span>
        <span className="flex items-center gap-1">
          <MailIcon className="size-3.5" />
          Email
        </span>
        <span className="flex items-center gap-1">
          <BellIcon className="size-3.5" />
          Push
        </span>
      </div>
      {categories.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b px-4 py-3 last:border-b-0"
        >
          <div className="min-w-0">
            <p className="text-sm font-medium">{item.label}</p>
            <p className="truncate text-xs text-muted-foreground">
              {item.hint}
            </p>
          </div>
          <div className="flex w-12 justify-center">
            <Switch
              size="sm"
              defaultChecked={item.email}
              aria-label={item.label + " email"}
            />
          </div>
          <div className="flex w-12 justify-center">
            <Switch
              size="sm"
              defaultChecked={item.push}
              aria-label={item.label + " push"}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
