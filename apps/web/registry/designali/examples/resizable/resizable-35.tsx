"use client"

import * as React from "react"
import { FileTextIcon, SendIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const templates = [
  {
    name: "Welcome aboard",
    body: "Thanks for joining Fieldnote! Here is how to get started...",
  },
  {
    name: "Trial ending",
    body: "Your trial ends in 3 days. Upgrade to keep your projects...",
  },
  {
    name: "Payment failed",
    body: "We could not process your last payment. Please update...",
  },
]

export default function EmailTemplatePicker() {
  const [body, setBody] = React.useState(templates[0]!.body)

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col gap-1 p-2">
          <span className="px-1 text-[10px] font-medium text-muted-foreground uppercase">
            Templates
          </span>
          {templates.map((t) => (
            <button
              key={t.name}
              onClick={() => setBody(t.body)}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted",
                body === t.body && "bg-muted font-medium"
              )}
            >
              <FileTextIcon className="size-3.5 shrink-0" />
              <span className="truncate">{t.name}</span>
            </button>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="68%" minSize="45%">
        <div className="flex h-full flex-col gap-2 p-3">
          <Input
            aria-label="To"
            placeholder="To: customer@example.com"
            className="text-xs"
          />
          <Textarea
            aria-label="Message"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="flex-1 resize-none text-xs"
          />
          <Button size="sm" className="self-end">
            <SendIcon data-icon="inline-start" />
            Send
          </Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
