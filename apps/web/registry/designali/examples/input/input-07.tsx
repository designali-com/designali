"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function FileUploadInput() {
  const [file, setFile] = React.useState<string | null>(null)

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="csv-upload">Import Designali clients</FieldLabel>
      <Input
        id="csv-upload"
        type="file"
        accept=".csv,text/csv"
        onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
      />
      <FieldDescription>
        {file
          ? "Ready to import " + file
          : "CSV up to 10 MB exported from your Designali studio CRM."}
      </FieldDescription>
    </Field>
  )
}
