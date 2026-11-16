import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

const events = [
  {
    initials: "AI",
    who: "Ali Imam",
    action: "merged pull request #482 on designali/blocks",
    time: "Just now",
  },
  {
    initials: "SA",
    who: "Sara",
    action: "commented on Pricing page redesign",
    time: "25 min ago",
  },
  {
    initials: "OM",
    who: "Omar",
    action: "moved Icons package to Done",
    time: "1 hour ago",
  },
  {
    initials: "AI",
    who: "Ali Imam",
    action: "created the milestone Templates v2.3",
    time: "Yesterday",
  },
]

export default function ActivityTimelineAvatars() {
  return (
    <ol className="relative flex w-full max-w-sm flex-col gap-5 before:absolute before:inset-y-2 before:start-4 before:w-px before:bg-border">
      {events.map((event, index) => (
        <li key={index} className="relative flex gap-3">
          <Avatar className="ring-4 ring-background">
            <AvatarFallback>{event.initials}</AvatarFallback>
          </Avatar>
          <div className="pt-1 text-sm">
            <p>
              <span className="font-medium">{event.who}</span>{" "}
              <span className="text-muted-foreground">{event.action}</span>
            </p>
            <p className="text-xs text-muted-foreground">{event.time}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
