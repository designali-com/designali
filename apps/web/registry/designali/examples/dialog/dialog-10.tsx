"use client"

import * as React from "react"
import {
  KeyRound as KeyRoundIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
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
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const scopes = [
  { id: "read", label: "Read", description: "List and fetch templates and blocks" },
  { id: "write", label: "Write", description: "Create and update resources" },
  { id: "billing", label: "Billing", description: "View invoices and usage" },
]

export default function CreateApiKeyDialog() {
  const [created, setCreated] = React.useState(false)

  return (
    <Dialog onOpenChange={(open) => !open && setCreated(false)}>
      <DialogTrigger render={<Button variant="outline" />}>
        <KeyRoundIcon data-icon="inline-start" />
        Create API key
      </DialogTrigger>
      <DialogContent>
        {created ? (
          <>
            <DialogHeader>
              <DialogTitle>Save your key</DialogTitle>
              <DialogDescription>
                This is the only time the secret is shown. Store it somewhere
                safe.
              </DialogDescription>
            </DialogHeader>
            <div className="border bg-muted p-3 font-sans break-all">
              key_demo_4zYk
            </div>
            <DialogFooter>
              <DialogClose render={<Button />}>Done</DialogClose>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>New API key</DialogTitle>
              <DialogDescription>
                Keys inherit the permissions you choose below.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="key-name">Name</FieldLabel>
                <Input id="key-name" defaultValue="designali.com production" />
              </Field>
              <FieldSet>
                <FieldLegend variant="label">Scopes</FieldLegend>
                {scopes.map((scope) => (
                  <Field key={scope.id} orientation="horizontal">
                    <Checkbox
                      id={"scope-" + scope.id}
                      defaultChecked={scope.id === "read"}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor={"scope-" + scope.id}>
                        {scope.label}
                      </FieldLabel>
                      <FieldDescription>{scope.description}</FieldDescription>
                    </FieldContent>
                  </Field>
                ))}
              </FieldSet>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Cancel
              </DialogClose>
              <Button onClick={() => setCreated(true)}>Create key</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
