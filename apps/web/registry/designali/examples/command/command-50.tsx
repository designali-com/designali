"use client"

import * as React from "react"
import { ArrowUpIcon, CornerDownLeftIcon, SparklesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Textarea } from "@workspace/ui/components/textarea"

const starters = [
  {
    group: "Write",
    prompts: [
      "Draft a launch announcement",
      "Rewrite this in a friendlier tone",
    ],
  },
  {
    group: "Analyze",
    prompts: [
      "Summarize this quarter's churn",
      "Find anomalies in last week's signups",
    ],
  },
  {
    group: "Plan",
    prompts: ["Outline a two-week sprint", "Create an onboarding checklist"],
  },
]

export default function AiPromptStarters() {
  const [prompt, setPrompt] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Command className="border">
        <CommandInput placeholder="Browse prompt starters..." />
        <CommandList className="max-h-52">
          <CommandEmpty>No starters match.</CommandEmpty>
          {starters.map((s) => (
            <CommandGroup key={s.group} heading={s.group}>
              {s.prompts.map((p) => (
                <CommandItem key={p} onSelect={() => setPrompt(p)}>
                  <SparklesIcon />
                  <span>{p}</span>
                  <CornerDownLeftIcon className="ms-auto opacity-50" />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <div className="flex items-end gap-2">
        <Textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask the assistant..."
          className="min-h-16"
        />
        <Button size="icon" aria-label="Send" disabled={!prompt}>
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}
