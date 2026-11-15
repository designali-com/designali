"use client"

import * as React from "react"
import { BookOpenIcon } from "lucide-react"

import { Progress } from "@workspace/ui/components/progress"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const paragraphs = [
  "Remote teams often struggle with context. Decisions happen in calls, and the reasoning disappears.",
  "Writing things down changes that. A short decision log turns tribal knowledge into something searchable.",
  "Start small: one page per project, updated weekly, with links to the discussions that mattered.",
  "Over time, the log becomes the onboarding guide you never had time to write.",
  "New teammates read the history instead of interrupting the people who lived it.",
  "The habit compounds. Each entry makes the next decision faster and the team more aligned.",
]

export default function ReadingProgressBar() {
  const contentRef = React.useRef<null | HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const viewport = contentRef.current?.closest(
      "[data-slot=scroll-area-viewport]"
    ) as HTMLElement | null | undefined
    if (!viewport) return
    const onScroll = () => {
      const max = viewport.scrollHeight - viewport.clientHeight
      setProgress(max > 0 ? Math.round((viewport.scrollTop / max) * 100) : 100)
    }
    onScroll()
    viewport.addEventListener("scroll", onScroll, { passive: true })
    return () => viewport.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <BookOpenIcon className="size-3.5" />
        <span className="flex-1 truncate text-xs font-medium">
          The case for decision logs
        </span>
        <span className="text-[11px] text-muted-foreground tabular-nums">
          {progress}%
        </span>
      </div>
      <Progress value={progress} className="h-0.5" />
      <ScrollArea className="h-56">
        <div
          ref={contentRef}
          className="flex flex-col gap-3 p-4 text-xs leading-relaxed"
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
