import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const zones = [
  { label: "Your time", value: "Mar 14, 2025 · 2:08 PM" },
  { label: "UTC", value: "Mar 14, 2025 · 6:08 PM" },
  { label: "Tokyo", value: "Mar 15, 2025 · 3:08 AM" },
]

export default function RelativeTimestampHoverCard() {
  return (
    <p className="text-sm text-muted-foreground">
      Last edited by Ali Imam{" "}
      <HoverCard>
        <HoverCardTrigger
          render={
            <time
              dateTime="2025-03-14T18:08:00Z"
              className="cursor-default underline decoration-dotted underline-offset-4"
            />
          }
        >
          3 hours ago
        </HoverCardTrigger>
        <HoverCardContent className="w-60">
          <div className="flex flex-col gap-1">
            {zones.map((z) => (
              <div key={z.label} className="flex justify-between gap-3">
                <span className="text-muted-foreground">{z.label}</span>
                <span className="font-mono">{z.value}</span>
              </div>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}
