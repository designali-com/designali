"use client"

import * as React from "react"
import {
  Download as DownloadIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Spinner } from "@workspace/ui/components/spinner"
import { Switch } from "@workspace/ui/components/switch"

export default function ExportDataLoadingDialog() {
  const [open, setOpen] = React.useState(false)
  const [exporting, setExporting] = React.useState(false)

  function handleExport() {
    setExporting(true)
    window.setTimeout(() => {
      setExporting(false)
      setOpen(false)
    }, 1600)
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !exporting && setOpen(next)}>
      <DialogTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </DialogTrigger>
      <DialogContent showCloseButton={!exporting}>
        <DialogHeader>
          <DialogTitle>Export Designali orders</DialogTitle>
          <DialogDescription>
            2,418 rows from Jan 1 – Mar 31, 2026.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <FieldSet disabled={exporting}>
            <FieldLegend variant="label">Format</FieldLegend>
            <RadioGroup defaultValue="csv">
              {[
                {
                  value: "csv",
                  label: "CSV",
                  hint: "Spreadsheets and BI tools",
                },
                {
                  value: "json",
                  label: "JSON",
                  hint: "Developers and scripts",
                },
                { value: "pdf", label: "PDF", hint: "Printable statement" },
              ].map((format) => (
                <Field key={format.value} orientation="horizontal">
                  <RadioGroupItem
                    value={format.value}
                    id={"fmt-" + format.value}
                  />
                  <FieldLabel htmlFor={"fmt-" + format.value}>
                    {format.label}
                    <span className="font-normal text-muted-foreground">
                      {format.hint}
                    </span>
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="export-archived">
              Include archived orders
            </FieldLabel>
            <Switch id="export-archived" disabled={exporting} />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button onClick={handleExport} disabled={exporting}>
            {exporting ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <DownloadIcon data-icon="inline-start" />
            )}
            {exporting ? "Preparing file..." : "Export"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
