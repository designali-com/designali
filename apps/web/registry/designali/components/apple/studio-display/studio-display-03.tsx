"use client"

import { useState } from "react"

import { StudioDisplay } from "@/registry/designali/ui/apple/studio-display"

const variants = [
  {
    value: "studio-display",
    label: "Studio Display",
    colors: ["dark", "light"],
  },
  {
    value: "studio-display-xdr",
    label: "Studio Display XDR",
    colors: ["dark", "light"],
  },
] as const

type StudioDisplayVariant = (typeof variants)[number]["value"]
type StudioDisplayColor = (typeof variants)[number]["colors"][number]

export function StudioDisplayVariantDemo() {
  const [activeVariant, setActiveVariant] =
    useState<StudioDisplayVariant>("studio-display")

  const [activeColor, setActiveColor] =
    useState<StudioDisplayColor>("dark")

  const currentVariant = variants.find(
    (variant) => variant.value === activeVariant
  )!

  const handleVariantChange = (variant: StudioDisplayVariant) => {
    setActiveVariant(variant)
    setActiveColor("dark")
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* Variant Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {variants.map((variant) => (
          <button
            key={variant.value}
            onClick={() => handleVariantChange(variant.value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeVariant === variant.value
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {variant.label}
          </button>
        ))}
      </div>

      {/* Color Tabs */}
      <div className="flex items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
        {currentVariant.colors.map((color) => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
            className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-all duration-200 ${
              activeColor === color
                ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      {/* Active Studio Display */}
      <div className="flex flex-col items-center">
        <StudioDisplay
          size="lg"
          variant={activeVariant}
          color={activeColor}
        >
          <div className="flex h-full items-center justify-center bg-background">
            <p className="text-2xl font-medium">
              {currentVariant.label}
            </p>
          </div>
        </StudioDisplay>
      </div>
    </div>
  )
}