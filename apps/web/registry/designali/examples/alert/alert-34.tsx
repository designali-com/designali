import { CalendarClockIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertCalendarConflict() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="border p-3 text-xs">
        <p className="font-medium">Quarterly planning</p>
        <p className="text-muted-foreground">
          Thu, Nov 20 &middot; 14:00 to 15:30
        </p>
      </div>
      <Alert variant="warning">
        <CalendarClockIcon />
        <AlertTitle>Conflicts with &ldquo;Design review&rdquo;</AlertTitle>
        <AlertDescription>
          <p>Ivy Tran and 2 others are busy from 14:30 to 15:00.</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Button size="xs">Find a new time</Button>
            <Button size="xs" variant="ghost">
              Keep both
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}
