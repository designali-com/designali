import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

const inbox = [
  { initials: "AI", unread: 3 },
  { initials: "DA", unread: 12 },
  { initials: "SA", unread: 0 },
]

export default function UnreadCountAvatarBadge() {
  return (
    <div className="flex items-center gap-5">
      {inbox.map((item) => (
        <Avatar key={item.initials} size="lg">
          <AvatarFallback>{item.initials}</AvatarFallback>
          {item.unread > 0 && (
            <AvatarBadge className="-end-1.5 -top-1.5 bottom-auto h-4 min-w-4 bg-destructive px-1 text-[10px] font-semibold text-white group-data-[size=lg]/avatar:size-auto group-data-[size=lg]/avatar:h-4">
              {item.unread > 9 ? "9+" : item.unread}
            </AvatarBadge>
          )}
        </Avatar>
      ))}
    </div>
  )
}
