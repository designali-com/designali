import { Input } from "@workspace/ui/components/input"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="aliimam"
      />
      <FieldDescription>
        Your profile will live at designali.com/@username.
      </FieldDescription>
    </Field>
  )
}
