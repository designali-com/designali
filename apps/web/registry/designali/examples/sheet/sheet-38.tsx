"use client"

import * as React from "react"
import { CopyIcon, KeyIcon, TriangleAlertIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const scopes = [
  "read:projects",
  "write:projects",
  "read:billing",
  "admin:members",
]

export default function CreateApiKeySheet() {
  const [key, setKey] = React.useState<string | null>(null)
  return (
    <Sheet onOpenChange={(open) => open && setKey(null)}>
      <SheetTrigger render={<Button />}>
        <KeyIcon data-icon="inline-start" />
        New API key
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{key ? "Copy your key" : "Create API key"}</SheetTitle>
          <SheetDescription>
            {key
              ? "This is the only time the full key will be shown."
              : "Keys inherit the permissions you choose here."}
          </SheetDescription>
        </SheetHeader>
        {key ? (
          <div className="flex flex-col gap-3 px-4">
            <div className="flex gap-2">
              <Input readOnly value={key} className="font-mono" />
              <Button variant="outline" size="icon" aria-label="Copy key">
                <CopyIcon />
              </Button>
            </div>
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <TriangleAlertIcon className="size-3.5" />
              Store it in a secret manager, not in source control.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel htmlFor="key-name">Name</FieldLabel>
              <Input id="key-name" defaultValue="ci-runner" />
            </Field>
            <div className="flex flex-col gap-2">
              <span className="font-medium">Scopes</span>
              {scopes.map((scope, i) => (
                <Label key={scope} className="gap-2 font-mono font-normal">
                  <Checkbox defaultChecked={i < 2} />
                  {scope}
                </Label>
              ))}
            </div>
          </div>
        )}
        <SheetFooter>
          {key ? (
            <SheetClose render={<Button />}>Done</SheetClose>
          ) : (
            <Button onClick={() => setKey("key_demo_8nZ3")}>
              Generate key
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
