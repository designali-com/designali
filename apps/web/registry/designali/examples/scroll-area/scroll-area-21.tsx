"use client"

import * as React from "react"
import {
  BookOpen as BookOpenIcon,
} from "@designali/icons"

import { Progress } from "@workspace/ui/components/progress"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const paragraphs = [
  "Design and code often live in separate worlds. Decisions made in Figma get lost on the way to production.",
  "Designali closes that gap: every block is designed and built by the same hands, design se code tak.",
  "Start in Figma with spacing, type and color, then rebuild it in Next.js, React and Tailwind CSS.",
  "Semantic tokens keep light and dark mode consistent across 460+ blocks and 240 landing pages.",
  "Clients get production-ready code instead of a handoff file that still needs translating.",
  "The result looks great, feels intuitive and works beautifully.",
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
          Design se code tak
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
