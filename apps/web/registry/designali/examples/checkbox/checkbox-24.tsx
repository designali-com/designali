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
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Progress } from "@workspace/ui/components/progress"

const items = [
  "Passport",
  "Phone charger",
  "Rain jacket",
  "Hiking boots",
  "Sunscreen",
  "Travel adapter",
]

export default function PackingChecklistProgress() {
  const [packed, setPacked] = React.useState<string[]>([
    "Passport",
    "Phone charger",
  ])
  const percent = Math.round((packed.length / items.length) * 100)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Lisbon trip · Packing</CardTitle>
        <CardDescription>
          {packed.length} of {items.length} packed
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Progress value={percent} aria-label="Packing progress" />
        <FieldGroup className="gap-2.5">
          {items.map((item) => (
            <Field key={item} orientation="horizontal">
              <Checkbox
                id={"pack-" + item}
                checked={packed.includes(item)}
                onCheckedChange={(checked) =>
                  setPacked((list) =>
                    checked ? [...list, item] : list.filter((i) => i !== item)
                  )
                }
              />
              <FieldLabel htmlFor={"pack-" + item} className="font-normal">
                {item}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
