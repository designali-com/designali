import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

export default function EmailDigestFieldSet() {
  return (
    <FieldSet className="w-full max-w-sm border p-4">
      <FieldLegend>Daily digest includes</FieldLegend>
      <FieldDescription>Sent at 7:00 AM in your time zone.</FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-tasks" className="font-normal">
            Tasks due today
          </FieldLabel>
          <Switch id="digest-tasks" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-overdue" className="font-normal">
            Overdue tasks
          </FieldLabel>
          <Switch id="digest-overdue" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-activity" className="font-normal">
            Team activity
          </FieldLabel>
          <Switch id="digest-activity" />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-calendar" className="font-normal">
            Calendar events
          </FieldLabel>
          <Switch id="digest-calendar" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
