import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const weeks = [
  { label: "W1", value: 120, change: "+4%" },
  { label: "W2", value: 180, change: "+50%" },
  { label: "W3", value: 150, change: "−17%" },
  { label: "W4", value: 220, change: "+47%" },
  { label: "W5", value: 260, change: "+18%" },
]

export default function ChartBarHoverCard() {
  const max = Math.max(...weeks.map((w) => w.value))

  return (
    <div className="w-full max-w-xs">
      <p className="mb-3 text-sm font-medium">Weekly designali.com signups</p>
      <div className="flex h-36 items-end gap-3 border-b">
        {weeks.map((w) => (
          <HoverCard key={w.label}>
            <HoverCardTrigger
              delay={0}
              closeDelay={0}
              render={
                <div
                  className="flex-1 cursor-default bg-primary/80 hover:bg-primary"
                  style={{ height: (w.value / max) * 100 + "%" }}
                />
              }
            />
            <HoverCardContent side="top" className="w-36">
              <p className="text-muted-foreground">Week {w.label.slice(1)}</p>
              <p className="text-base font-semibold">{w.value} signups</p>
              <p
                className={
                  w.change.startsWith("+")
                    ? "text-primary"
                    : "text-destructive"
                }
              >
                {w.change} WoW
              </p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <div className="mt-1 flex gap-3 text-center text-xs text-muted-foreground">
        {weeks.map((w) => (
          <span key={w.label} className="flex-1">
            {w.label}
          </span>
        ))}
      </div>
    </div>
  )
}
