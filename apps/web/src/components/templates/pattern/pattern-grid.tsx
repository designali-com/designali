"use client"

import { useEffect, useRef, useState } from "react"

import { Pattern } from "@/src/types/pattern"

import PatternCard from "./pattern-card"

const PAGE_SIZE = 48

interface PatternGridProps {
  patterns: Pattern[]
  activePattern: string | null
  setActivePattern: (pattern: string | null) => void
  theme: "light" | "dark"
  activeMobileCard: string | null
  setActiveMobileCard: (id: string | null) => void
  columns: number
}

/** Nearest scrolling ancestor, used as the IntersectionObserver root. */
function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  let el = node?.parentElement ?? null
  while (el) {
    const { overflowY } = window.getComputedStyle(el)
    if (overflowY === "auto" || overflowY === "scroll") return el
    el = el.parentElement
  }
  return null
}

export default function PatternGrid({
  patterns,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
  columns,
}: PatternGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // The parent rebuilds the filtered array on every render, so identify the
  // list by content rather than reference.
  const listKey = `${patterns.length}:${patterns[0]?.id ?? ""}:${
    patterns[patterns.length - 1]?.id ?? ""
  }`
  const [prevKey, setPrevKey] = useState(listKey)

  // Reset the window whenever the pattern list changes (category switch etc.)
  if (prevKey !== listKey) {
    setPrevKey(listKey)
    setVisibleCount(PAGE_SIZE)
  }

  const hasMore = visibleCount < patterns.length

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((count) =>
            Math.min(count + PAGE_SIZE, patterns.length)
          )
        }
      },
      { root: getScrollParent(sentinel), rootMargin: "600px 0px" }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, patterns.length, visibleCount])

  const visible = hasMore ? patterns.slice(0, visibleCount) : patterns

  return (
    <>
      <div
        className="grid w-full gap-2 pb-2"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {visible.map((pattern) => (
          <PatternCard
            key={pattern.id}
            pattern={pattern}
            activePattern={activePattern}
            setActivePattern={setActivePattern}
            theme={theme}
            activeMobileCard={activeMobileCard}
            setActiveMobileCard={setActiveMobileCard}
          />
        ))}
      </div>
      {hasMore && (
        <div
          ref={sentinelRef}
          aria-hidden
          className="h-px w-full"
          data-pattern-sentinel
        />
      )}
    </>
  )
}
