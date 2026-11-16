"use client"

import * as React from "react"
import {
  Type as TypeIcon,
} from "@designali/icons"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const fonts = [
  { label: "Sans serif", value: "sans", className: "font-sans" },
  { label: "Serif", value: "serif", className: "font-sans" },
  { label: "Monospace", value: "mono", className: "font-sans" },
]

export default function FontFamilySelect() {
  const [font, setFont] = React.useState<string | null>("serif")
  const current = fonts.find((item) => item.value === font) ?? fonts[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Select items={fonts} value={font} onValueChange={setFont}>
        <SelectTrigger className="w-full" aria-label="Font family">
          <TypeIcon className="text-muted-foreground" />
          <SelectValue className={current.className} />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className={item.className}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p
        className={cn(
          "border bg-muted/30 p-4 text-sm leading-relaxed",
          current.className
        )}
      >
        Where thoughtful design meets production-ready code. Designali designs
        and builds digital experiences that work beautifully.
      </p>
    </div>
  )
}
