import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function ResponsiveFieldOrientation() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel>Start of week</FieldLabel>
          <FieldDescription>Used in calendars and reports.</FieldDescription>
        </FieldContent>
        <RadioGroup
          defaultValue="monday"
          className="flex w-auto gap-4"
          aria-label="Start of week"
        >
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="sunday" id="week-sunday" />
            <FieldLabel htmlFor="week-sunday" className="font-normal">
              Sunday
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="monday" id="week-monday" />
            <FieldLabel htmlFor="week-monday" className="font-normal">
              Monday
            </FieldLabel>
          </Field>
        </RadioGroup>
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel>Time format</FieldLabel>
          <FieldDescription>How times appear across the app.</FieldDescription>
        </FieldContent>
        <RadioGroup
          defaultValue="12h"
          className="flex w-auto gap-4"
          aria-label="Time format"
        >
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="12h" id="time-12h" />
            <FieldLabel htmlFor="time-12h" className="font-normal">
              1:00 PM
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="24h" id="time-24h" />
            <FieldLabel htmlFor="time-24h" className="font-normal">
              13:00
            </FieldLabel>
          </Field>
        </RadioGroup>
      </Field>
    </FieldGroup>
  )
}
