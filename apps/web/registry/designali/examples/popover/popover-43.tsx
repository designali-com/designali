"use client"

import * as React from "react"
import { InboxIcon, PlusIcon, SearchIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const steps = [
  {
    target: "search",
    title: "Search everything",
    body: "Find docs, people, and tasks from one place.",
  },
  {
    target: "create",
    title: "Create quickly",
    body: "Start a doc, task, or board in a click.",
  },
  {
    target: "inbox",
    title: "Stay in the loop",
    body: "Mentions and assignments land in your inbox.",
  },
]

const targets = [
  { id: "search", icon: SearchIcon, label: "Search" },
  { id: "create", icon: PlusIcon, label: "Create" },
  { id: "inbox", icon: InboxIcon, label: "Inbox" },
]

export default function ProductTourPopover() {
  const [step, setStep] = React.useState<number | null>(0)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <div className="flex gap-2 border p-2">
        {targets.map((t, i) => (
          <Popover
            key={t.id}
            open={step === i}
            onOpenChange={(open) => !open && setStep(null)}
          >
            <PopoverTrigger
              render={
                <Button
                  variant={step === i ? "secondary" : "ghost"}
                  size="icon"
                  aria-label={t.label}
                />
              }
            >
              <t.icon />
            </PopoverTrigger>
            <PopoverContent className="w-60" sideOffset={8}>
              <PopoverHeader>
                <span className="text-[11px] text-muted-foreground">
                  Step {i + 1} of {steps.length}
                </span>
                <PopoverTitle>{steps[i]!.title}</PopoverTitle>
                <PopoverDescription>{steps[i]!.body}</PopoverDescription>
              </PopoverHeader>
              <div className="flex justify-between">
                <Button variant="ghost" size="sm" onClick={() => setStep(null)}>
                  Skip
                </Button>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={i === 0}
                    onClick={() => setStep(i - 1)}
                  >
                    Back
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      setStep(i === steps.length - 1 ? null : i + 1)
                    }
                  >
                    {i === steps.length - 1 ? "Done" : "Next"}
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      {step === null && (
        <Button variant="link" size="sm" onClick={() => setStep(0)}>
          Restart tour
        </Button>
      )}
    </div>
  )
}
