import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Tell us what Designali should design or build.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Tell Designali about your project." />
    </Field>
  )
}