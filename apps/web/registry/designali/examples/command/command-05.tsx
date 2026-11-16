"use client"

import * as React from "react"
import {
  LayoutDashboard as LayoutDashboardIcon,
  LogOut as LogOutIcon,
  PanelLeft as PanelLeftIcon,
  Settings as SettingsIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function GlobalShortcutPalette() {
  const [open, setOpen] = React.useState(false)
  const [lastAction, setLastAction] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const run = (label: string) => {
    setLastAction(label)
    setOpen(false)
  }

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        Open palette
      </Button>
      {lastAction ? (
        <p className="text-xs text-muted-foreground">
          Last action: {lastAction}
        </p>
      ) : null}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="What do you need?" />
          <CommandList>
            <CommandEmpty>No commands found.</CommandEmpty>
            <CommandGroup heading="General">
              <CommandItem onSelect={() => run("Go to dashboard")}>
                <LayoutDashboardIcon />
                <span>Go to dashboard</span>
                <CommandShortcut>G D</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Open settings")}>
                <SettingsIcon />
                <span>Open settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Toggle sidebar")}>
                <PanelLeftIcon />
                <span>Toggle sidebar</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Sign out")}>
                <LogOutIcon />
                <span>Sign out</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
