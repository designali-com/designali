"use client"

import * as React from "react"
import { Trash2Icon, TriangleAlertIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const workspace = "acme-marketing"

export default function DangerZoneCard() {
  const [value, setValue] = React.useState("")

  return (
    <Card className="w-full max-w-sm ring-destructive/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <TriangleAlertIcon className="size-4" />
          Delete workspace
        </CardTitle>
        <CardDescription>
          This permanently removes 38 projects, 1,204 files and all member
          access. This can&apos;t be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="confirm-name">
            Type <code className="bg-muted px-1 font-mono">{workspace}</code> to
            confirm
          </FieldLabel>
          <Input
            id="confirm-name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
          />
        </Field>
      </CardContent>
      <CardFooter className="justify-end bg-destructive/5">
        <Button variant="destructive" disabled={value !== workspace}>
          <Trash2Icon data-icon="inline-start" />
          Delete forever
        </Button>
      </CardFooter>
    </Card>
  )
}
