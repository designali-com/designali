"use client"

import * as React from "react"
import {
  ArrowUp as ArrowUpIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"

export default function AiPromptInput() {
  const [prompt, setPrompt] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <InputGroup className="h-11">
        <InputGroupAddon>
          <SparklesIcon className="text-violet-500" />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Ask the assistant"
          placeholder="Summarize last week's Designali support tickets..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <Kbd>↵</Kbd>
          <InputGroupButton
            size="icon-sm"
            variant="default"
            aria-label="Submit prompt"
            disabled={!prompt.trim()}
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex flex-wrap gap-1">
        {["Draft a reply", "Find duplicates", "Weekly summary"].map((s) => (
          <Button
            key={s}
            variant="outline"
            size="xs"
            onClick={() => setPrompt(s)}
          >
            {s}
          </Button>
        ))}
      </div>
    </div>
  )
}
