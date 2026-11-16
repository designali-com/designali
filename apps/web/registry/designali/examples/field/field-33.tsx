"use client"

import * as React from "react"
import {
  RotateCcw as RotateCcwIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export default function AutoSlugField() {
  const [title, setTitle] = React.useState("Design se code tak")
  const [slug, setSlug] = React.useState<string | null>(null)
  const value = slug ?? slugify(title)

  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="post-title">Title</FieldLabel>
        <Input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="post-slug">URL slug</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>/blogs/</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            id="post-slug"
            value={value}
            onChange={(e) => setSlug(slugify(e.target.value))}
          />
          {slug !== null && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                aria-label="Reset slug"
                onClick={() => setSlug(null)}
              >
                <RotateCcwIcon />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
        <FieldDescription>
          {slug === null
            ? "Generated from the title."
            : "Custom slug. Reset to follow the title."}
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
