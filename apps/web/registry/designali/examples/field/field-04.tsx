import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ProfileSettingsFields() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="profile-name">Display name</FieldLabel>
          <Input id="profile-name" defaultValue="Ali Imam" />
        </Field>
        <Field>
          <FieldLabel htmlFor="profile-username">Username</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>designali.com/</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="profile-username" defaultValue="aliimam" />
          </InputGroup>
          <FieldDescription>
            Your public profile URL. You can change it once every 30 days.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="profile-bio">Bio</FieldLabel>
          <Textarea
            id="profile-bio"
            rows={3}
            placeholder="Design engineer building Designali..."
            className="resize-none"
          />
          <FieldDescription>
            Shown on your profile and in comments.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Save profile</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
