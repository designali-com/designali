"use client"

import * as React from "react"
import {
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ClearableTextarea() {
  const [value, setValue] = React.useState(
    "Export logo files, update the icons package, publish new blocks"
  )

  return (
    <div className="relative w-full max-w-sm">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pe-8"
        aria-label="Studio tasks"
        placeholder="Designali tasks for today"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Clear"
          onClick={() => setValue("")}
          className="absolute end-1.5 top-1.5"
        >
          <XIcon />
        </Button>
      )}
    </div>
  )
}
