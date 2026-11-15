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
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

const channels = [
  {
    id: "mentions",
    label: "Mentions",
    description: "When someone @mentions you in a comment.",
    on: true,
  },
  {
    id: "digest",
    label: "Weekly digest",
    description: "A Monday summary of project activity.",
    on: true,
  },
  {
    id: "billing",
    label: "Billing alerts",
    description: "Failed payments and upcoming renewals.",
    on: false,
  },
  {
    id: "product",
    label: "Product updates",
    description: "New features and occasional tips.",
    on: false,
  },
]

export default function NotificationSettingsCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>Choose what lands in your inbox.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {channels.map((c) => (
          <Field key={c.id} orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor={c.id}>{c.label}</FieldLabel>
              <FieldDescription>{c.description}</FieldDescription>
            </FieldContent>
            <Switch id={c.id} defaultChecked={c.on} />
          </Field>
        ))}
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Reset
        </Button>
        <Button size="sm">Save preferences</Button>
      </CardFooter>
    </Card>
  )
}
