"use client"

import { BookOpenIcon } from "lucide-react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function AudiobookChapterProgress() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4 border p-4">
      <div className="flex h-16 w-12 shrink-0 items-center justify-center bg-gradient-to-b from-muted to-muted-foreground/20">
        <BookOpenIcon className="size-4" />
      </div>
      <Progress
        value={3}
        min={0}
        max={8}
        getAriaValueText={(_, value) => "Chapter " + value + " of 8 finished"}
        className="flex-1"
      >
        <ProgressLabel className="text-sm font-medium">
          The Lighthouse Keeper
        </ProgressLabel>
        <ProgressValue className="ms-0 w-full">
          {(_, value) => "Chapter " + value + " of 8 · 4h 12m left"}
        </ProgressValue>
      </Progress>
    </div>
  )
}
