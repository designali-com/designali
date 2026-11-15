"use client"

import { PaperclipIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"

export default function SupportTicketForm() {
  return (
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="st-subject">Subject</FieldLabel>
          <Input id="st-subject" placeholder="Can't export invoices to CSV" />
        </Field>
        <Field>
          <FieldLabel htmlFor="st-body">Describe the problem</FieldLabel>
          <Textarea
            id="st-body"
            className="min-h-28"
            placeholder="Steps to reproduce, what you expected, what happened…"
          />
          <FieldDescription>Include any error codes you saw.</FieldDescription>
        </Field>
        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" size="sm">
            <PaperclipIcon data-icon="inline-start" />
            Attach
          </Button>
          <Button type="submit" size="sm">
            Submit ticket
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}
