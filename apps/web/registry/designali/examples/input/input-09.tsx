"use client"

import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function PasswordVisibilityInput() {
  const [visible, setVisible] = React.useState(false)

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="password-toggle">Password</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="password-toggle"
          type={visible ? "text" : "password"}
          defaultValue="correct-horse-battery"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
