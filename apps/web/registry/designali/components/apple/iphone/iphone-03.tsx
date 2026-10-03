"use client"

import { useState } from "react"
import { IPhone } from "@/registry/designali/ui/apple/iphone"

type IPhoneSize = "sm" | "md" | "lg" | "xl"

export function IPhoneSizeDemo() {
  const [size, setSize] =
    useState<IPhoneSize>("md")

  const options: {
    value: IPhoneSize
    label: string
  }[] = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">

      {/* Size Tabs */}
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSize(option.value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              size === option.value
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* iPhone */}
      <IPhone
        size={size}
        variant="18-pro"
        color="silver"
      >
        <div className="flex h-full items-center justify-center">
          <span className="text-2xl font-semibold">
            {options.find(
              (option) => option.value === size
            )?.label}
          </span>
        </div>
      </IPhone>

    </div>
  )
}