import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const frequencies = [
  { label: "Instantly", value: "instant" },
  { label: "Hourly digest", value: "hourly" },
  { label: "Daily digest", value: "daily" },
  { label: "Never", value: "never" },
]

const channels = [
  {
    title: "Mentions",
    description: "When someone @mentions you",
    value: "instant",
  },
  {
    title: "Comments",
    description: "Replies on threads you follow",
    value: "hourly",
  },
  {
    title: "Product updates",
    description: "New features and changelog",
    value: "never",
  },
]

export default function NotificationSettingsSelects() {
  return (
    <FieldGroup className="w-full max-w-md">
      {channels.map((channel) => (
        <Field key={channel.title} orientation="horizontal">
          <FieldContent>
            <FieldTitle>{channel.title}</FieldTitle>
            <FieldDescription>{channel.description}</FieldDescription>
          </FieldContent>
          <Select items={frequencies} defaultValue={channel.value}>
            <SelectTrigger
              size="sm"
              className="w-32"
              aria-label={channel.title + " frequency"}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {frequencies.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      ))}
    </FieldGroup>
  )
}
