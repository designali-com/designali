"use client"

import * as React from "react"
import {
  DownloadIcon,
  FileJsonIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const formats = [
  {
    value: "csv",
    label: "CSV",
    hint: "Comma-separated, opens anywhere",
    icon: FileTextIcon,
  },
  {
    value: "json",
    label: "JSON",
    hint: "Structured, for developers",
    icon: FileJsonIcon,
  },
  {
    value: "xlsx",
    label: "Spreadsheet",
    hint: "Formatted with headers",
    icon: FileSpreadsheetIcon,
  },
]

export default function ExportFormatOptions() {
  const [format, setFormat] = React.useState("csv")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Export 1,284 contacts</p>
        <p className="text-xs text-muted-foreground">Choose a file format.</p>
      </div>
      <RadioGroup value={format} onValueChange={(v) => setFormat(v as string)}>
        {formats.map((f) => (
          <FieldLabel key={f.value} htmlFor={"fmt-" + f.value}>
            <Field orientation="horizontal">
              <f.icon className="size-4 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{f.label}</FieldTitle>
                <FieldDescription>{f.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={f.value} id={"fmt-" + f.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <Button>
        <DownloadIcon data-icon="inline-start" />
        Download .{format}
      </Button>
    </div>
  )
}
