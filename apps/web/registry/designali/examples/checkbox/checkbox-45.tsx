import {
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
  Phone as PhoneIcon,
} from "@designali/icons"

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
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"

const channels = [
  {
    id: "email",
    icon: MailIcon,
    label: "Email",
    description: "Designali news and monthly design tips.",
  },
  {
    id: "sms",
    icon: MessageSquareIcon,
    label: "Text messages",
    description: "Project updates and template launches.",
  },
  {
    id: "phone",
    icon: PhoneIcon,
    label: "Phone calls",
    description: "Occasional account check-ins.",
  },
]

export default function MarketingConsentCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Stay in touch</CardTitle>
        <CardDescription>
          Choose how Designali may contact you.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FieldGroup className="gap-3">
          {channels.map((channel) => (
            <Field key={channel.id} orientation="horizontal">
              <Checkbox
                id={"consent-" + channel.id}
                name="consent"
                value={channel.id}
                defaultChecked={channel.id === "email"}
              />
              <FieldContent>
                <FieldLabel htmlFor={"consent-" + channel.id}>
                  <channel.icon className="size-3.5" />
                  {channel.label}
                </FieldLabel>
                <FieldDescription>{channel.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          You can withdraw consent at any time from your account settings.
          Message and data rates may apply.
        </p>
      </CardContent>
    </Card>
  )
}
