"use client"

import * as React from "react"
import {
  Image as ImageIcon,
} from "@designali/icons"

import { Checkbox } from "@workspace/ui/components/checkbox"

const photos = Array.from(
  { length: 7 },
  (_, i) => "designali-render-" + (2041 + i) + ".jpg"
)

export default function ShiftClickRangeSelect() {
  const [selected, setSelected] = React.useState<number[]>([])
  const lastIndex = React.useRef<number | null>(null)

  const handleClick = (index: number, shiftKey: boolean) => {
    const anchor = lastIndex.current
    setSelected((list) => {
      if (shiftKey && anchor !== null) {
        const [from, to] = anchor < index ? [anchor, index] : [index, anchor]
        const range = Array.from({ length: to - from + 1 }, (_, i) => from + i)
        return Array.from(new Set([...list, ...range]))
      }
      return list.includes(index)
        ? list.filter((i) => i !== index)
        : [...list, index]
    })
    lastIndex.current = index
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Hold Shift to select a range · {selected.length} selected
      </p>
      <div className="flex flex-col border">
        {photos.map((photo, index) => (
          <div
            key={photo}
            className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0"
          >
            <Checkbox
              aria-label={"Select " + photo}
              checked={selected.includes(index)}
              onClick={(e) => {
                e.preventDefault()
                handleClick(index, e.shiftKey)
              }}
            />
            <ImageIcon className="size-4 text-muted-foreground" />
            <span className="font-sans text-xs">{photo}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
