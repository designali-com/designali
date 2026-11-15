"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function AppearancePopover() {
  const [theme, setTheme] = React.useState("system")
  const [density, setDensity] = React.useState("comfortable")

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Appearance" />
        }
      >
        <PaletteIcon />
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <PopoverTitle>Appearance</PopoverTitle>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-muted-foreground">Theme</span>
          <ToggleGroup
            variant="outline"
            size="sm"
            spacing={0}
            className="w-full"
            value={[theme]}
            onValueChange={(value) =>
              value.length && setTheme(String(value[0]))
            }
          >
            <ToggleGroupItem value="light" className="flex-1">
              <SunIcon /> Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" className="flex-1">
              <MoonIcon /> Dark
            </ToggleGroupItem>
            <ToggleGroupItem value="system" className="flex-1">
              <MonitorIcon /> Auto
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-muted-foreground">Density</span>
          <RadioGroup
            value={density}
            onValueChange={(value) => setDensity(String(value))}
            className="flex gap-4"
          >
            {["compact", "comfortable"].map((d) => (
              <Label
                key={d}
                className="flex items-center gap-1.5 font-normal capitalize"
              >
                <RadioGroupItem value={d} />
                {d}
              </Label>
            ))}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  )
}
