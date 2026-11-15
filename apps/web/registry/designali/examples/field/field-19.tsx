import { KeyRoundIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function SignInWithSeparator() {
  return (
    <form className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <Button variant="outline" type="button">
            <KeyRoundIcon data-icon="inline-start" />
            Continue with passkey
          </Button>
        </Field>
        <FieldSeparator>Or continue with email</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="signin-email">Email</FieldLabel>
          <Input id="signin-email" type="email" placeholder="you@studio.com" />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="signin-password">Password</FieldLabel>
            <a
              href="#"
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Forgot?
            </a>
          </div>
          <Input id="signin-password" type="password" />
        </Field>
        <Field>
          <Button type="submit">Sign in</Button>
          <FieldDescription className="text-center">
            No account? <a href="#">Create one</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
