"use client"

import * as React from "react"
import {
  CloudUpload as UploadCloudIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

export default function FileDropzoneField() {
  const [file, setFile] = React.useState<{ name: string; size: number } | null>(
    null
  )

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="upload-receipt">Receipt</FieldLabel>
      <label
        htmlFor="upload-receipt"
        className="flex cursor-pointer flex-col items-center gap-2 border border-dashed p-6 text-center hover:bg-muted/50"
      >
        <UploadCloudIcon className="size-6 text-muted-foreground" />
        <span className="text-xs font-medium">
          {file ? file.name : "Click to upload or drag a file here"}
        </span>
        <span className="text-xs text-muted-foreground">
          {file
            ? (file.size / 1024).toFixed(1) + " KB"
            : "PDF, PNG or JPG up to 10 MB"}
        </span>
      </label>
      <input
        id="upload-receipt"
        type="file"
        accept=".pdf,.png,.jpg"
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0]
          setFile(f ? { name: f.name, size: f.size } : null)
        }}
      />
      <FieldDescription>
        Attach the receipt for expenses over $75.
      </FieldDescription>
    </Field>
  )
}
