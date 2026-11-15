"use client"

import * as React from "react"
import { FileDiffIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function CodeReviewSuggestion() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-md border font-mono text-xs">
      <div className="flex bg-rose-500/10">
        <span className="w-8 shrink-0 text-center text-muted-foreground">
          41
        </span>
        <span className="text-rose-600">- const total = price * qty</span>
      </div>
      <div className="flex bg-emerald-500/10">
        <span className="w-8 shrink-0 text-center text-muted-foreground">
          41
        </span>
        <span className="text-emerald-700 dark:text-emerald-400">
          + const total = round(price * qty)
        </span>
      </div>
      <div className="flex flex-col gap-2 border-t p-2 font-sans">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Leave a comment on line 41"
          aria-label="Review comment"
        />
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="xs"
            onClick={() =>
              setValue(
                value +
                  "\n```suggestion\nconst total = round(price * qty, 2)\n```"
              )
            }
          >
            <FileDiffIcon data-icon="inline-start" />
            Suggest change
          </Button>
          <div className="flex gap-1.5">
            <Button variant="outline" size="xs">
              Cancel
            </Button>
            <Button size="xs" disabled={!value.trim()}>
              Add comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
