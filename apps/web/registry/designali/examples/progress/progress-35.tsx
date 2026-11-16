import {
  CircleAlert as CircleAlertIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function CsvImportProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <FileSpreadsheetIcon className="size-4 text-muted-foreground" />
        <span className="truncate text-sm font-medium">designali-customers.csv</span>
      </div>
      <Progress value={3820} max={5000}>
        <ProgressLabel className="text-muted-foreground">
          3,820 of 5,000 rows
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex items-center gap-1.5 text-xs text-destructive">
        <CircleAlertIcon className="size-3.5" />
        14 rows skipped: missing email address
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Download error log
        </Button>
        <Button variant="ghost" size="sm">
          Cancel import
        </Button>
      </div>
    </div>
  )
}
