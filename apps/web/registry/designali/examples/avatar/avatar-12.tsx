import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { cn } from "@workspace/ui/lib/utils"

const team = [
  {
    name: "Ali Imam",
    email: "ali@designali.com",
    initials: "AI",
    role: "Owner",
  },
  {
    name: "Sara",
    email: "sara@designali.com",
    initials: "SA",
    role: "Admin",
  },
  {
    name: "Omar",
    email: "omar@designali.com",
    initials: "OM",
    role: "Editor",
  },
  {
    name: "Client reviewer",
    email: "client@example.com",
    initials: "CR",
    role: "Viewer",
  },
]

export default function TeamMembersList() {
  return (
    <ItemGroup className="w-full max-w-md gap-0 border">
      {team.map((member, index) => (
        <Item key={member.email} className={cn(index > 0 && "border-t-border")}>
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{member.name}</ItemTitle>
            <ItemDescription>{member.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant={member.role === "Owner" ? "default" : "outline"}>
              {member.role}
            </Badge>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
