import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const members = [
  { name: "Ali Imam", email: "ali@designali.com", role: "edit" },
  { name: "Sara", email: "sara@designali.com", role: "comment" },
  { name: "Client", email: "client@example.com", role: "view" },
]

export default function MemberPermissionToggleGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {members.map((m) => (
        <div key={m.email} className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>
              {m.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-sm font-medium">{m.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {m.email}
            </span>
          </div>
          <ToggleGroup
            size="sm"
            variant="outline"
            spacing={0}
            defaultValue={[m.role]}
          >
            <ToggleGroupItem value="view">View</ToggleGroupItem>
            <ToggleGroupItem value="comment">Comment</ToggleGroupItem>
            <ToggleGroupItem value="edit">Edit</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}
