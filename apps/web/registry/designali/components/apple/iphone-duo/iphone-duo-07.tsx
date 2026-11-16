"use client"

import { useState } from "react"

import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"

const sizes = ["sm", "md", "lg", "xl"] as const

type PhoneSize = (typeof sizes)[number]

export function IPhoneDuoSizeDemo() {
  const [activeSize, setActiveSize] = useState<PhoneSize>("md")

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <div className="flex items-center justify-center gap-1 rounded-lg bg-muted p-1 dark:bg-card">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setActiveSize(size)}
            className={`rounded-md px-4 py-2 text-sm font-medium uppercase transition-all duration-200 ${
              activeSize === size
                ? "bg-white text-black shadow-sm dark:bg-card dark:text-white"
                : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
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
          alt="Designali sign-in screen"
          className="h-full w-full object-cover"
        />
      </IPhoneDuo>
    </div>
  )
}