import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const options = [
  {
    value: "instant",
    label: "As it happens",
    hint: "One email per notification",
  },
  { value: "daily", label: "Daily digest", hint: "Every morning at 8:00 AM" },
  { value: "weekly", label: "Weekly digest", hint: "Mondays at 8:00 AM" },
  { value: "off", label: "Off", hint: "Only in-app notifications" },
]

export default function NotificationFrequencySettings() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>
          Choose how often we email you about activity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="daily" className="gap-4">
          {options.map((o) => (
            <Field key={o.value} orientation="horizontal">
              <RadioGroupItem value={o.value} id={"freq-" + o.value} />
              <FieldContent>
                <FieldLabel htmlFor={"freq-" + o.value}>{o.label}</FieldLabel>
                <FieldDescription>{o.hint}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
