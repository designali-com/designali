import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function SignInFormInputs() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your Designali workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="signin-email">Email</FieldLabel>
            <Input
              id="signin-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="signin-password">Password</FieldLabel>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="signin-password"
              type="password"
              autoComplete="current-password"
            />
          </Field>
          <Button className="w-full">Sign in</Button>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
