import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

const members = [
  {
    name: "Ali Imam",
    initials: "AI",
    status: "Online",
    dot: "bg-emerald-500",
  },
  { name: "Sara", initials: "SA", status: "Away", dot: "bg-amber-500" },
  { name: "Omar", initials: "OM", status: "Busy", dot: "bg-red-500" },
  {
    name: "Zara",
    initials: "ZA",
    status: "Offline",
    dot: "bg-muted-foreground",
  },
]

export default function PresenceStatusAvatars() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
      {members.map((member) => (
        <div key={member.name} className="flex items-center gap-3 border p-3">
          <Avatar>
            <AvatarFallback>{member.initials}</AvatarFallback>
            <AvatarBadge className={member.dot} />
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{member.name}</p>
            <p className="text-xs text-muted-foreground">{member.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
