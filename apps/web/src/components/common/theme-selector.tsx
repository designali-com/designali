"use client"

import { useEffect, useState } from "react"
import { useThemeConfig } from "@/src/components/common/active-theme"
import { COLOR_OPTIONS, THEME_PRESETS } from "@/src/lib/themes"
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function applyColorOnly(color: string | null) {
    if (!color) return

    setActiveTheme(color)
  }

  function applyRandomTheme() {
    if (!THEME_PRESETS.length) return

    const preset =
      THEME_PRESETS[Math.floor(Math.random() * THEME_PRESETS.length)]

    if (!preset) return

    setActiveTheme(preset.theme)
  }

  return (
    <div
      className={cn("flex w-full flex-wrap items-center gap-2 px-2", className)}
    >
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

      {mounted ? (
        <Select value={activeTheme} onValueChange={applyColorOnly}>
          <SelectTrigger className="w-40 bg-secondary shadow-none">
            <span className="font-medium">Color:</span>
            <SelectValue placeholder="Pick color" />
          </SelectTrigger>

          <SelectContent>
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
      ) : (
        <div className="flex h-9 w-40 items-center rounded-md border bg-secondary px-3 text-sm">
          <span className="font-medium">Color:</span>
          <span className="ml-2 text-muted-foreground">Pick color</span>
        </div>
      )}
    </div>
  )
}
