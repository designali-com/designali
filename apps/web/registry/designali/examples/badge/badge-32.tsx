import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const chats = [
  {
    name: "Product squad",
    preview: "Ines: shipping the beta today",
    unread: 5,
    muted: false,
  },
  {
    name: "Ravi Chandra",
    preview: "Sounds good, see you then",
    unread: 1,
    muted: false,
  },
  {
    name: "Random",
    preview: "Lunch spot recommendations?",
    unread: 42,
    muted: true,
  },
  {
    name: "Ola Nilsen",
    preview: "Thanks for the notes!",
    unread: 0,
    muted: false,
  },
]

export default function ConversationUnreadBadges() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {chats.map((chat) => (
        <div key={chat.name} className="flex items-center gap-3 p-3">
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "truncate text-sm",
                chat.unread > 0 && !chat.muted ? "font-semibold" : "font-medium"
              )}
            >
              {chat.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {chat.preview}
            </p>
          </div>
          {chat.unread > 0 && (
            <Badge
              variant={chat.muted ? "secondary" : "default"}
              className="h-5 min-w-5 rounded-full px-1.5 tabular-nums"
            >
              {chat.unread > 9 ? "9+" : chat.unread}
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
