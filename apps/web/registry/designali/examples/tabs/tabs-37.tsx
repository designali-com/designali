import { UserPlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const members = [
  { name: "Rhea Kapoor", role: "Owner" },
  { name: "Felix Navarro", role: "Admin" },
  { name: "June Abara", role: "Member" },
]
const invites = ["oscar@fieldnotes.io", "wren@fieldnotes.io"]

export default function TeamMembersTabs() {
  return (
    <Tabs defaultValue="members" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="invites">
            Invites <Badge variant="secondary">{invites.length}</Badge>
          </TabsTrigger>
        </TabsList>
        <Button size="sm">
          <UserPlusIcon data-icon="inline-start" />
          Invite
        </Button>
      </div>
      <TabsContent value="members" className="flex flex-col gap-2">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="flex-1 font-medium">{m.name}</span>
            <Badge variant="outline">{m.role}</Badge>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="invites" className="flex flex-col gap-2">
        {invites.map((email) => (
          <div key={email} className="flex items-center justify-between">
            <span className="text-muted-foreground">{email}</span>
            <Button variant="ghost" size="xs">
              Revoke
            </Button>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
