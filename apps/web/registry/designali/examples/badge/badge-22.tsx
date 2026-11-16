import {
  Crown as CrownIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"

const members = [
  { name: "Ali Imam", initials: "AI", role: "Owner" },
  { name: "Sara", initials: "SA", role: "Admin" },
  { name: "Omar", initials: "OM", role: "Member" },
  { name: "Contractor", initials: "CT", role: "Guest" },
]

const roleClass: Record<string, string> = {
  Owner: "",
  Admin: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Member: "bg-secondary text-secondary-foreground",
  Guest: "border-dashed border-border bg-transparent text-muted-foreground",
}

export default function MemberRoleBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {members.map((member) => (
        <div key={member.name} className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <span className="flex-1 text-sm">{member.name}</span>
          <Badge className={roleClass[member.role]}>
            {member.role === "Owner" && <CrownIcon data-icon="inline-start" />}
            {member.role}
          </Badge>
        </div>
      ))}
    </div>
  )
}
