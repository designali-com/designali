import {
  Hourglass as HourglassIcon,
} from "@designali/icons"

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
        Upgrade to Designali Pro to keep access to 460+ blocks, templates and Figma files.
      </AlertDescription>
      <AlertAction>
        <Button size="xs">Upgrade</Button>
      </AlertAction>
    </Alert>
  )
}
