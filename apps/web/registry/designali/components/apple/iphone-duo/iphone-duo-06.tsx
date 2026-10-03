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
      <div className="flex items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
            className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-all duration-200 ${
              activeColor === color
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {color.replace("-", " ")}
          </button>
        ))}
      </div>

      <IPhoneDuo
        size="lg" 
        color={activeColor}
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