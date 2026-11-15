import { TruckIcon } from "lucide-react"

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
          <p className="font-medium">Order #48213</p>
          <p className="text-muted-foreground">Tracking HX-2209-8841</p>
        </div>
        <Badge variant="secondary">In transit</Badge>
      </div>
      <Alert variant="info">
        <TruckIcon />
        <AlertTitle>Your delivery is running late</AlertTitle>
        <AlertDescription>
          Storms in the region slowed the carrier. New estimate:{" "}
          <span className="font-medium text-foreground">Wed, Nov 19</span>{" "}
          <span className="line-through">Mon, Nov 17</span>
        </AlertDescription>
      </Alert>
      <Button size="sm" variant="outline" className="w-full">
        Track package
      </Button>
    </div>
  )
}
