"use client"

import * as React from "react"
import {
  AtSign as AtSignIcon,
  CircleCheck as CircleCheckIcon,
  CircleX as CircleXIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"

const taken = ["admin", "maya", "support"]

export default function UsernameAvailabilityInput() {
  const [value, setValue] = React.useState("ali")
  const [status, setStatus] = React.useState<
    "idle" | "checking" | "available" | "taken"
  >("taken")

  React.useEffect(() => {
    if (!value) return
    const start = setTimeout(() => setStatus("checking"), 0)
    const done = setTimeout(
      () =>
        setStatus(taken.includes(value.toLowerCase()) ? "taken" : "available"),
      700
    )
    return () => {
      clearTimeout(start)
      clearTimeout(done)
    }
  }, [value])

  return (
    <Field data-invalid={status === "taken"} className="w-full max-w-sm">
      <FieldLabel htmlFor="username-check">Username</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <AtSignIcon />
        </InputGroupAddon>
        <InputGroupInput
          id="username-check"
          value={value}
          aria-invalid={status === "taken"}
          onChange={(e) => setValue(e.target.value.replace(/\s/g, ""))}
        />
        <InputGroupAddon align="inline-end">
          {status === "checking" && <Spinner />}
          {status === "available" && (
            <CircleCheckIcon className="text-emerald-600" />
          )}
          {status === "taken" && <CircleXIcon className="text-destructive" />}
        </InputGroupAddon>
      </InputGroup>
      {status === "taken" ? (
        <FieldError>@{value} is already taken.</FieldError>
      ) : (
        <FieldDescription>
          Letters, numbers, and underscores only.
        </FieldDescription>
      )}
    </Field>
  )
}
