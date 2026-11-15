import { TriangleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"

export default function AlertApiDeprecation() {
  return (
    <Alert variant="warning" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>
        <code className="bg-muted px-1 font-mono">GET /v1/charges</code> is
        deprecated
      </AlertTitle>
      <AlertDescription>
        <p>
          It will stop responding on March 1, 2027. Use{" "}
          <code className="bg-muted px-1 font-mono text-foreground">
            GET /v2/payments
          </code>{" "}
          instead, which supports cursor pagination.
        </p>
        <p>
          <a href="#">Read the migration guide</a>
        </p>
      </AlertDescription>
    </Alert>
  )
}
