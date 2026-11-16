"use client"

import * as React from "react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const tokens = [
  { name: "primary", hex: "#00A8FF", className: "bg-primary" },
  { name: "success", hex: "#16A34A", className: "bg-green-600" },
  { name: "warning", hex: "#D97706", className: "bg-amber-600" },
  { name: "danger", hex: "#DC2626", className: "bg-red-600" },
  { name: "info", hex: "#0284C7", className: "bg-sky-600" },
  { name: "neutral", hex: "#52525B", className: "bg-zinc-600" },
]

export default function BrandColorTokenPicker() {
  const [token, setToken] = React.useState("primary")
  const active = tokens.find((t) => t.name === token)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center gap-2 border p-2">
        <span className={cn("size-8", active?.className)} />
        <div className="flex flex-col text-xs">
          <span className="font-medium">color.{token}</span>
          <span className="font-mono text-muted-foreground">{active?.hex}</span>
        </div>
      </div>
      <Command className="border">
        <CommandInput placeholder="Search tokens or hex..." />
        <CommandList>
          <CommandEmpty>No token found.</CommandEmpty>
          <CommandGroup heading="Color tokens">
            {tokens.map((t) => (
              <CommandItem
                key={t.name}
                value={t.name + " " + t.hex}
                data-checked={t.name === token}
                onSelect={() => setToken(t.name)}
              >
                <span
                  className={cn(
                    "size-4 ring-1 ring-foreground/10",
                    t.className
                  )}
                />
                <span>{t.name}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {t.hex}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
