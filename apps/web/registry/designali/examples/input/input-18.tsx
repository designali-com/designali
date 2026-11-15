import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function DateTimeInputs() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Schedule post</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="post-date">Date</FieldLabel>
          <Input id="post-date" type="date" defaultValue="2025-04-18" />
        </Field>
        <Field>
          <FieldLabel htmlFor="post-time">Time</FieldLabel>
          <Input id="post-time" type="time" defaultValue="09:30" />
        </Field>
      </div>
      <FieldDescription>Times are shown in Pacific Time (PT).</FieldDescription>
    </FieldSet>
  )
}
