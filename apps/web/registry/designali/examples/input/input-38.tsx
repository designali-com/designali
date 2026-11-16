"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function ProfileSettingsCardInputs() {
  const initial = { name: "Ali Imam", title: "Founder, Design Engineer" }
  const [form, setForm] = React.useState(initial)
  const dirty = form.name !== initial.name || form.title !== initial.title

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          This is how others see you across the workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="pf-name">Full name</FieldLabel>
            <Input
              id="pf-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="pf-title">Job title</FieldLabel>
            <Input
              id="pf-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Field>
          <Field data-disabled>
            <FieldLabel htmlFor="pf-email">Email</FieldLabel>
            <Input id="pf-email" disabled value="ali@designali.com" />
            <FieldDescription>
              Managed by your identity provider.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button
          variant="ghost"
          disabled={!dirty}
          onClick={() => setForm(initial)}
        >
          Reset
        </Button>
        <Button disabled={!dirty}>Save changes</Button>
      </CardFooter>
    </Card>
  )
}
