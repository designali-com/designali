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

const countries = [
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "DE", dial: "+49" },
  { code: "IN", dial: "+91" },
]

export default function PhoneCountryInput() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="phone">Mobile number</FieldLabel>
      <div className="flex gap-2">
        <NativeSelect
          aria-label="Country code"
          defaultValue="+1"
          className="w-24"
        >
          {countries.map((c) => (
            <NativeSelectOption key={c.code} value={c.dial}>
              {c.code} {c.dial}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel-national"
          placeholder="(555) 014-2290"
        />
      </div>
      <FieldDescription>Used for designali.com two-factor codes only.</FieldDescription>
    </Field>
  )
}
