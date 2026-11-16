import { Checkbox } from "@workspace/ui/components/checkbox"

const channels = ["Email", "Push", "SMS"]
const events = [
  { id: "mentions", label: "Mentions", defaults: ["Email", "Push"] },
  { id: "comments", label: "Client comments", defaults: ["Push"] },
  { id: "invoices", label: "Designali invoices", defaults: ["Email"] },
  {
    id: "security",
    label: "Security alerts",
    defaults: ["Email", "Push", "SMS"],
  },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="w-full max-w-md border">
      <div className="grid grid-cols-[1fr_repeat(3,3.5rem)] border-b bg-muted/40 px-3 py-2 text-xs font-medium">
        <span>Event</span>
        {channels.map((channel) => (
          <span key={channel} className="text-center">
            {channel}
          </span>
        ))}
      </div>
      {events.map((event) => (
        <div
          key={event.id}
          className="grid grid-cols-[1fr_repeat(3,3.5rem)] items-center border-b px-3 py-2.5 last:border-b-0"
        >
          <span className="text-sm">{event.label}</span>
          {channels.map((channel) => (
            <div key={channel} className="flex justify-center">
              <Checkbox
                aria-label={event.label + " via " + channel}
                name={event.id}
                value={channel}
                defaultChecked={event.defaults.includes(channel)}
                disabled={event.id === "security" && channel === "Email"}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
