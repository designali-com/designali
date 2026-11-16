"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const topics = [
  "Templates",
  "Design systems",
  "AI workflows",
  "Brand identity",
  "UI/UX",
  "Motion",
  "CGI & 3D",
  "Next.js",
  "Tailwind CSS",
]

export default function InterestChipCheckboxes() {
  const [picked, setPicked] = React.useState<string[]>(["AI workflows", "Design systems"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold">What are you into?</h3>
        <p className="text-xs text-muted-foreground">
          Pick at least three to personalise your Designali feed.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => {
          const checked = picked.includes(topic)
          return (
            <label
              key={topic}
              className={cn(
                "flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-xs transition-colors",
                checked ? "border-primary bg-primary/5" : "hover:bg-muted"
              )}
            >
              <Checkbox
                checked={checked}
                onCheckedChange={(value) =>
                  setPicked((list) =>
                    value ? [...list, topic] : list.filter((t) => t !== topic)
                  )
                }
              />
              {topic}
            </label>
          )
        })}
      </div>
      <Button disabled={picked.length < 3}>Continue ({picked.length}/3)</Button>
    </div>
  )
}
