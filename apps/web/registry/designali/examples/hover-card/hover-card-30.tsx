import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const swatches = [
  { token: "brand-500", hex: "#00A8FF", contrast: "2.6:1 Fail" },
  { token: "chart-1", hex: "#8EC5FF", contrast: "1.9:1 Fail" },
  { token: "chart-2", hex: "#2B7FFF", contrast: "3.6:1 AA Large" },
  { token: "chart-3", hex: "#155DFC", contrast: "5.0:1 AA" },
  { token: "designali-ink", hex: "#000000", contrast: "21:1 AAA" },
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
            <p className="font-sans font-medium">{s.token}</p>
            <p className="font-sans text-muted-foreground">{s.hex}</p>
            <p className="mt-1">On white: {s.contrast}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
