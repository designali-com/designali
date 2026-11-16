"use client"

import * as React from "react"
import {
  Rocket as RocketIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"

const steps = [
  { id: "tests", label: "All CI checks passed", hint: "142 tests, 0 failures" },
  {
    id: "migrations",
    label: "Database migrations reviewed",
    hint: "2 pending migrations",
  },
  { id: "changelog", label: "Changelog updated", hint: "v4.8.0" },
  {
    id: "oncall",
    label: "On-call engineer notified",
    hint: "Ali is on call",
  },
]

export default function DeployChecklistGate() {
  const [done, setDone] = React.useState<string[]>(["tests"])
  const ready = done.length === steps.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <FieldGroup className="gap-0 border">
        {steps.map((step) => (
          <Field
            key={step.id}
            orientation="horizontal"
            className="border-b px-3 py-2.5 last:border-b-0"
          >
            <FieldContent>
              <FieldLabel htmlFor={"deploy-" + step.id}>
                {step.label}
              </FieldLabel>
              <FieldDescription>{step.hint}</FieldDescription>
            </FieldContent>
            <Checkbox
              id={"deploy-" + step.id}
              checked={done.includes(step.id)}
              onCheckedChange={(checked) =>
                setDone((list) =>
                  checked
                    ? [...list, step.id]
                    : list.filter((s) => s !== step.id)
                )
              }
            />
          </Field>
        ))}
      </FieldGroup>
      <Button disabled={!ready}>
        <RocketIcon data-icon="inline-start" />
        {ready
          ? "Deploy designali.com"
          : done.length + "/" + steps.length + " checks complete"}
      </Button>
    </div>
  )
}
