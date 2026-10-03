"use client"

import { useState } from "react"
import { IPhone } from "@/registry/designali/ui/apple/iphone"

type IPhoneVariant = "18-pro" | "18-pro-max"

type IPhoneColor =
  | "black"
  | "glacier"
  | "silver"
  | "burgundy"

const colorOptions: Record<
  IPhoneVariant,
  { value: IPhoneColor; label: string }[]
> = {
  "18-pro": [
    { value: "black", label: "Black" },
    { value: "glacier", label: "Glacier" },
    { value: "silver", label: "Silver" },
    { value: "burgundy", label: "Burgundy" },
  ],

  "18-pro-max": [
    { value: "black", label: "Black" },
    { value: "glacier", label: "Glacier" },
    { value: "silver", label: "Silver" },
    { value: "burgundy", label: "Burgundy" },
  ],
}

export function IPhoneVariantDemo() {
  const [variant, setVariant] =
    useState<IPhoneVariant>("18-pro")

  const [color, setColor] =
    useState<IPhoneColor>("silver")

  const handleVariantChange = (
    newVariant: IPhoneVariant
  ) => {
    setVariant(newVariant)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">

      {/* Model Tabs */}
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        <button
          onClick={() => handleVariantChange("18-pro")}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            variant === "18-pro"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          iPhone 18 Pro
        </button>

        <button
          onClick={() => handleVariantChange("18-pro-max")}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            variant === "18-pro-max"
              ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
              : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          iPhone 18 Pro Max
        </button>
      </div>

      {/* Color Options */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {colorOptions[variant].map((option) => (
          <button
            key={option.value}
            onClick={() => setColor(option.value)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
              color === option.value
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* iPhone */}
      <IPhone
        variant={variant}
        color={color} 
      >
        <video
          src="/vid/colorful-spheres.mp4"
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