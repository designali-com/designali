"use client"

import * as React from "react"
import {
  ArrowUp as ArrowUpIcon,
  Plus as PlusIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@workspace/ui/components/input-group"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function AIPromptTextarea() {
  const [prompt, setPrompt] = React.useState("")
  const [sent, setSent] = React.useState<string | null>(null)

  function submit() {
    if (!prompt.trim()) return
    setSent(prompt.trim())
    setPrompt("")
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <InputGroup>
        <InputGroupTextarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault()
              submit()
            }
          }}
          placeholder="Ask anything about Designali blocks and templates…"
          className="min-h-20"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            size="icon-xs"
            variant="outline"
            aria-label="Add context"
          >
            <PlusIcon />
          </InputGroupButton>
          <Badge variant="secondary">
            <SparklesIcon />
            Designali AI
          </Badge>
          <InputGroupText className="ms-auto">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>↵</Kbd>
            </KbdGroup>
          </InputGroupText>
          <InputGroupButton
            size="icon-xs"
            variant="default"
            aria-label="Submit"
            onClick={submit}
            disabled={!prompt.trim()}
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {sent && <p className="text-xs text-muted-foreground">Asked: {sent}</p>}
    </div>
  )
}
