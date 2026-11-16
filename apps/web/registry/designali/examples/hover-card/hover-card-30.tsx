import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const swatches = [
  { token: "brand-500", hex: "#00A8FF", contrast: "2.6:1 Fail" },
  { token: "success-500", hex: "#10B981", contrast: "3.1:1 AA Large" },
  { token: "warning-500", hex: "#F59E0B", contrast: "2.2:1 Fail" },
  { token: "danger-500", hex: "#EF4444", contrast: "3.8:1 AA Large" },
  { token: "slate-700", hex: "#334155", contrast: "10.4:1 AAA" },
]

export default function ColorTokenHoverCard() {
  return (
    <div className="flex gap-2">
      {swatches.map((s) => (
        <HoverCard key={s.token}>
          <HoverCardTrigger
            delay={50}
            render={
              <button
                type="button"
                aria-label={s.token}
                className="size-10 ring-1 ring-foreground/10"
                style={{ background: s.hex }}
              />
            }
          />
          <HoverCardContent side="top" className="w-44">
            <div className="mb-2 h-10 w-full" style={{ background: s.hex }} />
            <p className="font-mono font-medium">{s.token}</p>
            <p className="font-mono text-muted-foreground">{s.hex}</p>
            <p className="mt-1">On white: {s.contrast}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
