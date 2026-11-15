"use client"

import * as React from "react"
import {
  BellIcon,
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const variants = [
  {
    value: "default" as const,
    icon: BellIcon,
    title: "Heads up",
    body: "Your weekly report is ready to view.",
  },
  {
    value: "info" as const,
    icon: InfoIcon,
    title: "New in reports",
    body: "You can now schedule exports to your inbox.",
  },
  {
    value: "success" as const,
    icon: CircleCheckIcon,
    title: "Report sent",
    body: "Delivered to 12 recipients.",
  },
  {
    value: "warning" as const,
    icon: TriangleAlertIcon,
    title: "Partial data",
    body: "Two sources haven’t synced since yesterday.",
  },
  {
    value: "error" as const,
    icon: CircleXIcon,
    title: "Export failed",
    body: "The report was too large to attach.",
  },
]

export default function AlertVariantPlayground() {
  const [index, setIndex] = React.useState(0)
  const current = variants[index] ?? variants[0]!

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-1">
        {variants.map((variant, i) => (
          <Button
            key={variant.value}
            size="xs"
            variant={i === index ? "default" : "outline"}
            onClick={() => setIndex(i)}
          >
            {variant.value}
          </Button>
        ))}
      </div>
      <Alert variant={current.value}>
        <current.icon />
        <AlertTitle>{current.title}</AlertTitle>
        <AlertDescription>{current.body}</AlertDescription>
      </Alert>
    </div>
  )
}
