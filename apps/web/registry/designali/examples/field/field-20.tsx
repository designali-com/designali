import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const codes = [
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+49", label: "🇩🇪 +49" },
  { value: "+61", label: "🇦🇺 +61" },
]

export default function PhoneNumberField() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="phone-number">Mobile number</FieldLabel>
      <div className="flex gap-2">
        <NativeSelect
          aria-label="Country code"
          defaultValue="+44"
          className="w-24"
        >
          {codes.map((c) => (
            <NativeSelectOption key={c.value} value={c.value}>
              {c.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Input
          id="phone-number"
          type="tel"
          inputMode="tel"
          placeholder="7700 900123"
          className="flex-1"
        />
      </div>
      <FieldDescription>Used for two-factor sign-in to designali.com only.</FieldDescription>
    </Field>
  )
}
