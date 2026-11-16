import {
  Crown as CrownIcon,
  Shield as ShieldIcon,
  Star as StarIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

const roles = [
  {
    initials: "AI",
    role: "Owner",
    icon: CrownIcon,
    tone: "bg-primary text-white",
  },
  {
    initials: "SA",
    role: "Admin",
    icon: ShieldIcon,
    tone: "bg-chart-2 text-white",
  },
  {
    initials: "OM",
    role: "Moderator",
    icon: StarIcon,
    tone: "bg-chart-2 text-white",
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
