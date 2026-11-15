import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Spinner } from "@workspace/ui/components/spinner"

const events = [
  "Lena merged feature/billing-portal",
  "Omar opened issue #812",
  "CI passed on main",
  "Sana requested review on #809",
  "Release v2.14.0 published",
]

export default function InfiniteScrollFooter() {
  return (
    <ScrollArea className="h-56 w-full max-w-sm border">
      <ul className="divide-y">
        {events.map((event) => (
          <li key={event} className="px-4 py-3 text-sm">
            {event}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-2 border-t py-3 text-xs text-muted-foreground">
        <Spinner className="size-3.5" />
        Loading older activity
      </div>
    </ScrollArea>
  )
}
