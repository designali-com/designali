"use client"

import * as React from "react"
import { FileSpreadsheetIcon, UploadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function FileUploadButton() {
  const inputRef = React.useRef<null | HTMLInputElement>(null)
  const [fileName, setFileName] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-2">
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
      />
      <Button variant="outline" onClick={() => inputRef.current?.click()}>
        <UploadIcon data-icon="inline-start" />
        {fileName ? "Replace file" : "Upload CSV"}
      </Button>
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        {fileName ? (
          <>
            <FileSpreadsheetIcon className="size-3.5" />
            {fileName}
          </>
        ) : (
          "Up to 10 MB, comma separated"
        )}
      </p>
    </div>
  )
}
