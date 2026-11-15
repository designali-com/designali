"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const themes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
]

export default function AppearanceSheet() {
  const [theme, setTheme] = React.useState("system")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PaletteIcon data-icon="inline-start" />
        Appearance
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Appearance</SheetTitle>
          <SheetDescription>
            Customize how the app looks on this device.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          <div className="grid grid-cols-3 gap-2">
            {themes.map((t) => (
              <Button
                key={t.value}
                variant="outline"
                aria-pressed={theme === t.value}
                className={cn(
                  "h-auto flex-col gap-2 py-3",
                  theme === t.value && "border-primary ring-1 ring-primary"
                )}
                onClick={() => setTheme(t.value)}
              >
                <t.icon />
                {t.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-medium">Density</span>
            <RadioGroup defaultValue="comfortable">
              <Label className="gap-2 font-normal">
                <RadioGroupItem value="comfortable" />
                Comfortable
              </Label>
              <Label className="gap-2 font-normal">
                <RadioGroupItem value="compact" />
                Compact
              </Label>
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion">Reduce motion</Label>
            <Switch id="reduce-motion" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
