"use client"

import * as React from "react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

type Reviewer = { id: number; name: string; team: string }

const reviewers: Reviewer[] = [
  { id: 1, name: "Ali Imam", team: "Design engineering" },
  { id: 2, name: "Kofi", team: "Web development" },
  { id: 3, name: "Rina", team: "Brand identity" },
]

export default function ObjectValueSelect() {
  const [reviewer, setReviewer] = React.useState<Reviewer | null>({
    id: 2,
    name: "Kofi",
    team: "Payments",
  })

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="reviewer">Reviewer</FieldLabel>
        <Select
          value={reviewer}
          onValueChange={setReviewer}
          itemToStringLabel={(item: Reviewer) => item.name}
          isItemEqualToValue={(item: Reviewer, value: Reviewer) =>
            item.id === value.id
          }
        >
          <SelectTrigger id="reviewer" className="w-full">
            <SelectValue placeholder="Request a review" />
          </SelectTrigger>
          <SelectContent>
            {reviewers.map((item) => (
              <SelectItem key={item.id} value={item}>
                {item.name}
                <span className="text-muted-foreground">{item.team}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <pre className="bg-muted p-2 font-mono text-[11px]">
        {JSON.stringify(reviewer, null, 2)}
      </pre>
    </div>
  )
}
