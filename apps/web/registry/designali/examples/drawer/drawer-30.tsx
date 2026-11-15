"use client"

import * as React from "react"
import { PaletteIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const themes = [
  { value: "light", label: "Light", className: "bg-white border-neutral-200" },
  {
    value: "dark",
    label: "Dark",
    className: "bg-neutral-900 border-neutral-700",
  },
  {
    value: "system",
    label: "System",
    className: "bg-gradient-to-r from-white to-neutral-900 border-neutral-400",
  },
]

export default function AppearanceSettingsDrawer() {
  const [theme, setTheme] = React.useState("system")
  const [textSize, setTextSize] = React.useState(16)

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <PaletteIcon data-icon="inline-start" />
        Appearance
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Appearance</DrawerTitle>
          <DrawerDescription>
            Customize how Readwell looks on this device.
          </DrawerDescription>
        </DrawerHeader>
        <FieldGroup className="flex-1 overflow-y-auto p-4">
          <FieldSet>
            <FieldLegend variant="label">Theme</FieldLegend>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={item.value === theme}
                  onClick={() => setTheme(item.value)}
                  className={cn(
                    "flex flex-col gap-1.5 border p-1.5 text-start",
                    item.value === theme
                      ? "border-foreground"
                      : "border-transparent"
                  )}
                >
                  <span className={cn("h-12 border", item.className)} />
                  {item.label}
                </button>
              ))}
            </div>
          </FieldSet>
          <Field>
            <div className="flex justify-between">
              <FieldLabel>Text size</FieldLabel>
              <span className="tabular-nums">{textSize}px</span>
            </div>
            <Slider
              value={[textSize]}
              min={12}
              max={22}
              onValueChange={(value) =>
                setTextSize(typeof value === "number" ? value : (value[0] ?? 0))
              }
              aria-label="Text size"
            />
            <p
              className="border bg-muted/40 p-3"
              style={{ fontSize: textSize }}
            >
              The quick brown fox reads every chapter.
            </p>
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="reduce-motion">Reduce motion</FieldLabel>
              <FieldDescription>Minimize page transitions.</FieldDescription>
            </FieldContent>
            <Switch id="reduce-motion" />
          </Field>
        </FieldGroup>
      </DrawerContent>
    </Drawer>
  )
}
