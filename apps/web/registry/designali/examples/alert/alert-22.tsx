"use client"

import * as React from "react"
import { ChevronDownIcon, FileCheckIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const skipped = [
  { row: 14, reason: "Missing email" },
  { row: 87, reason: "Duplicate of row 12" },
  { row: 203, reason: "Invalid phone number" },
]

export default function AlertImportResult() {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <Alert variant="success" className="max-w-md">
      <FileCheckIcon />
      <AlertTitle>Imported 1,248 contacts</AlertTitle>
      <AlertDescription>
        <p>
          {skipped.length} rows were skipped and can be fixed in your
          spreadsheet.
        </p>
        <Button
          size="xs"
          variant="link"
          className="h-auto px-0"
          onClick={() => setShowDetails((s) => !s)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide details" : "Show skipped rows"}
          <ChevronDownIcon
            data-icon="inline-end"
            className={cn("transition-transform", showDetails && "rotate-180")}
          />
        </Button>
        {showDetails && (
          <ul className="mt-1 border-t pt-1">
            {skipped.map((item) => (
              <li key={item.row} className="flex justify-between">
                <span className="font-mono">Row {item.row}</span>
                <span>{item.reason}</span>
              </li>
            ))}
          </ul>
        )}
      </AlertDescription>
    </Alert>
  )
}
