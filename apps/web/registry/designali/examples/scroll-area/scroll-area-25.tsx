import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const emails = [
  {
    from: "Parcel",
    subject: "Your order has shipped",
    preview: "Track package #PX-4421 on the way",
    unread: true,
  },
  {
    from: "Maya Chen",
    subject: "Roadmap feedback",
    preview: "Left a few comments on the Q3 doc",
    unread: true,
  },
  {
    from: "Fieldnote",
    subject: "Weekly digest",
    preview: "12 new notes across 4 projects",
    unread: false,
  },
  {
    from: "Leo Park",
    subject: "Invoice #2041",
    preview: "Payment received, thanks!",
    unread: false,
  },
  {
    from: "Security",
    subject: "New sign-in",
    preview: "Firefox on macOS from Lisbon",
    unread: true,
  },
  {
    from: "Ines Duarte",
    subject: "Crit notes",
    preview: "Summary from today's design crit",
    unread: false,
  },
  {
    from: "Calendar",
    subject: "Offsite next week",
    preview: "Reminder: travel details inside",
    unread: false,
  },
]

export default function InboxUnreadList() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col divide-y">
        {emails.map((e) => (
          <a
            key={e.subject}
            href="#"
            className="flex flex-col gap-0.5 px-4 py-3 hover:bg-muted/60"
          >
            <div className="flex items-center gap-2 text-xs">
              {e.unread && (
                <span className="size-1.5 rounded-full bg-primary" />
              )}
              <span
                className={cn(
                  "flex-1 truncate",
                  e.unread ? "font-semibold" : "text-muted-foreground"
                )}
              >
                {e.from}
              </span>
            </div>
            <span className={cn("truncate text-xs", e.unread && "font-medium")}>
              {e.subject}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {e.preview}
            </span>
          </a>
        ))}
      </div>
    </ScrollArea>
  )
}
