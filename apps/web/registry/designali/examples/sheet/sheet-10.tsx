import { UserPlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const members = [
  { name: "Ava Lindqvist", email: "ava@corelab.io", role: "Owner" },
  { name: "Mateo Ruiz", email: "mateo@corelab.io", role: "Admin" },
  { name: "Hana Sato", email: "hana@corelab.io", role: "Member" },
]

export default function InviteMembersSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Invite teammates</SheetTitle>
          <SheetDescription>
            They&apos;ll get an email to join Corelab.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Field>
            <FieldLabel htmlFor="invite-email">Email address</FieldLabel>
            <Input
              id="invite-email"
              type="email"
              placeholder="name@corelab.io"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="invite-role">Role</FieldLabel>
            <NativeSelect
              id="invite-role"
              defaultValue="member"
              className="w-full"
            >
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="member">Member</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Button>Send invite</Button>
          <Separator />
          <span className="font-medium">Current members</span>
          <div className="flex flex-col gap-3">
            {members.map((member) => (
              <div key={member.email} className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-muted-foreground">{member.email}</span>
                </div>
                <Badge variant="outline">{member.role}</Badge>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
