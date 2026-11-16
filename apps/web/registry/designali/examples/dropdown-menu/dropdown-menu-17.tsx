"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Download as DownloadIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Spinner } from "@workspace/ui/components/spinner"

const formats = [
  { id: "csv", label: "CSV", hint: "Spreadsheet friendly" },
  { id: "xlsx", label: "Excel", hint: "With formatting" },
  { id: "json", label: "JSON", hint: "For developers" },
]

export default function ExportWithLoadingState() {
  const [busy, setBusy] = React.useState<string | null>(null)
  const [done, setDone] = React.useState<string | null>(null)

  const run = (id: string) => {
    setBusy(id)
    setDone(null)
    setTimeout(() => {
      setBusy(null)
      setDone(id)
    }, 1200)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Export 1,284 orders</DropdownMenuLabel>
          {formats.map((f) => (
            <DropdownMenuItem
              key={f.id}
              closeOnClick={false}
              disabled={busy !== null}
              onClick={() => run(f.id)}
            >
              <span className="grid flex-1">
                <span className="font-medium">{f.label}</span>
                <span className="text-muted-foreground">{f.hint}</span>
              </span>
              {busy === f.id && <Spinner />}
              {done === f.id && <CheckIcon className="text-emerald-600" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
