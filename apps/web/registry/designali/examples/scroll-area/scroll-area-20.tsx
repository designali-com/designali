"use client"

import * as React from "react"
import {
  ArrowUp as ArrowUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const sections = [
  "Getting started",
  "Workspaces",
  "Projects",
  "Permissions",
  "Integrations",
  "Billing",
  "Security",
  "Exporting data",
]

export default function ScrollToTopButton() {
  const topRef = React.useRef<null | HTMLDivElement>(null)
  const [showTop, setShowTop] = React.useState(false)

  React.useEffect(() => {
    const node = topRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) =>
      setShowTop(!entry?.isIntersecting)
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const scrollTop = () => {
    const viewport = topRef.current?.closest(
      "[data-slot=scroll-area-viewport]"
    ) as HTMLElement | null | undefined
    viewport?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative w-full max-w-sm">
      <ScrollArea className="h-72 border">
        <div ref={topRef} className="h-px" />
        <div className="flex flex-col gap-4 p-4">
          {sections.map((s) => (
            <section key={s} className="flex flex-col gap-1">
              <h4 className="text-sm font-medium">{s}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Learn how {s.toLowerCase()} works in Designali, including
                defaults, limits, and the settings admins can change.
              </p>
            </section>
          ))}
        </div>
      </ScrollArea>
      {showTop && (
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label="Back to top"
          onClick={scrollTop}
          className="absolute right-4 bottom-3 shadow-sm"
        >
          <ArrowUpIcon />
        </Button>
      )}
    </div>
  )
}
