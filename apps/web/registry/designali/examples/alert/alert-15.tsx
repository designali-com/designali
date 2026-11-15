import { HourglassIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function AlertTrialEnding() {
  return (
    <Alert className="max-w-md">
      <HourglassIcon />
      <AlertTitle className="flex items-center gap-2">
        Your trial ends soon
        <Badge variant="secondary">3 days left</Badge>
      </AlertTitle>
      <AlertDescription>
        Upgrade to keep your 14 boards, automations and guest access.
      </AlertDescription>
      <AlertAction>
        <Button size="xs">Upgrade</Button>
      </AlertAction>
    </Alert>
  )
}
