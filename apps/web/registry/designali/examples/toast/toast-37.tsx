"use client"

import {
  FileSpreadsheet as FileSpreadsheetIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

function importRows() {
  return new Promise<{ imported: number; skipped: number }>((resolve) =>
    setTimeout(() => resolve({ imported: 318, skipped: 4 }), 1600)
  )
}

export default function CsvImportResultToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2">
          <FileSpreadsheetIcon className="size-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">customers.csv</p>
            <p className="text-xs text-muted-foreground">322 rows detected</p>
          </div>
        </div>
        <Button
          size="sm"
          onClick={() =>
            notify.promise(importRows(), {
              loading: {
                title: "Importing Designali customers",
                description: "Matching columns...",
              },
              success: (r: { imported: number; skipped: number }) => ({
                title: r.imported + " customers imported",
                description: r.skipped + " duplicate rows were skipped.",
              }),
              error: "Import failed",
            })
          }
        >
          Start import
        </Button>
      </div>
    </Toaster>
  )
}
