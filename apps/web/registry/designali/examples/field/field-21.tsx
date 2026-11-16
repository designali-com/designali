import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const errors = [
  { message: "Username must be at least 4 characters." },
  { message: "Only lowercase letters, numbers, and dashes are allowed." },
  { message: "Username must be at least 4 characters." },
]

export default function MultipleErrorsField() {
  return (
    <Field data-invalid="true" className="w-full max-w-xs">
      <FieldLabel htmlFor="handle-errors">designali.com handle</FieldLabel>
      <Input id="handle-errors" defaultValue="D_" aria-invalid="true" />
      <FieldError errors={errors} />
    </Field>
  )
}
