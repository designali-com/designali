import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function DateOfBirthFieldSet() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Date of birth</FieldLegend>
      <div className="grid grid-cols-[1fr_2fr_1.4fr] gap-2">
        <Field>
          <FieldLabel htmlFor="dob-day" className="sr-only">
            Day
          </FieldLabel>
          <NativeSelect id="dob-day" defaultValue="14">
            {Array.from({ length: 31 }, (_, i) => (
              <NativeSelectOption key={i} value={String(i + 1)}>
                {i + 1}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="dob-month" className="sr-only">
            Month
          </FieldLabel>
          <NativeSelect id="dob-month" defaultValue="March">
            {months.map((m) => (
              <NativeSelectOption key={m} value={m}>
                {m}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="dob-year" className="sr-only">
            Year
          </FieldLabel>
          <NativeSelect id="dob-year" defaultValue="1994">
            {Array.from({ length: 60 }, (_, i) => 2008 - i).map((y) => (
              <NativeSelectOption key={y} value={String(y)}>
                {y}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
      </div>
      <FieldDescription>
        You must be at least 18 to open an account.
      </FieldDescription>
    </FieldSet>
  )
}
