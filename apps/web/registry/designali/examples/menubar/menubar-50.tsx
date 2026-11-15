"use client"

import * as React from "react"
import { RocketIcon } from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  "Verify email",
  "Invite teammates",
  "Connect calendar",
  "Create first project",
]

export default function OnboardingChecklistMenubar() {
  const [done, setDone] = React.useState<string[]>(["Verify email"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="gap-1.5">
            <RocketIcon className="size-3.5" /> Getting started
            <span className="text-muted-foreground tabular-nums">
              {done.length}/{steps.length}
            </span>
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarLabel inset>Setup checklist</MenubarLabel>
              {steps.map((step) => (
                <MenubarCheckboxItem
                  key={step}
                  closeOnClick={false}
                  checked={done.includes(step)}
                  onCheckedChange={(checked) =>
                    setDone((prev) =>
                      checked ? [...prev, step] : prev.filter((s) => s !== step)
                    )
                  }
                  className={cn(
                    done.includes(step) && "text-muted-foreground line-through"
                  )}
                >
                  {step}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Dismiss checklist</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Progress value={(done.length / steps.length) * 100} />
    </div>
  )
}
