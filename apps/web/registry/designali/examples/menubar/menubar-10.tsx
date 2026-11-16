"use client"

import * as React from "react"
import {
  Monitor as MonitorIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function ThemeDensityMenubar() {
  const [theme, setTheme] = React.useState("light")
  const [density, setDensity] = React.useState("comfortable")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">
                <SunIcon /> Light
              </MenubarRadioItem>
              <MenubarRadioItem value="dark">
                <MoonIcon /> Dark
              </MenubarRadioItem>
              <MenubarRadioItem value="system">
                <MonitorIcon /> System
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Density</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={density} onValueChange={setDensity}>
              <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
              <MenubarRadioItem value="comfortable">
                Comfortable
              </MenubarRadioItem>
              <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "border",
          theme === "dark" ? "bg-foreground text-background" : "bg-background",
          density === "compact" && "p-2 text-xs",
          density === "comfortable" && "p-4 text-sm",
          density === "spacious" && "p-6 text-base"
        )}
      >
        <p className="font-medium">Weekly digest</p>
        <p className="opacity-70">
          Theme: {theme}, density: {density}
        </p>
      </div>
    </div>
  )
}
