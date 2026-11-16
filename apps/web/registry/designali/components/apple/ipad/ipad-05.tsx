"use client"

import { useState } from "react"
import { IPad } from "@/registry/designali/ui/apple/ipad"

type IPadSize = "sm" | "md" | "lg" | "xl"

export function IPadSizeDemo() {
  const [size, setSize] = useState<IPadSize>("md")

  const options: { value: IPadSize; label: string }[] = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">
      <div className="flex items-center gap-1 rounded-lg bg-muted p-1 dark:bg-card">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSize(option.value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
              size === option.value
                ? "bg-white text-black shadow-sm dark:bg-card dark:text-white"
                : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <IPad size={size} color="blue">
        <div className="flex h-full items-center justify-center">
          <span className="text-2xl font-semibold">
            {options.find((option) => option.value === size)?.label}
          </span>
        </div>
      </IPad>
    </div>
  )
}