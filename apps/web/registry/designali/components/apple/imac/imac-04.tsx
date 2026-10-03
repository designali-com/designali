"use client"

import { useState } from "react"
import { IMac } from "@/registry/designali/ui/apple/imac" 

const colors = [
  "blue",
  "green",
  "pink",
  "silver",
  "yellow",
  "orange",
  "purple",
] as const;

type IMacColor = typeof colors[number];

export function IMacColorsDemo() {
  const [activeColor, setActiveColor] = useState<IMacColor>("blue")

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">
      {/* Tabs / Radio Toggle */}
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
            className={`capitalize rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeColor === color
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      {/* Active IMac Display */}
      <div className="flex flex-col items-center">
        <IMac size="lg" color={activeColor}>
          <div className="flex h-full items-center justify-center bg-background">
            <p className="text-2xl font-medium capitalize">{activeColor} iMac</p>
          </div>
        </IMac>
      </div>
    </div>
  );
}