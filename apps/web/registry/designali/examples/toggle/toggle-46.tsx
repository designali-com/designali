"use client"

import * as React from "react"
import { SearchIcon, VenetianMaskIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Toggle } from "@workspace/ui/components/toggle"

export default function IncognitoSearchToggle() {
  const [privateMode, setPrivateMode] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search docs" className="ps-8" />
        </div>
        <Toggle
          variant="outline"
          pressed={privateMode}
          onPressedChange={setPrivateMode}
          aria-label="Private search"
          className="h-10 min-w-10"
        >
          <VenetianMaskIcon />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        {privateMode
          ? "Private search: nothing you type here is saved."
          : "Recent searches are saved to this device."}
      </p>
    </div>
  )
}
