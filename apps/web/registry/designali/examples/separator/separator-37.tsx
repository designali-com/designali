"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const sizes = ["Solo", "Team", "Studio", "Agency"]

export default function ProductCardSections() {
  const [size, setSize] = React.useState("Team")

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <div className="aspect-4/3 bg-linear-to-br from-primary/60 to-chart-1/60" />
      <div className="flex items-start justify-between gap-2 p-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium">Design Agency template</span>
          <span className="text-xs text-muted-foreground">Next.js · Tailwind CSS · Figma</span>
        </div>
        <span className="text-sm font-semibold">$74</span>
      </div>
      <Separator />
      <div className="flex gap-1 p-4">
        {sizes.map((option) => (
          <Button
            key={option}
            size="sm"
            variant={option === size ? "default" : "outline"}
            onClick={() => setSize(option)}
            className="flex-1"
          >
            {option}
          </Button>
        ))}
      </div>
      <Separator />
      <div className="p-4">
        <Button className="w-full">Buy template</Button>
      </div>
    </div>
  )
}
