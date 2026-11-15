"use client"

import * as React from "react"
import { DownloadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"

const fields = [
  "Name",
  "Email",
  "Company",
  "Phone",
  "Country",
  "Signup date",
  "Plan",
  "Last active",
]

export default function ExportFieldsPicker() {
  const [picked, setPicked] = React.useState<string[]>([
    "Name",
    "Email",
    "Plan",
  ])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Fields to export</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={() => setPicked(fields)}>
            All
          </Button>
          <Button variant="ghost" size="xs" onClick={() => setPicked([])}>
            None
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {fields.map((field) => (
          <label key={field} className="flex items-center gap-2 text-xs">
            <Checkbox
              checked={picked.includes(field)}
              onCheckedChange={(checked) =>
                setPicked((list) =>
                  checked ? [...list, field] : list.filter((f) => f !== field)
                )
              }
            />
            {field}
          </label>
        ))}
      </div>
      <Button size="sm" disabled={picked.length === 0}>
        <DownloadIcon data-icon="inline-start" />
        Export {picked.length} fields
      </Button>
    </div>
  )
}
