import {
  Bell as BellIcon,
  Mail as MailIcon,
  MessageSquareText as MessageSquareTextIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const events = [
  { name: "Mentions", defaults: ["email", "push"] },
  { name: "New comments", defaults: ["push"] },
  { name: "Weekly digest", defaults: ["email"] },
  { name: "Security alerts", defaults: ["email", "push", "sms"] },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="flex w-full max-w-md flex-col divide-y border">
      {events.map((event) => (
        <div
          key={event.name}
          className="flex items-center justify-between gap-3 px-3 py-2"
        >
          <span className="text-sm">{event.name}</span>
          <ToggleGroup
            multiple
            size="sm"
            variant="outline"
            spacing={0}
            defaultValue={event.defaults}
          >
            <ToggleGroupItem value="email" aria-label="Email">
              <MailIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="push" aria-label="Push">
              <BellIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="sms" aria-label="SMS">
              <MessageSquareTextIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}
