import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function HorizontalSettingsInputs() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
          <FieldDescription>Shown in emails and the sidebar.</FieldDescription>
        </FieldContent>
        <Input id="ws-name" defaultValue="Designali" className="w-40" />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="ws-timeout">Session timeout</FieldLabel>
          <FieldDescription>
            Minutes of inactivity before sign-out.
          </FieldDescription>
        </FieldContent>
        <Input
          id="ws-timeout"
          type="number"
          defaultValue={30}
          className="w-40"
        />
      </Field>
    </FieldGroup>
  )
}
