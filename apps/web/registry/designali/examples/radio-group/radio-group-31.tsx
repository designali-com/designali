import {
  KeyRound as KeyRoundIcon,
  MessageSquare as MessageSquareIcon,
  ShieldCheck as ShieldCheckIcon,
  Smartphone as SmartphoneIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const methods = [
  {
    value: "app",
    label: "Authenticator app",
    hint: "Use a code from an app on your phone.",
    icon: SmartphoneIcon,
    recommended: true,
  },
  {
    value: "key",
    label: "Security key",
    hint: "Tap a hardware key to sign in.",
    icon: KeyRoundIcon,
    recommended: false,
  },
  {
    value: "sms",
    label: "Text message",
    hint: "Receive a code at +1 ••• ••• 0192.",
    icon: MessageSquareIcon,
    recommended: false,
  },
]

export default function TwoFactorMethodChoice() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4" />
          Two-factor authentication
        </CardTitle>
        <CardDescription>
          Pick how you&apos;ll verify it&apos;s you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="app">
          {methods.map((m) => (
            <FieldLabel key={m.value} htmlFor={"tfa-" + m.value}>
              <Field orientation="horizontal">
                <RadioGroupItem value={m.value} id={"tfa-" + m.value} />
                <FieldContent>
                  <FieldTitle>
                    {m.label}
                    {m.recommended && (
                      <Badge variant="secondary">Recommended</Badge>
                    )}
                  </FieldTitle>
                  <FieldDescription>{m.hint}</FieldDescription>
                </FieldContent>
                <m.icon className="size-4 text-muted-foreground" />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
