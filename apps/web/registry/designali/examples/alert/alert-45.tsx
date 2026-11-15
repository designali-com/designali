import { GiftIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertPromoGradient() {
  return (
    <Alert className="max-w-md border-primary/20 bg-linear-to-r from-primary/10 via-transparent to-primary/5">
      <GiftIcon className="text-foreground" />
      <AlertTitle>Get 2 months free</AlertTitle>
      <AlertDescription>
        Switch to yearly billing before Nov 30 and save 17% on every seat.
      </AlertDescription>
      <AlertAction>
        <Button size="xs">Switch to yearly</Button>
      </AlertAction>
    </Alert>
  )
}
