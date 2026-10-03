"use client"

import { useState } from "react"
import { IPad } from "@/registry/designali/ui/apple/ipad"

type Orientation = "portrait" | "landscape"

export function IPadOrientationDemo() {
  const [orientation, setOrientation] =
    useState<Orientation>("portrait")

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        <button
          onClick={() => setOrientation("portrait")}
          className={`rounded-md px-4 py-2 text-sm font-medium ${
            orientation === "portrait"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500"
          }`}
        >
          Portrait
        </button>

        <button
          onClick={() => setOrientation("landscape")}
          className={`rounded-md px-4 py-2 text-sm font-medium ${
            orientation === "landscape"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500"
          }`}
        >
          Landscape
        </button>
      </div>

      <IPad
        variant="ipad-pro"
        color="black"
        size="lg"
        orientation={orientation}
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