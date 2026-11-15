"use client"

import * as React from "react"
import { ZapIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

const templates = [
  { label: "Greeting", text: "Hi there, thanks for reaching out! " },
  {
    label: "Refund",
    text: "I've issued a full refund, it should appear within 5 business days. ",
  },
  {
    label: "Closing",
    text: "Let me know if there's anything else I can help with.",
  },
]

export default function QuickReplyTemplates() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        {templates.map((t) => (
          <Button
            key={t.label}
            variant="outline"
            size="xs"
            onClick={() => setValue(value + t.text)}
          >
            <ZapIcon data-icon="inline-start" />
            {t.label}
          </Button>
        ))}
      </div>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-h-24"
        placeholder="Reply to Hana…"
        aria-label="Reply"
      />
      <div className="flex justify-end">
        <Button size="sm" disabled={!value}>
          Send reply
        </Button>
      </div>
    </div>
  )
}
