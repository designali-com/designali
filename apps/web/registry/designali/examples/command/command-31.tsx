"use client"

import * as React from "react"
import {
  Calculator as CalculatorIcon,
  NotebookPen as NotebookPenIcon,
  Timer as TimerIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"

function calculate(input: string) {
  const match = input
    .replace(/\s/g, "")
    .match(/^(-?\d+(?:\.\d+)?)([+\-*/x])(-?\d+(?:\.\d+)?)$/)
  if (!match) return null
  const a = Number(match[1])
  const b = Number(match[3])
  switch (match[2]) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
    case "x":
      return a * b
    case "/":
      return b === 0 ? null : a / b
    default:
      return null
  }
}

export default function InlineCalculatorResult() {
  const [query, setQuery] = React.useState("128 * 12")
  const result = calculate(query)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search or calculate..."
      />
      <CommandList>
        {result !== null ? (
          <CommandGroup heading="Calculator">
            <CommandItem value={query} forceMount>
              <CalculatorIcon />
              <span className="text-muted-foreground">{query} =</span>
              <span className="text-sm font-semibold">
                {Number(result.toFixed(6)).toLocaleString()}
              </span>
              <CommandShortcut>copy</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        ) : null}
        <CommandEmpty>Type a sum like 42 + 8.</CommandEmpty>
        <CommandGroup heading="Apps">
          <CommandItem>
            <NotebookPenIcon />
            <span>Notes</span>
          </CommandItem>
          <CommandItem>
            <TimerIcon />
            <span>Timer</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
