"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"

const acknowledgements = [
  "All Designali projects and files will be permanently deleted.",
  "Active subscriptions will be cancelled without refund.",
  "This action cannot be undone.",
]

export default function DeleteAccountConfirm() {
  const [acked, setAcked] = React.useState<number[]>([])

  return (
    <Card className="w-full max-w-sm ring-destructive/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <TriangleAlertIcon className="size-4" />
          Delete workspace
        </CardTitle>
        <CardDescription>
          Confirm you understand what happens next.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3">
          {acknowledgements.map((text, index) => (
            <Field key={text} orientation="horizontal">
              <Checkbox
                id={"ack-" + index}
                checked={acked.includes(index)}
                onCheckedChange={(checked) =>
                  setAcked((list) =>
                    checked ? [...list, index] : list.filter((i) => i !== index)
                  )
                }
              />
              <FieldLabel htmlFor={"ack-" + index} className="font-normal">
                {text}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="border-t">
        <Button
          variant="destructive"
          className="w-full"
          disabled={acked.length < acknowledgements.length}
        >
          <Trash2Icon data-icon="inline-start" />
          Delete workspace
        </Button>
      </CardFooter>
    </Card>
  )
}
