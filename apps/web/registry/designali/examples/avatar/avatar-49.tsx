import { CrownIcon, ShieldIcon, StarIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

const roles = [
  {
    initials: "OW",
    role: "Owner",
    icon: CrownIcon,
    tone: "bg-amber-500 text-white",
  },
  {
    initials: "AD",
    role: "Admin",
    icon: ShieldIcon,
    tone: "bg-blue-600 text-white",
  },
  {
    initials: "MO",
    role: "Moderator",
    icon: StarIcon,
    tone: "bg-violet-600 text-white",
  },
]

export default function RoleIconAvatarBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {roles.map((item) => (
        <div key={item.role} className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarFallback>{item.initials}</AvatarFallback>
            <AvatarBadge className={item.tone}>
              <item.icon />
            </AvatarBadge>
          </Avatar>
          <span className="text-xs text-muted-foreground">{item.role}</span>
        </div>
      ))}
    </div>
  )
}
