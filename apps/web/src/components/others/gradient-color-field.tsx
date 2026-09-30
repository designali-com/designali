"use client"

import { Button } from "@workspace/ui/components/button"
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerEyeDropper,
  ColorPickerHueSlider,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerTrigger,
} from "@workspace/ui/components/color-picker"

interface GradientColorFieldProps {
  value: string
  onChange: (value: string) => void
  label: string
}

export function GradientColorField({
  value,
  onChange,
  label,
}: GradientColorFieldProps) {
  return (
    <ColorPicker format="hex" value={value} onValueChange={onChange}>
      <ColorPickerTrigger
        render={
          <Button
            aria-label={label} 
            size="icon-sm"
            variant="outline"
          />
        }
      >
        <ColorPickerSwatch className="size-full rounded-none border-0 shadow-none" />
      </ColorPickerTrigger>
      <ColorPickerContent align="start" className="w-64" side="left">
        <ColorPickerArea className="h-32" />
        <div className="flex items-center gap-2">
          <ColorPickerEyeDropper size="icon-sm" />
          <ColorPickerHueSlider />
        </div>
        <ColorPickerInput   />
      </ColorPickerContent>
    </ColorPicker>
  )
}
