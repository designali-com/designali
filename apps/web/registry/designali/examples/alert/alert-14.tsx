import { CalendarPlusIcon, WrenchIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertScheduledMaintenance() {
  return (
    <Alert variant="info" className="max-w-md">
      <WrenchIcon />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        <p>
          Sunday, Nov 23 from <time>02:00</time> to <time>04:00</time> UTC. The
          dashboard will be read-only; the API stays online.
        </p>
        <Button size="xs" variant="outline" className="mt-2">
          <CalendarPlusIcon data-icon="inline-start" />
          Add to calendar
        </Button>
      </AlertDescription>
    </Alert>
  )
}
