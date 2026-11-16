import {
  Truck as TruckIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function AlertShippingDelay() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div>
          <p className="font-medium">Project #48213</p>
          <p className="text-muted-foreground">Designali · Brand identity</p>
        </div>
        <Badge variant="secondary">In review</Badge>
      </div>
      <Alert variant="info">
        <TruckIcon />
        <AlertTitle>Your Figma handoff is running late</AlertTitle>
        <AlertDescription>
          An extra feedback round moved the handoff. New estimate:{" "}
          <span className="font-medium text-foreground">Wed, Nov 19</span>{" "}
          <span className="line-through">Mon, Nov 17</span>
        </AlertDescription>
      </Alert>
      <Button size="sm" variant="outline" className="w-full">
        View project
      </Button>
    </div>
  )
}
