"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
} from "@designali/icons"

import { Textarea } from "@workspace/ui/components/textarea"
import { Toggle } from "@workspace/ui/components/toggle"

export default function MarkdownPreviewToggle() {
  const [preview, setPreview] = React.useState(false)
  const [text, setText] = React.useState(
    "Looks great! Just one nit: rename **HeroBlock** to **DesignaliHero**."
  )

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-2 py-1">
        <span className="px-1 text-xs font-medium">Comment</span>
        <Toggle
          size="sm"
          pressed={preview}
          onPressedChange={setPreview}
          aria-label="Preview"
        >
          <EyeIcon />
          Preview
        </Toggle>
      </div>
      {preview ? (
        <p className="min-h-24 p-3 text-sm">
          {text
            .split("**")
            .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
        </p>
      ) : (
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-24 border-0 focus-visible:ring-0"
        />
      )}
    </div>
  )
}
