import { UserPlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Textarea } from "@workspace/ui/components/textarea"

export default function InviteTeammatesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite teammates
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite to Northwind Studio</DialogTitle>
          <DialogDescription>
            Invitations expire after 7 days. Separate multiple emails with
            commas.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="invite-emails">Email addresses</FieldLabel>
            <Textarea
              id="invite-emails"
              placeholder="lena@northwind.dev, omar@northwind.dev"
              className="min-h-20"
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
            <FieldDescription>
              Members can create and edit projects.
            </FieldDescription>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button />}>Send invites</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
