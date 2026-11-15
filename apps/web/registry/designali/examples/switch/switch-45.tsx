import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Switch } from "@workspace/ui/components/switch"

const members = [
  { name: "Ava Thompson", email: "ava@orbit.dev", role: "Owner" },
  { name: "Marcus Lee", email: "marcus@orbit.dev", role: "Admin" },
  { name: "Sofia Alvarez", email: "sofia@orbit.dev", role: "Member" },
]

export default function TeamMemberAdminAccess() {
  return (
    <div className="w-full max-w-md divide-y border">
      <div className="flex justify-between px-4 py-2 text-xs font-medium text-muted-foreground">
        <span>Member</span>
        <span>Admin</span>
      </div>
      {members.map((member) => (
        <div key={member.email} className="flex items-center gap-3 px-4 py-3">
          <Avatar size="sm">
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{member.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {member.email}
            </p>
          </div>
          <Switch
            defaultChecked={member.role !== "Member"}
            disabled={member.role === "Owner"}
            aria-label={"Admin access for " + member.name}
          />
        </div>
      ))}
    </div>
  )
}
