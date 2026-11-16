"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Download as DownloadIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ExportDataPopover() {
  const [format, setFormat] = React.useState("csv")
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">(
    "idle"
  )

  return (
    <Popover onOpenChangeComplete={(open) => !open && setStatus("idle")}>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <DownloadIcon data-icon="inline-start" /> Export
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <PopoverHeader>
          <PopoverTitle>Export 1,284 orders</PopoverTitle>
          <PopoverDescription>
            Filters from the current view are applied.
          </PopoverDescription>
        </PopoverHeader>
        <RadioGroup
          value={format}
          onValueChange={(value) => setFormat(String(value))}
          className="grid grid-cols-3 gap-1.5"
        >
          {["csv", "xlsx", "json"].map((f) => (
            <Label
              key={f}
              className="flex items-center justify-center gap-1.5 border p-2 font-normal uppercase has-data-checked:border-primary has-data-checked:bg-primary/5"
            >
              <RadioGroupItem value={f} className="sr-only" />
              {f}
            </Label>
          ))}
        </RadioGroup>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox defaultChecked /> Include column headers
        </Label>
        <Button
          size="sm"
          disabled={status === "loading"}
          onClick={() => {
            setStatus("loading")
            window.setTimeout(() => setStatus("done"), 1200)
          }}
        >
          {status === "loading" ? (
            <>
              <Spinner data-icon="inline-start" /> Preparing...
            </>
          ) : status === "done" ? (
            <>
              <CheckIcon data-icon="inline-start" /> Ready, downloading
            </>
          ) : (
            "Export as " + format.toUpperCase()
          )}
        </Button>
      </PopoverContent>
    </Popover>
  )
}
