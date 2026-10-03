"use client"

import { useState } from "react"
import { IPhone } from "@/registry/designali/ui/apple/iphone"

type Orientation = "portrait" | "landscape"

export function IPhoneOrientationDemo() {
  const [orientation, setOrientation] =
    useState<Orientation>("portrait")

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">

      {/* Orientation Tabs */}
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        <button
          onClick={() => setOrientation("portrait")}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            orientation === "portrait"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500"
          }`}
        >
          Portrait
        </button>

        <button
          onClick={() => setOrientation("landscape")}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            orientation === "landscape"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500"
          }`}
        >
          Landscape
        </button>
      </div>

      {/* iPhone */}
      <IPhone
        variant="18-pro"
        color="burgundy"
        size="lg"
        orientation={orientation}
      >
        <video
          src="/vid/abstract-fluid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </IPhone>

    </div>
  )
}