"use client"

import * as React from "react"
import {
  CalendarClock as CalendarClockIcon,
  ChevronDown as ChevronDownIcon,
  Send as SendIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"
import { Textarea } from "@workspace/ui/components/textarea"

const options = [
  { label: "Later today", detail: "6:00 PM" },
  { label: "Tomorrow morning", detail: "Mon 9:00 AM" },
  { label: "Next week", detail: "Mon, Nov 23 9:00 AM" },
]

export default function ScheduleSendPopover() {
  const [scheduled, setScheduled] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-2">
      <Textarea
        placeholder="Message #design-crit"
        className="min-h-16 resize-none border-0 shadow-none focus-visible:ring-0"
      />
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">
          {scheduled ? "Scheduled for " + scheduled : "Press Enter to send"}
        </span>
        <ButtonGroup>
          <Button size="sm">
            <SendIcon data-icon="inline-start" /> Send
          </Button>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={<Button size="icon-sm" aria-label="Schedule send" />}
            >
              <ChevronDownIcon />
            </PopoverTrigger>
            <PopoverContent className="w-60 gap-1 p-1" side="top" align="end">
              <span className="px-2 pt-1 text-[11px] text-muted-foreground">
                Schedule message
              </span>
              {options.map((option) => (
                <Button
                  key={option.label}
                  variant="ghost"
                  size="sm"
                  className="justify-between"
                  onClick={() => (setScheduled(option.detail), setOpen(false))}
                >
                  {option.label}
                  <span className="text-muted-foreground">{option.detail}</span>
                </Button>
              ))}
              <Separator />
              <Button variant="ghost" size="sm" className="justify-start">
                <CalendarClockIcon data-icon="inline-start" /> Custom time
              </Button>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </div>
    </div>
  )
}
