"use client"

import { useState } from "react"

import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"

const colors = ["night-sky", "star-white"] as const

type PhoneColor = (typeof colors)[number]

export function IPhoneDuoColorsDemo() {
  const [activeColor, setActiveColor] =
    useState<PhoneColor>("night-sky")

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <div className="flex items-center justify-center gap-1 rounded-lg bg-muted p-1 dark:bg-card">
        {colors.map((color) => (
          <button 
            key={color}
            onClick={() => setActiveColor(color)}
            className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-all duration-200 ${
              activeColor === color
                ? "bg-white text-black shadow-sm dark:bg-card dark:text-white"
                : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
            }`}
          >
            {color.replace("-", " ")}
          </button>
        ))}
      </div>

      <IPhoneDuo
        size="xl" 
        color={activeColor}
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