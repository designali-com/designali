import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"

const points = [32, 40, 36, 52, 48, 64, 58, 72, 70, 84, 78, 92]

export default function ChartPanelWide() {
  const max = 100
  const path = points
    .map(
      (value, index) =>
        (index === 0 ? "M" : "L") +
        (index / (points.length - 1)) * 100 +
        " " +
        (max - value)
    )
    .join(" ")

  return (
    <div className="w-full max-w-md border p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <p className="text-xs text-muted-foreground">
            designali.com template revenue
          </p>
          <p className="text-xl font-semibold tabular-nums">$92.4k</p>
        </div>
        <Badge variant="secondary">+12.6%</Badge>
      </div>
      <AspectRatio ratio={16 / 9}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full text-primary"
          aria-hidden="true"
        >
          {[25, 50, 75].map((y) => (
            <line
              key={y}
              x1="0"
              x2="100"
              y1={y}
              y2={y}
              className="stroke-border"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d={path + " L100 100 L0 100 Z"} className="fill-primary/10" />
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </AspectRatio>
    </div>
  )
}
