"use client"

import { useState } from "react"

import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"

const sizes = ["sm", "md", "lg", "xl"] as const

type PhoneSize = (typeof sizes)[number]

export function IPhoneDuoSizeDemo() {
  const [activeSize, setActiveSize] = useState<PhoneSize>("md")

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <div className="flex items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setActiveSize(size)}
            className={`rounded-md px-4 py-2 text-sm font-medium uppercase transition-all duration-200 ${
              activeSize === size
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <IPhoneDuo
        size={activeSize}
        side="frontback"
        color="night-sky"
      >
       <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IPhoneDuo>
    </div>
  )
}