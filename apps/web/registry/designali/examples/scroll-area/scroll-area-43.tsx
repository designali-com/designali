import { AudioLinesIcon } from "lucide-react"

import { ScrollArea } from "@workspace/ui/components/scroll-area"

const lines = [
  [
    "00:12",
    "Sana",
    "Thanks everyone for joining. Let's start with the launch status.",
  ],
  [
    "00:31",
    "Jonas",
    "Checkout is feature complete. QA found two minor issues.",
  ],
  [
    "01:05",
    "Priya",
    "Marketing assets are ready; the landing page goes live Tuesday.",
  ],
  ["01:42", "Sana", "Do we have a rollback plan if conversions drop?"],
  ["02:10", "Jonas", "Yes, the flag lets us revert to the old flow instantly."],
  [
    "02:38",
    "Luca",
    "Support has macros prepared for the most likely questions.",
  ],
  ["03:04", "Priya", "I'll share the launch email draft by end of day."],
  ["03:30", "Sana", "Great. Let's reconvene Thursday for a go or no-go."],
]

export default function MeetingTranscript() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="flex items-center gap-2 text-sm font-medium">
          <AudioLinesIcon className="size-4" />
          Launch sync
        </span>
        <span className="text-xs text-muted-foreground">32 min</span>
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-3 p-3">
          {lines.map(([time, speaker, text], i) => (
            <div key={i} className="flex gap-3 text-xs">
              <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground">
                {time}
              </span>
              <p>
                <span className="font-medium">{speaker}:</span>{" "}
                <span className="text-muted-foreground">{text}</span>
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
