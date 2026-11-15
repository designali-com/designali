import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const members = [
  ["Ava Lindqvist", "ava@orbit.dev", "Owner"],
  ["Ben Okafor", "ben@orbit.dev", "Admin"],
  ["Chloe Martin", "chloe@orbit.dev", "Member"],
  ["Dev Raman", "dev@orbit.dev", "Member"],
  ["Elif Hansen", "elif@orbit.dev", "Admin"],
  ["Felix Braun", "felix@orbit.dev", "Viewer"],
  ["Gia Santos", "gia@orbit.dev", "Member"],
  ["Hugo Laurent", "hugo@orbit.dev", "Viewer"],
]

export default function TeamMembersRoles() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Team members</CardTitle>
        <CardDescription>
          {members.length} people have access to this workspace.
        </CardDescription>
      </CardHeader>
      <ScrollArea className="h-64">
        <div className="flex flex-col divide-y">
          {members.map(([name, email, role]) => (
            <div key={email} className="flex items-center gap-3 px-4 py-2.5">
              <Avatar className="size-8">
                <AvatarFallback>
                  {name!
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">{name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {email}
                </p>
              </div>
              <Badge variant={role === "Owner" ? "default" : "outline"}>
                {role}
              </Badge>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
