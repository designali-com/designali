import {
  SunDim as SunDimIcon,
  Sun as SunIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

export default function BrightnessSlider() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label>Display brightness</Label>
      <div className="flex items-center gap-3">
        <SunDimIcon className="size-4 text-muted-foreground" />
        <Slider aria-label="Display brightness" defaultValue={[70]} max={100} />
        <SunIcon className="size-5" />
      </div>
    </div>
  )
}
