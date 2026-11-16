import {
  Check as CheckIcon,
  X as XIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const permissions = [
  "View projects",
  "Edit content",
  "Manage billing",
  "Invite members",
]
const roles: Record<string, boolean[]> = {
  Admin: [true, true, true, true],
  Editor: [true, true, false, true],
  Viewer: [true, false, false, false],
}
const members = [
  { name: "Ali Imam", role: "Admin" },
  { name: "Studio Designer", role: "Editor" },
  { name: "Client Reviewer", role: "Viewer" },
]

export default function RolePermissionsHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border text-sm">
      {members.map((m) => (
        <div
          key={m.name}
          className="flex items-center justify-between px-3 py-2"
        >
          <span>{m.name}</span>
          <HoverCard>
            <HoverCardTrigger
              render={<Badge variant="outline" className="cursor-default" />}
            >
              {m.role}
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-48">
              <p className="mb-1.5 font-medium">{m.role} can</p>
              <ul className="flex flex-col gap-1">
                {permissions.map((p, i) => (
                  <li
                    key={p}
                    className={cn(
                      "flex items-center gap-2",
                      !roles[m.role]![i] && "text-muted-foreground line-through"
                    )}
                  >
                    {roles[m.role]![i] ? (
                      <CheckIcon className="size-3.5 text-emerald-600" />
                    ) : (
                      <XIcon className="size-3.5" />
                    )}
                    {p}
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}
