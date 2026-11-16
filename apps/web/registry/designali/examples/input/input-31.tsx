"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

export default function WorkspaceSlugInput() {
  const [slug, setSlug] = React.useState("ali-imam")

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="slug">Workspace URL</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>designali.com/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="slug"
          value={slug}
          onChange={(e) =>
            setSlug(
              e.target.value
                .toLowerCase()
                .replace(/[^a-z0-9-]+/g, "-")
                .replace(/^-+/, "")
            )
          }
          className="ps-0.5"
        />
      </InputGroup>
      <FieldDescription>
        Lowercase letters, numbers, and dashes.
      </FieldDescription>
    </Field>
  )
}
