import {
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

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
        <code className="bg-muted px-1 font-mono">GET /v1/blocks</code> is
        deprecated
      </AlertTitle>
      <AlertDescription>
        <p>
          It will stop responding on March 1, 2027. Use{" "}
          <code className="bg-muted px-1 font-mono text-foreground">
            GET /v2/registry
          </code>{" "}
          instead, which serves all 460+ Designali blocks with cursor pagination.
        </p>
        <p>
          <a href="#">Read the migration guide in /docs</a>
        </p>
      </AlertDescription>
    </Alert>
  )
}
