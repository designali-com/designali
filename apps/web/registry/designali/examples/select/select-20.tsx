import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const roles = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
]

const members = [
  { name: "Lena Ortiz", email: "lena@fieldnote.app", role: "owner" },
  { name: "Sam Okafor", email: "sam@fieldnote.app", role: "admin" },
  { name: "Iris Novak", email: "iris@fieldnote.app", role: "editor" },
  { name: "Theo Laurent", email: "theo@fieldnote.app", role: "viewer" },
]

export default function TeamRoleSelect() {
  return (
    <div className="w-full max-w-md divide-y border">
      {members.map((member) => (
        <div key={member.email} className="flex items-center gap-3 p-3">
          <Avatar>
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col text-sm">
            <span className="font-medium">{member.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {member.email}
            </span>
          </div>
          <Select
            items={roles}
            defaultValue={member.role}
            disabled={member.role === "owner"}
          >
            <SelectTrigger
              size="sm"
              className="w-24"
              aria-label={"Role for " + member.name}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles
                .filter((role) => role.value !== "owner")
                .map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  )
}
