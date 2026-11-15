"use client"

import * as React from "react"
import { TruckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Textarea } from "@workspace/ui/components/textarea"

const hints = [
  "Leave at door",
  "Ring twice",
  "Call on arrival",
  "Side entrance",
]

export default function DeliveryInstructionsTextarea() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <TruckIcon className="size-4" />
        Delivery instructions
      </div>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={200}
        placeholder="Gate code, where to leave the parcel…"
        aria-label="Delivery instructions"
      />
      <div className="flex flex-wrap gap-1.5">
        {hints.map((h) => (
          <Badge
            key={h}
            variant="outline"
            render={<button type="button" />}
            onClick={() => setValue(value ? value + ". " + h : h)}
            className="cursor-pointer"
          >
            + {h}
          </Badge>
        ))}
      </div>
    </div>
  )
}
