import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function RememberDeviceLogin() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Two-factor authentication</CardTitle>
        <CardDescription>
          Enter the 6-digit code from your authenticator app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="otp-code">Code</FieldLabel>
            <Input
              id="otp-code"
              inputMode="numeric"
              placeholder="000000"
              className="font-sans tracking-widest"
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="remember-device" name="remember" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="remember-device">
                Remember this device
              </FieldLabel>
              <FieldDescription>
                Skip verification here for 30 days.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Button type="submit">Verify</Button>
        </form>
      </CardContent>
    </Card>
  )
}
