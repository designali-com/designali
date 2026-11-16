"use client"

import * as React from "react"
import {
  Crown as CrownIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const admins = [
  { value: null, label: "Choose an admin" },
  { value: "ali", label: "Ali Imam" },
  { value: "sara", label: "Sara Khan" },
  { value: "zaid", label: "Zaid Ahmed" },
]

export default function TransferOwnershipSelect() {
  const [owner, setOwner] = React.useState<string | null>(null)

  return (
    <AlertDialog onOpenChange={(open) => !open && setOwner(null)}>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <CrownIcon data-icon="inline-start" />
        Transfer ownership
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Transfer Designali workspace ownership</AlertDialogTitle>
          <AlertDialogDescription>
            The new owner gets full billing and admin control. You&apos;ll
            become an admin.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel>New owner</FieldLabel>
          <Select
            items={admins}
            value={owner}
            onValueChange={(value) => setOwner(value as string | null)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {admins
                .filter((admin) => admin.value)
                .map((admin) => (
                  <SelectItem key={admin.value} value={admin.value}>
                    {admin.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={!owner}>Transfer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
