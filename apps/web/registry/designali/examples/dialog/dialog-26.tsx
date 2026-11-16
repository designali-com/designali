import {
  ArrowRightLeft as ArrowRightLeftIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
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
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const members = [
  { value: "ali", label: "Ali Imam — Admin" },
  { value: "designer", label: "Studio Designer — Admin" },
  { value: "developer", label: "Studio Developer — Member" },
]

export default function TransferOwnershipDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <ArrowRightLeftIcon data-icon="inline-start" />
        Transfer ownership
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Transfer workspace ownership</DialogTitle>
          <DialogDescription>
            You&apos;ll become an admin and lose access to billing.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>This can&apos;t be undone by you</AlertTitle>
          <AlertDescription>
            Only the new owner can transfer ownership back.
          </AlertDescription>
        </Alert>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="new-owner">New owner</FieldLabel>
            <NativeSelect id="new-owner" defaultValue="" className="w-full">
              <NativeSelectOption value="" disabled>
                Select a member
              </NativeSelectOption>
              {members.map((member) => (
                <NativeSelectOption key={member.value} value={member.value}>
                  {member.label}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="owner-password">
              Confirm your password
            </FieldLabel>
            <Input
              id="owner-password"
              type="password"
              autoComplete="current-password"
            />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button variant="destructive" />}>
            Transfer
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
