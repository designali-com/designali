"use client"

import * as React from "react"
import { TerminalIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const commands: Record<string, string> = {
  npm: "npm install @acme/charts",
  pnpm: "pnpm add @acme/charts",
  yarn: "yarn add @acme/charts",
  bun: "bun add @acme/charts",
}

export default function PackageManagerToggleGroup() {
  const [pm, setPm] = React.useState("pnpm")

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <ToggleGroup
        size="sm"
        spacing={0}
        value={[pm]}
        onValueChange={(next) => next[0] && setPm(next[0])}
        className="border-b p-1"
      >
        {Object.keys(commands).map((key) => (
          <ToggleGroupItem key={key} value={key} className="font-mono">
            {key}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex items-center gap-2 bg-muted/40 px-3 py-3 font-mono text-xs">
        <TerminalIcon className="size-3.5 text-muted-foreground" />
        {commands[pm]}
      </div>
    </div>
  )
}
