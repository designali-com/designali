"use client"

import { useState } from "react"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

const variants = [
  {
    value: "macbook-air",
    label: "MacBook Air",
    colors: ["sky-blue", "midnight", "starlight", "silver"],
  },
  {
    value: "macbook-pro",
    label: "MacBook Pro",
    colors: ["black", "silver"],
  },
  {
    value: "macbook-neo",
    label: "MacBook Neo",
    colors: ["silver", "indigo", "blush", "citrus"],
  },
] as const

type MacbookVariant = (typeof variants)[number]["value"]
type MacbookColor = (typeof variants)[number]["colors"][number]

export function MacbookVariantDemo() {
  const [activeVariant, setActiveVariant] =
    useState<MacbookVariant>("macbook-neo")

  const [activeColor, setActiveColor] =
    useState<MacbookColor>("citrus")

  const currentVariant = variants.find(
    (variant) => variant.value === activeVariant
  )!

  const handleVariantChange = (variant: MacbookVariant) => {
    setActiveVariant(variant)

    const selectedVariant = variants.find(
      (item) => item.value === variant
    )!

    setActiveColor(selectedVariant.colors[0])
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* Model Tabs */}
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
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
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
            {color.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Active MacBook */}
      <div className="flex flex-col items-center">
        <Macbook
          size="lg"
          variant={activeVariant}
          color={activeColor}
        >
          <div className="flex h-full items-center justify-center bg-background">
            <p className="text-2xl font-medium capitalize">
              {currentVariant.label} — {activeColor.replace("-", " ")}
            </p>
          </div>
        </Macbook>
      </div>
    </div>
  )
}