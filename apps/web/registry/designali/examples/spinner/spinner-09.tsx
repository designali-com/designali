"use client"

import * as React from "react"
import { CheckIcon, XIcon } from "lucide-react"

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
import { Spinner } from "@workspace/ui/components/spinner"

const taken = ["admin", "maya", "support"]

export default function UsernameAvailabilityCheck() {
  const [value, setValue] = React.useState("maya.chen")
  const [checking, setChecking] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleChange = (next: string) => {
    setValue(next)
    clearTimeout(timer.current)
    setChecking(Boolean(next))
    timer.current = setTimeout(() => setChecking(false), 700)
  }

  const available = !taken.includes(value.toLowerCase())

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="username"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          {checking ? (
            <Spinner />
          ) : value ? (
            available ? (
              <CheckIcon className="text-emerald-600 dark:text-emerald-400" />
            ) : (
              <XIcon className="text-destructive" />
            )
          ) : null}
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        {checking
          ? "Checking availability..."
          : value && !available
            ? "That username is taken."
            : "Try typing admin to see a conflict."}
      </FieldDescription>
    </Field>
  )
}
