import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

const ticks = [0, 25, 50, 75, 100]

export default function SliderWithTickMarks() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label>Compression quality</Label>
      <Slider
        aria-label="Compression quality"
        defaultValue={[75]}
        step={25}
        max={100}
      />
      <div className="flex justify-between">
        {ticks.map((tick) => (
          <div key={tick} className="flex flex-col items-center gap-1">
            <span className="h-1.5 w-px bg-border" />
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {tick}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
