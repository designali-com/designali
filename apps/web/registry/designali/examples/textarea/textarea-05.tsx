import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

export default function InvalidTextarea() {
  return (
    <Field data-invalid="true" className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-invalid">Reason for template refund</FieldLabel>
      <Textarea id="ta-invalid" aria-invalid defaultValue="bad" />
      <FieldError>
        Please describe the issue in at least 20 characters.
      </FieldError>
    </Field>
  )
}
