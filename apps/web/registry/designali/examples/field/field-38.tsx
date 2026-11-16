import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function RequiredAndOptionalLabels() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="ro-company">
          Company{" "}
          <span className="text-destructive" aria-hidden="true">
            *
          </span>
        </FieldLabel>
        <Input
          id="ro-company"
          required
          aria-required="true"
          placeholder="Designali"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="ro-team-size">
          Team size{" "}
          <span className="text-destructive" aria-hidden="true">
            *
          </span>
        </FieldLabel>
        <NativeSelect id="ro-team-size" required defaultValue="">
          <NativeSelectOption value="" disabled>
            Select a range
          </NativeSelectOption>
          <NativeSelectOption value="1-10">1–10</NativeSelectOption>
          <NativeSelectOption value="11-50">11–50</NativeSelectOption>
          <NativeSelectOption value="51+">51+</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field>
        <FieldLabel htmlFor="ro-referral">
          How did you hear about us?{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </FieldLabel>
        <Input id="ro-referral" placeholder="Podcast, friend, search..." />
      </Field>
      <FieldDescription>
        <span className="text-destructive">*</span> Required fields
      </FieldDescription>
    </FieldGroup>
  )
}
