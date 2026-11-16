import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const notifications = [
  {
    name: "Ali Imam",
    action: "commented on",
    target: "Blocks roadmap",
    time: "2m",
  },
  {
    name: "Leo",
    action: "assigned you",
    target: "Pricing page audit",
    time: "14m",
  },
  {
    name: "Ines",
    action: "mentioned you in",
    target: "Design crit",
    time: "1h",
  },
  { name: "Tomas", action: "approved", target: "PR #482", time: "2h" },
  {
    name: "Aiko",
    action: "shared",
    target: "Designali brand guidelines",
    time: "3h",
  },
  {
    name: "Omar",
    action: "invited you to",
    target: "Designali studio",
    time: "5h",
  },
  {
    name: "Sofia",
    action: "completed",
    target: "Onboarding flow",
    time: "Yesterday",
  },
  {
    name: "Ben",
    action: "requested review on",
    target: "Icons docs",
    time: "Yesterday",
  },
]

export default function NotificationsFeed() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Notifications</span>
        <Button size="xs" variant="ghost">
          Mark all read
        </Button>
      </div>
      <ScrollArea className="h-72">
        <div className="flex flex-col divide-y">
          {notifications.map((n, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3">
              <Avatar className="size-8">
                <AvatarFallback>
                  {n.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <p className="flex-1 text-xs">
                <span className="font-medium">{n.name}</span> {n.action}{" "}
                <span className="font-medium">{n.target}</span>
                <span className="block text-muted-foreground">{n.time}</span>
              </p>
              {i < 3 && (
                <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
