import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

export default function HorizontalSettingsTextarea() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="ta-welcome">Welcome message</FieldLabel>
          <FieldDescription>
            Sent automatically when someone joins the workspace.
          </FieldDescription>
        </FieldContent>
        <Textarea
          id="ta-welcome"
          className="sm:min-w-56"
          defaultValue="Welcome to the Designali studio! Start in #introductions and say hi."
        />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="ta-away">Away message</FieldLabel>
          <FieldDescription>
            Shown on your profile while you&apos;re offline.
          </FieldDescription>
        </FieldContent>
        <Textarea
          id="ta-away"
          className="sm:min-w-56"
          placeholder="Back on Monday"
        />
      </Field>
    </FieldGroup>
  )
}
