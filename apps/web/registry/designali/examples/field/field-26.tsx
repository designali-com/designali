"use client"

import * as React from "react"
import { PlusIcon, XIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function TeamInviteRows() {
  const [rows, setRows] = React.useState([{ id: 1 }, { id: 2 }])

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Invite teammates</FieldLegend>
      <FieldDescription>
        They&apos;ll get an email with a link to join Orbit Analytics.
      </FieldDescription>
      <FieldGroup className="gap-2">
        {rows.map((row, index) => (
          <Field key={row.id} orientation="horizontal">
            <FieldLabel htmlFor={"invite-" + row.id} className="sr-only">
              Email {index + 1}
            </FieldLabel>
            <Input
              id={"invite-" + row.id}
              type="email"
              placeholder="name@company.com"
              className="flex-1"
            />
            <NativeSelect
              aria-label={"Role " + (index + 1)}
              defaultValue="member"
              className="w-28"
            >
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="member">Member</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Remove row"
              disabled={rows.length === 1}
              onClick={() => setRows(rows.filter((r) => r.id !== row.id))}
            >
              <XIcon />
            </Button>
          </Field>
        ))}
      </FieldGroup>
      <Field orientation="horizontal">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setRows([...rows, { id: Date.now() }])}
        >
          <PlusIcon data-icon="inline-start" />
          Add another
        </Button>
        <Button type="submit" size="sm">
          Send invites
        </Button>
      </Field>
    </FieldSet>
  )
}
