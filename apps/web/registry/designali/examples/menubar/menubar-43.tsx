"use client"

import * as React from "react"
import {
  Accessibility as AccessibilityIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function AccessibilityOptionsMenubar() {
  const [contrast, setContrast] = React.useState(false)
  const [motion, setMotion] = React.useState(false)
  const [textSize, setTextSize] = React.useState("100")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <AccessibilityIcon className="me-1.5 size-3.5" /> Accessibility
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={contrast}
                onCheckedChange={setContrast}
              >
                High contrast
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={motion} onCheckedChange={setMotion}>
                Reduce motion
              </MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Text size</MenubarLabel>
              <MenubarRadioGroup value={textSize} onValueChange={setTextSize}>
                <MenubarRadioItem value="100">100%</MenubarRadioItem>
                <MenubarRadioItem value="125">125%</MenubarRadioItem>
                <MenubarRadioItem value="150">150%</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "border p-3",
          contrast && "border-foreground bg-foreground text-background",
          textSize === "100" && "text-sm",
          textSize === "125" && "text-base",
          textSize === "150" && "text-lg"
        )}
      >
        <p className={cn("font-medium", !motion && "animate-pulse")}>
          Your Designali template is ready
        </p>
        <p
          className={cn(
            contrast ? "" : "text-muted-foreground",
            "text-[0.85em]"
          )}
        >
          Download it from your designali.com account.
        </p>
      </div>
    </div>
  )
}
