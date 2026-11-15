import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"

const bands = [
  { label: "60", value: 6 },
  { label: "230", value: 3 },
  { label: "910", value: 0 },
  { label: "3.6k", value: 4 },
  { label: "14k", value: 8 },
]

export default function VerticalEqualizer() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Equalizer</span>
        <Badge variant="secondary">Custom</Badge>
      </div>
      <div className="flex h-40 justify-between px-2">
        {bands.map((band) => (
          <div key={band.label} className="flex flex-col items-center gap-2">
            <Slider
              orientation="vertical"
              aria-label={band.label + " Hz"}
              defaultValue={[band.value]}
              min={-12}
              max={12}
            />
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {band.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
