"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

const regions = [
  "Frankfurt (eu-central-1)",
  "Dublin (eu-west-1)",
  "Virginia (us-east-1)",
  "Oregon (us-west-2)",
  "Singapore (ap-southeast-1)",
]

export default function ControlledRegionReadout() {
  const [value, setValue] = React.useState<string | null>(regions[0]!)
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Combobox items={regions} value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Choose a region" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No regions found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <div className="flex items-center justify-between border bg-muted/40 px-3 py-2 text-xs">
        <span>
          Deploying to: <span className="font-medium">{value ?? "none"}</span>
        </span>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => setValue(null)}
          disabled={!value}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
