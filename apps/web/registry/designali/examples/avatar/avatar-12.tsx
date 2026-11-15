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
    name: "Elena Rossi",
    email: "elena@fieldnotes.app",
    initials: "ER",
    role: "Owner",
  },
  {
    name: "Marcus Webb",
    email: "marcus@fieldnotes.app",
    initials: "MW",
    role: "Admin",
  },
  {
    name: "Yuki Tanaka",
    email: "yuki@fieldnotes.app",
    initials: "YT",
    role: "Editor",
  },
  {
    name: "Daniel Osei",
    email: "daniel@fieldnotes.app",
    initials: "DO",
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
