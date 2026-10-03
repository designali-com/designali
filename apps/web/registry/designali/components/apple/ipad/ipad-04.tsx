"use client"

import { useState } from "react"
import { IPad } from "@/registry/designali/ui/apple/ipad"

type IPadColor =
  | "blue"
  | "purple"
  | "space-grey"
  | "starlight"

export function IPadColorDemo() {
  const [color, setColor] = useState<IPadColor>("blue")

  const options: {
    value: IPadColor
    label: string
  }[] = [
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "space-grey", label: "Space Grey" },
    { value: "starlight", label: "Starlight" },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setColor(option.value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              color === option.value
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <IPad
        variant="ipad-air"
        color={color}
        size="lg"
      >
        <iframe
          src="https://design-agency.designali.com/"
          className="block size-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </IPad>
    </div>
  )
}