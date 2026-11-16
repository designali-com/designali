"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

const all = [
  "Ali merged PR #204 in designali-web",
  "A client commented on the Pricing page",
  "Deploy #88 succeeded",
  "Ali invited 2 studio teammates",
  "Designali plan changed to Team",
  "Ali closed issue #61 in @designali/icons",
  "Weekly studio report generated",
]

export default function LoadMoreButton() {
  const [count, setCount] = React.useState(3)
  const [loading, setLoading] = React.useState(false)
  const finished = count >= all.length

  function loadMore() {
    setLoading(true)
    setTimeout(() => {
      setCount((c) => Math.min(c + 2, all.length))
      setLoading(false)
    }, 700)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ul className="divide-y border text-xs">
        {all.slice(0, count).map((item) => (
          <li key={item} className="px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
      <Button
        variant="secondary"
        size="sm"
        disabled={loading || finished}
        onClick={loadMore}
      >
        {loading && <Spinner data-icon="inline-start" />}
        {finished
          ? "You're all caught up"
          : loading
            ? "Loading..."
            : "Load more"}
      </Button>
    </div>
  )
}
