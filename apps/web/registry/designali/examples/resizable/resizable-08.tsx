"use client"

import * as React from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Textarea } from "@workspace/ui/components/textarea"

export default function MarkdownEditorPreview() {
  const [text, setText] = React.useState(
    "# Release 2.4\n\nFaster sync and a brand new activity feed.\n\n- Offline drafts\n- Bulk archive\n- Dark mode polish"
  )
  const lines = text.split("\n")

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="50%" minSize="30%">
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          aria-label="Markdown source"
          className="h-full resize-none border-0 font-mono text-xs focus-visible:ring-0"
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col gap-1 overflow-auto p-4 text-sm">
          {lines.map((line, i) => {
            if (line.startsWith("# "))
              return (
                <h3 key={i} className="text-base font-semibold">
                  {line.slice(2)}
                </h3>
              )
            if (line.startsWith("- "))
              return (
                <li key={i} className="ml-4 list-disc text-xs">
                  {line.slice(2)}
                </li>
              )
            if (!line.trim()) return <div key={i} className="h-2" />
            return (
              <p key={i} className="text-xs text-muted-foreground">
                {line}
              </p>
            )
          })}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
