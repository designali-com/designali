"use client"

import * as React from "react"
import {
  ListOrdered as ListOrderedIcon,
  TextWrap as WrapTextIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

const lines = [
  "export function formatPrice(cents: number, currency = 'EUR') {",
  "  return new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(cents / 100)",
  "}",
]

export default function CodeEditorViewToggles() {
  const [wrap, setWrap] = React.useState(false)
  const [numbers, setNumbers] = React.useState(true)

  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-1 border-b px-2 py-1">
        <span className="flex-1 font-sans text-xs text-muted-foreground">
          price.ts
        </span>
        <Toggle
          size="sm"
          pressed={wrap}
          onPressedChange={setWrap}
          aria-label="Word wrap"
        >
          <WrapTextIcon />
        </Toggle>
        <Toggle
          size="sm"
          pressed={numbers}
          onPressedChange={setNumbers}
          aria-label="Line numbers"
        >
          <ListOrderedIcon />
        </Toggle>
      </div>
      <pre
        className={cn(
          "overflow-x-auto p-3 font-sans text-xs leading-5",
          wrap && "break-all whitespace-pre-wrap"
        )}
      >
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            {numbers && (
              <span className="w-4 shrink-0 text-end text-muted-foreground select-none">
                {i + 1}
              </span>
            )}
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  )
}
