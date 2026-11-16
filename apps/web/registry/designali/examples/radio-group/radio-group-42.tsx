"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function NamedRadioFormSubmit() {
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(String(data.get("contact") ?? ""))
      }}
    >
      <FieldSet>
        <FieldLegend variant="label">Preferred contact method</FieldLegend>
        <RadioGroup name="contact" defaultValue="email" required>
          <Field orientation="horizontal">
            <RadioGroupItem value="email" id="contact-email" />
            <FieldLabel htmlFor="contact-email" className="font-normal">
              Email
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="phone" id="contact-phone" />
            <FieldLabel htmlFor="contact-phone" className="font-normal">
              Phone call
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="none" id="contact-none" />
            <FieldLabel htmlFor="contact-none" className="font-normal">
              Don&apos;t contact me
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <div className="flex items-center gap-3">
        <Button type="submit" size="sm">
          Save preference
        </Button>
        {result && (
          <span className="font-sans text-xs text-muted-foreground">
            contact=&quot;{result}&quot;
          </span>
        )}
      </div>
    </form>
  )
}
