"use client"

import { useThemeConfig } from "@/src/components/common/active-theme"
import { COLOR_OPTIONS, FONT_OPTIONS, THEME_PRESETS } from "@/src/lib/themes"
import { cn } from "@workspace/ui/lib/utils"
import { Shuffle } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel, 
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select" 

export function ThemePattern({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  function applyColorOnly(color: string) {
    setActiveTheme(color)
  }

  function applyRandomTheme() {
    const preset =
      THEME_PRESETS[Math.floor(Math.random() * THEME_PRESETS.length)]

    setActiveTheme(preset.theme)
  }

  return (
    <div className={cn("flex w-full px-2 flex-wrap items-center gap-2", className)}>
      <Button
        onClick={applyRandomTheme}
        size="sm"
        variant="outline"
        className="cursor-pointer gap-2"
      >
        <Shuffle className="h-4 w-4" />
        Random
      </Button>

      <Label className="sr-only">Color</Label>
      <Select value={activeTheme} onValueChange={applyColorOnly}>
        <SelectTrigger className="bg-secondary w-40 shadow-none">
          <span className="font-medium">Color:</span>
          <SelectValue placeholder="Pick color" />
        </SelectTrigger>

        <SelectContent >
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {COLOR_OPTIONS.map((color) => (
              <SelectItem
                key={color}
                value={color}
                className="capitalize data-[state=checked]:opacity-50"
              >
                {color}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}