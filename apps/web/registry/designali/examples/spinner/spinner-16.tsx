"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

const names = [
  "Amara Osei",
  "Theo Lindqvist",
  "Priya Raman",
  "Jonah Weller",
  "Lucia Ferro",
  "Kenji Arata",
]

export default function LoadMoreButton() {
  const [count, setCount] = React.useState(3)
  const [loading, setLoading] = React.useState(false)

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setCount((c) => Math.min(names.length, c + 3))
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="divide-y border">
        {names.slice(0, count).map((name) => (
          <div key={name} className="px-3 py-2 text-sm">
            {name}
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={loadMore}
        disabled={loading || count >= names.length}
      >
        {loading && <Spinner data-icon="inline-start" />}
        {loading
          ? "Loading..."
          : count >= names.length
            ? "All members loaded"
            : "Load more"}
      </Button>
    </div>
  )
}
