"use client"

import * as React from "react"
import {
  Download as DownloadIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Spinner } from "@workspace/ui/components/spinner"

const formats = [
  { label: "CSV", value: "csv", hint: "Spreadsheet friendly" },
  { label: "JSON", value: "json", hint: "For developers" },
  { label: "PDF", value: "pdf", hint: "Print-ready report" },
]

export default function ExportFormatSelect() {
  const [format, setFormat] = React.useState<string | null>("csv")
  const [exporting, setExporting] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Export transactions</span>
        <span className="text-xs text-muted-foreground">
          1,204 rows from Jan 1 to Mar 31
        </span>
      </div>
      <Select
        items={formats}
        value={format}
        onValueChange={setFormat}
        disabled={exporting}
      >
        <SelectTrigger className="w-full" aria-label="Format">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formats.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
              <span className="text-muted-foreground">{item.hint}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        disabled={exporting}
        onClick={() => {
          setExporting(true)
          setTimeout(() => setExporting(false), 1500)
        }}
      >
        {exporting ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <DownloadIcon data-icon="inline-start" />
        )}
        {exporting
          ? "Exporting..."
          : "Download " + (format ?? "").toUpperCase()}
      </Button>
    </div>
  )
}
