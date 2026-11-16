"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

const options = [
  "Dark mode",
  "Motion design",
  "Figma source",
  "Extra revisions",
]

export default function BookingSpecialRequests() {
  const [picked, setPicked] = React.useState<string[]>(["Motion design"])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Special requests</CardTitle>
        <CardDescription>Designali website project · Nov 21–24</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {options.map((o) => (
            <Field key={o} orientation="horizontal">
              <Checkbox
                id={"br-" + o}
                checked={picked.includes(o)}
                onCheckedChange={(c) =>
                  setPicked(c ? [...picked, o] : picked.filter((p) => p !== o))
                }
              />
              <FieldLabel htmlFor={"br-" + o} className="font-normal">
                {o}
              </FieldLabel>
            </Field>
          ))}
        </div>
        <Textarea
          placeholder="Anything else? e.g. a 3D hero for the homepage"
          aria-label="Other requests"
        />
        <p className="text-xs text-muted-foreground">
          Requests depend on availability and aren&apos;t guaranteed.
        </p>
      </CardContent>
    </Card>
  )
}
