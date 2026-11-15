"use client"

import * as React from "react"
import { BoldIcon, CodeIcon, ItalicIcon, LinkIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

const tools = [
  { label: "Bold", icon: BoldIcon, before: "**", after: "**" },
  { label: "Italic", icon: ItalicIcon, before: "_", after: "_" },
  { label: "Code", icon: CodeIcon, before: "`", after: "`" },
  { label: "Link", icon: LinkIcon, before: "[", after: "](https://)" },
]

export default function MarkdownToolbarTextarea() {
  const ref = React.useRef<null | HTMLTextAreaElement>(null)
  const [value, setValue] = React.useState(
    "Select some text and press a button."
  )

  function wrap(before: string, after: string) {
    const el = ref.current
    if (!el) return
    const { selectionStart: s, selectionEnd: e } = el
    setValue(
      value.slice(0, s) + before + value.slice(s, e) + after + value.slice(e)
    )
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(s + before.length, e + before.length)
    })
  }

  return (
    <div className="w-full max-w-md border">
      <div className="flex gap-0.5 border-b p-1">
        {tools.map((t) => (
          <Button
            key={t.label}
            variant="ghost"
            size="icon-sm"
            aria-label={t.label}
            onClick={() => wrap(t.before, t.after)}
          >
            <t.icon />
          </Button>
        ))}
      </div>
      <Textarea
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-h-24 border-0 focus-visible:ring-0"
        aria-label="Markdown"
      />
    </div>
  )
}
