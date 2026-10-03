"use client"

import { useState } from "react"
import { IPhone } from "@/registry/designali/ui/apple/iphone"

type IPhoneColor =
  | "black"
  | "glacier"
  | "silver"
  | "burgundy"

const colors: {
  value: IPhoneColor
  label: string
}[] = [
  { value: "black", label: "Black" },
  { value: "glacier", label: "Glacier" },
  { value: "silver", label: "Silver" },
  { value: "burgundy", label: "Burgundy" },
]

export function IPhoneColorDemo() {
  const [color, setColor] =
    useState<IPhoneColor>("silver")

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">

      <div className="flex flex-wrap items-center justify-center gap-2">
        {colors.map((option) => (
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

      <IPhone
        variant="18-pro"
        color={color}
        orientation="landscape" 
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