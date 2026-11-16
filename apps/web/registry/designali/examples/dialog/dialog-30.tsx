"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AsyncSaveDialog() {
  const [open, setOpen] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  function handleSave() {
    setSaving(true)
    window.setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setOpen(false)
    }, 1400)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Dialog open={open} onOpenChange={(next) => !saving && setOpen(next)}>
        <DialogTrigger
          render={<Button variant="outline" />}
          onClick={() => setSaved(false)}
        >
          Edit store details
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              handleSave()
            }}
            className="flex flex-col gap-4"
          >
            <DialogHeader>
              <DialogTitle>Store details</DialogTitle>
              <DialogDescription>
                Shown on receipts and order emails.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="store-name">Store name</FieldLabel>
                <Input
                  id="store-name"
                  defaultValue="Designali"
                  disabled={saving}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="store-email">Support email</FieldLabel>
                <Input
                  id="store-email"
                  type="email"
                  defaultValue="support@designali.com"
                  disabled={saving}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <Button type="submit" disabled={saving}>
                {saving && <Spinner data-icon="inline-start" />}
                {saving ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {saved && (
        <p className="flex items-center gap-1 text-muted-foreground">
          <CircleCheckIcon className="size-3.5" />
          Store details updated
        </p>
      )}
    </div>
  )
}
