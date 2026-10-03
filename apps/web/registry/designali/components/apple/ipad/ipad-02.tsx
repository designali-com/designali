"use client"

import { useState } from "react"
import { IPad } from "@/registry/designali/ui/apple/ipad"

type IPadVariant = "ipad-air" | "ipad-pro"

type IPadColor =
  | "blue"
  | "purple"
  | "space-grey"
  | "starlight"
  | "black"
  | "silver"

const colorOptions: Record<
  IPadVariant,
  { value: IPadColor; label: string }[]
> = {
  "ipad-air": [
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "space-grey", label: "Space Grey" },
    { value: "starlight", label: "Starlight" },
  ],

  "ipad-pro": [
    { value: "black", label: "Space Black" },
    { value: "silver", label: "Silver" },
  ],
}

export function IPadVariantDemo() {
  const [variant, setVariant] =
    useState<IPadVariant>("ipad-air")

  const [color, setColor] =
    useState<IPadColor>("blue")

  const handleVariantChange = (
    newVariant: IPadVariant
  ) => {
    setVariant(newVariant)

    // Reset color when switching model
    setColor(
      newVariant === "ipad-air"
        ? "blue"
        : "black"
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">

      {/* Model Tabs */}
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {(
          [
            {
              value: "ipad-air",
              label: "iPad Air",
            },
            {
              value: "ipad-pro",
              label: "iPad Pro",
            },
          ] as {
            value: IPadVariant
            label: string
          }[]
        ).map((option) => (
          <button
            key={option.value}
            onClick={() =>
              handleVariantChange(option.value)
            }
            className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 ${
              variant === option.value
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Color Options */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {colorOptions[variant].map((option) => (
          <button
            key={option.value}
            onClick={() =>
              setColor(option.value)
            }
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
              color === option.value
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* iPad Preview */}
      <div className="flex items-center justify-center">
        <IPad
          variant={variant}
          color={color}
          
        >
          <iframe
            src="https://design-agency.designali.com/"
            className="block size-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </IPad>
      </div>

    </div>
  )
}