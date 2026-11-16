import {
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const members = [
  { name: "Ali Imam", email: "ali@designali.com", role: "owner" },
  { name: "Sam Designer", email: "sam@designali.com", role: "admin" },
  { name: "Maya Developer", email: "maya@designali.com", role: "editor" },
  { name: "Ravi Client", email: "ravi@example.com", role: "viewer" },
]

export default function TeamMembersCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Designali studio team</CardTitle>
        <CardDescription>
          Invite teammates and clients to Designali projects.
        </CardDescription>
        <CardAction>
          <Button size="sm">
            <UserPlusIcon data-icon="inline-start" />
            Invite
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {members.map((m) => (
          <div key={m.email} className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarFallback>
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid min-w-0 flex-1">
              <span className="truncate font-medium">{m.name}</span>
              <span className="truncate text-muted-foreground">{m.email}</span>
            </div>
            <NativeSelect
              size="sm"
              defaultValue={m.role}
              disabled={m.role === "owner"}
              aria-label={"Role for " + m.name}
            >
              <NativeSelectOption value="owner">Owner</NativeSelectOption>
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="editor">Editor</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
