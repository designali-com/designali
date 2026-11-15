"use client"

import * as React from "react"
import { CalendarXIcon } from "lucide-react"

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
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

export default function CancelEventNotifyGuests() {
  const [notify, setNotify] = React.useState(true)

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <CalendarXIcon data-icon="inline-start" />
        Cancel event
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Cancel &quot;Quarterly planning&quot;?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Thu, Sep 12 - 10:00-11:30 AM - 12 guests
          </AlertDialogDescription>
        </AlertDialogHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="notify-guests" className="flex-1">
              Email guests about the cancellation
            </FieldLabel>
            <Switch
              id="notify-guests"
              checked={notify}
              onCheckedChange={setNotify}
            />
          </Field>
          {notify && (
            <Field>
              <FieldLabel htmlFor="cancel-note">Message (optional)</FieldLabel>
              <Textarea
                id="cancel-note"
                placeholder="We'll reschedule after the offsite."
                className="min-h-16"
              />
            </Field>
          )}
        </FieldGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep event</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            {notify ? "Cancel and notify" : "Cancel event"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
